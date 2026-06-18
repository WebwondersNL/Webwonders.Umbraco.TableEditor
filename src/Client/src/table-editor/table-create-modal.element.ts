import { css, customElement, html, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";
import type { TableCreateModalData, TableCreateModalValue } from "./table-create-modal.token";
import * as XLSX from "xlsx";
import Papa from "papaparse";

type Source = "scratch" | "file";

const MAX_COLS = 20;
const MAX_ROWS = 50;

@customElement("webwonders-table-create-modal")
export class WebwondersTableCreateModalElement extends UmbModalBaseElement<
    TableCreateModalData,
    TableCreateModalValue
> {
    @state() private _source: Source | null = null;
    @state() private _rows = 3;
    @state() private _columns = 3;
    @state() private _parsed: { name: string; sheetName?: string; columnNames: string[]; cellData: string[][]; truncated?: string } | null = null;
    @state() private _parseError = "";

    connectedCallback(): void {
        super.connectedCallback();
        if (typeof this.data?.rows === "number" && this.data.rows > 0) this._rows = this.data.rows;
        if (typeof this.data?.columns === "number" && this.data.columns > 0) this._columns = this.data.columns;
    }

    private _selectSource(source: Source) {
        this._source = source;
        this._parsed = null;
        this._parseError = "";
    }

    private _onRowsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._rows = Number.isFinite(raw) ? Math.max(1, Math.min(50, raw)) : 1;
    }

    private _onColumnsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._columns = Number.isFinite(raw) ? Math.max(1, Math.min(20, raw)) : 1;
    }

    private _onDropzoneChange(e: CustomEvent) {
        const files: File[] = e.detail?.files ?? [];
        if (files[0]) this._handleFile(files[0]);
    }

    private _handleFile(file: File) {
        this._parseError = "";
        this._parsed = null;
        const ext = file.name.split(".").pop()?.toLowerCase();
        if (ext === "csv") {
            this._parseCsv(file);
        } else if (ext === "xlsx" || ext === "xls") {
            this._parseXlsx(file);
        } else {
            this._parseError = "Unsupported file type. Please upload an .xlsx, .xls or .csv file.";
        }
    }

    private _applyLimits(columnNames: string[], cellData: string[][]): { columnNames: string[]; cellData: string[][]; truncated?: string } {
        const colsOver = columnNames.length > MAX_COLS;
        const rowsOver = cellData.length > MAX_ROWS;
        const truncatedCols = columnNames.slice(0, MAX_COLS);
        const truncatedRows = cellData.slice(0, MAX_ROWS).map(r => r.slice(0, MAX_COLS));
        const parts = [];
        if (colsOver) parts.push(`columns capped at ${MAX_COLS} (file had ${columnNames.length})`);
        if (rowsOver) parts.push(`rows capped at ${MAX_ROWS} (file had ${cellData.length})`);
        return { columnNames: truncatedCols, cellData: truncatedRows, truncated: parts.length ? parts.join(", ") : undefined };
    }

    private _parseCsv(file: File) {
        Papa.parse<string[]>(file, {
            skipEmptyLines: true,
            complete: (result) => {
                const rows = result.data;
                if (!rows.length) { this._parseError = "The CSV file appears to be empty."; return; }
                const columnNames = rows[0].map((v) => String(v ?? ""));
                const cellData = rows.slice(1).map((row) => columnNames.map((_, i) => String(row[i] ?? "")));
                const limited = this._applyLimits(columnNames, cellData);
                this._parsed = { name: file.name, ...limited };
            },
            error: (err) => { this._parseError = `Failed to parse CSV: ${err.message}`; },
        });
    }

    private _parseXlsx(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target!.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const raw: string[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "", raw: false }) as string[][];
                if (!raw.length) { this._parseError = "The Excel file appears to be empty."; return; }

                const columnNames = raw[0].map((v) => String(v ?? ""));
                const colCount = columnNames.length;
                const cellData = raw.slice(1).map((row) => columnNames.map((_, i) => String(row[i] ?? "")));

                for (const merge of (sheet["!merges"] ?? []) as XLSX.Range[]) {
                    const topLeftVal = String(sheet[XLSX.utils.encode_cell({ r: merge.s.r, c: merge.s.c })]?.v ?? "");
                    for (let r = merge.s.r; r <= merge.e.r; r++) {
                        for (let c = merge.s.c; c <= merge.e.c; c++) {
                            if (r === 0 && c < colCount) columnNames[c] = topLeftVal;
                            else if (r > 0 && (r - 1) < cellData.length && c < colCount) cellData[r - 1][c] = topLeftVal;
                        }
                    }
                }

                const limited = this._applyLimits(columnNames, cellData);
                const multiSheet = workbook.SheetNames.length > 1 ? sheetName : undefined;
                this._parsed = { name: file.name, sheetName: multiSheet, ...limited };
            } catch { this._parseError = "Failed to read the Excel file."; }
        };
        reader.readAsArrayBuffer(file);
    }

    private _close() { this.modalContext?.reject(); }

    private _submit() {
        if (this._source === "file" && this._parsed) {
            this.value = {
                rows: this._parsed.cellData.length,
                columns: this._parsed.columnNames.length,
                columnNames: this._parsed.columnNames,
                cellData: this._parsed.cellData,
            };
        } else {
            this.value = { rows: this._rows, columns: this._columns };
        }
        this.modalContext?.submit();
    }

    private get _canSubmit() {
        if (!this._source) return false;
        if (this._source === "file") return !!this._parsed;
        return true;
    }

    override render() {
        return html`
            <umb-body-layout .headline=${this.data?.headline ?? "Create table"}>
                ${this._renderSourcePicker()}
                ${this._source === "scratch" ? this._renderScratchFields() : null}
                ${this._source === "file" ? this._renderFileFields() : null}

                <div slot="actions">
                    <uui-button look="secondary" @click=${this._close} label="Cancel">Cancel</uui-button>
                    <uui-button look="primary" .disabled=${!this._canSubmit} @click=${this._submit} label="Create">Create</uui-button>
                </div>
            </umb-body-layout>
        `;
    }

    private _renderSourcePicker() {
        return html`
            <div class="sourcePicker">
                <button class=${["sourceOption", this._source === "scratch" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("scratch")}>
                    <uui-icon name="icon-grid"></uui-icon>
                    <span>Create from scratch</span>
                </button>
                <button class=${["sourceOption", this._source === "file" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("file")}>
                    <uui-icon name="icon-document"></uui-icon>
                    <span>Import from Excel / CSV</span>
                </button>
            </div>
        `;
    }

    private _renderScratchFields() {
        return html`
            <div class="fields">
                <uui-label for="inputRows">Rows</uui-label>
                <uui-input id="inputRows" type="number" label="Rows" min="1" max="50"
                    .value=${String(this._rows)} @input=${this._onRowsInput}></uui-input>
                <uui-label for="inputColumns">Columns</uui-label>
                <uui-input id="inputColumns" type="number" label="Columns" min="1" max="20"
                    .value=${String(this._columns)} @input=${this._onColumnsInput}></uui-input>
            </div>
        `;
    }

    private _renderFileFields() {
        return html`
            <div class="fileArea">
                <div class="dropzoneWrap ${this._parsed ? "success" : ""}">
                    <uui-file-dropzone
                        accept=".xlsx,.xls,.csv"
                        label="Drop your file here or click to browse"
                        @change=${this._onDropzoneChange}>
                    </uui-file-dropzone>
                    <div class="dropzoneOverlay" aria-hidden="true">
                        <uui-symbol-file-dropzone class="dropzoneSymbol" ?error=${!!this._parseError && !this._parsed}></uui-symbol-file-dropzone>
                        ${this._parsed ? html`
                            <span class="dropzoneTitle">${this._parsed.name}</span>
                            <span class="dropzoneSubtitle">
                                <strong>${this._parsed.columnNames.length}</strong> columns &middot;
                                <strong>${this._parsed.cellData.length}</strong> rows detected
                                ${this._parsed.sheetName ? html`&middot; sheet <strong>${this._parsed.sheetName}</strong>` : null}
                            </span>
                            ${this._parsed.truncated ? html`<span class="dropzoneTruncated">${this._parsed.truncated}</span>` : null}
                            <span class="dropzoneHint">Click or drop to replace</span>
                        ` : html`
                            <span class="dropzoneTitle">Drag and drop your file here</span>
                            <span class="dropzoneSubtitle">or click to browse</span>
                            <span class="dropzoneHint">.xlsx &nbsp;·&nbsp; .xls &nbsp;·&nbsp; .csv</span>
                        `}
                    </div>
                </div>

                ${this._parseError ? html`
                    <div class="errorBanner">
                        <uui-icon name="icon-alert"></uui-icon>
                        <span>${this._parseError}</span>
                    </div>
                ` : null}
            </div>
        `;
    }

    static styles = css`
        .sourcePicker {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--uui-size-4);
        }

        .sourceOption {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-6);
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            color: var(--uui-color-text);
            cursor: pointer;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
            font-size: var(--uui-type-small-size);
        }

        .sourceOption:hover {
            background: var(--uui-color-surface-alt);
            border-color: var(--uui-color-border-emphasis);
        }

        .sourceOption.selected {
            border-color: var(--uui-color-selected);
            background: color-mix(in srgb, var(--uui-color-selected) 8%, transparent);
            color: var(--uui-color-selected);
        }

        .sourceOption uui-icon {
            font-size: 1.5rem;
        }

        .fields {
            display: grid;
            gap: var(--uui-size-4);
            margin-top: var(--uui-size-4);
        }

        .fileArea {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-3);
            margin-top: var(--uui-size-4);
        }

        /* ── Dropzone wrapper ── */
        .dropzoneWrap {
            position: relative;
            height: 200px;
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            overflow: hidden;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
        }

        .dropzoneWrap.success {
            border-color: var(--uui-color-positive);
            background: color-mix(in srgb, var(--uui-color-positive) 5%, transparent);
        }

        uui-file-dropzone {
            position: absolute;
            inset: 0;
            opacity: 0;
            z-index: 1;
            cursor: pointer;
        }

        .dropzoneOverlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-2);
            padding: var(--uui-size-6);
            text-align: center;
            pointer-events: none;
        }

        .dropzoneSymbol {
            width: 52px;
            height: 52px;
        }

        .dropzoneTitle {
            font-weight: 600;
            font-size: var(--uui-type-default-size);
            color: var(--uui-color-text);
            word-break: break-all;
        }

        .dropzoneSubtitle {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-text-alt);
        }

        .dropzoneHint {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-border-emphasis);
            letter-spacing: 0.03em;
        }

        .dropzoneTruncated {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-warning-emphasis, var(--uui-color-border-emphasis));
        }

        /* ── Error banner ── */
        .errorBanner {
            display: flex;
            align-items: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-3) var(--uui-size-4);
            border-radius: var(--uui-border-radius);
            background: color-mix(in srgb, var(--uui-color-danger) 8%, transparent);
            color: var(--uui-color-danger-emphasis);
            font-size: var(--uui-type-small-size);
        }
    `;
}

export { WebwondersTableCreateModalElement as element };

declare global {
    interface HTMLElementTagNameMap {
        "webwonders-table-create-modal": WebwondersTableCreateModalElement;
    }
}
