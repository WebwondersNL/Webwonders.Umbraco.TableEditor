import {
    css,
    html,
    LitElement,
    customElement,
    property,
    state
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal, umbOpenModal } from "@umbraco-cms/backoffice/modal";
import { TABLE_SETTINGS_MODAL_TOKEN } from "./table-settings-modal.token";
import { TABLE_CREATE_MODAL_TOKEN } from "./table-create-modal.token";

type TableCell = { value: string };
type TableColumn = { value: string };
type RowSettings = { isHeaderRow?: boolean; isUnderlined?: boolean };
type TableRow = { cells: TableCell[]; settings: RowSettings };
type TableSettings = { columnHasHeader: boolean; rowHasHeader: boolean; highlightEmptyCells?: boolean };
export type TableModel = { settings: TableSettings; columns: TableColumn[]; rows: TableRow[] };

function createEmptyTable(): TableModel {
    return {
        settings: { columnHasHeader: false, rowHasHeader: false, highlightEmptyCells: false },
        columns: [],
        rows: [],
    };
}

function deepCopy<T>(obj: T): T {
    return obj ? (JSON.parse(JSON.stringify(obj)) as T) : obj;
}

@customElement("webwonders-table-editor-property-editor-ui")
export class WebwondersTableEditorPropertyEditorUiElement extends UmbElementMixin(LitElement) {
    @property({ attribute: false })
    public value?: TableModel;

    @property({ type: Boolean })
    public readonly?: boolean;

    @state()
    private _isEdit = false;

    @state()
    private _original?: TableModel;

    @state() private _dragRowIndex: number | null = null;
    @state() private _dragOverRowIndex: number | null = null;

    @state() private _dragColIndex: number | null = null;
    @state() private _dragOverColIndex: number | null = null;

    connectedCallback(): void {
        super.connectedCallback();

        const v = this.value ?? createEmptyTable();
        if (!v.settings) v.settings = { columnHasHeader: false, rowHasHeader: false, highlightEmptyCells: false };
        if (v.settings.highlightEmptyCells === undefined) v.settings.highlightEmptyCells = false;

        this.value = v;
        this._original = deepCopy(v);
    }

    private _commit(next: TableModel) {
        this.value = next;
        this.dispatchEvent(new UmbChangeEvent());
    }

    private _toggleEdit() {
        if (this.readonly) return;
        this._isEdit = !this._isEdit;
        if (this._isEdit) this._original = deepCopy(this.value ?? createEmptyTable());
    }

    private _cancel() {
        if (this.readonly) return;
        this._isEdit = false;
        if (this._original) this._commit(deepCopy(this._original));
    }
    
    private async _openTableSettings() {
        if (this.readonly) return;

        const current = this.value ?? createEmptyTable();

        const result = await umbOpenModal(this, TABLE_SETTINGS_MODAL_TOKEN, {
            data: {
                headline: "Table settings",
                settings: {
                    columnHasHeader: !!current.settings.columnHasHeader,
                    rowHasHeader: !!current.settings.rowHasHeader,
                    highlightEmptyCells: !!current.settings.highlightEmptyCells,
                },
            },
        }).catch(() => undefined);
        
        if (!result?.settings) return;

        const t = deepCopy(current);
        t.settings = {
            ...t.settings,
            ...result.settings,
        };

        this._commit(t);
    }

    private _updateRowSettings(rowIndex: number, patch: Partial<RowSettings>) {
        if (this.readonly) return;

        const t = deepCopy(this.value ?? createEmptyTable());
        const row = t.rows[rowIndex];
        if (!row) return;

        row.settings = {
            ...(row.settings ?? {}),
            ...patch,
        };

        this._commit(t);
    }

    private async _openCreateTableModal() {
        if (this.readonly) return;

        const result = await umbOpenModal(this, TABLE_CREATE_MODAL_TOKEN, {
            data: {
                headline: "Create table",
                rows: 3,
                columns: 3,
            },
        }).catch(() => undefined);

        if (!result) return;

        this._createTable(result.rows, result.columns, result.columnNames, result.cellData);
    }

    private _createTable(rowCount: number, colCount: number, columnNames?: string[], cellData?: string[][]) {
        const cols = Array.from({ length: colCount }, (_, i) => ({ value: columnNames?.[i] ?? "" }));
        const rows = Array.from({ length: rowCount }, (_, ri) => ({
            settings: {},
            cells: Array.from({ length: colCount }, (_, ci) => ({ value: cellData?.[ri]?.[ci] ?? "" })),
        }));

        const next = {
            ...(this.value ?? { settings: { columnHasHeader: false, rowHasHeader: false, highlightEmptyCells: false }, columns: [], rows: [] }),
            settings: {
                columnHasHeader: false,
                rowHasHeader: false,
                highlightEmptyCells: false,
            },
            columns: cols,
            rows,
        };
        
        this.value = next;
        this._isEdit = true;
        this.dispatchEvent(new UmbChangeEvent());
    }
    
    private _insertRow(index: number) {
        if (this.readonly) return;

        const t = deepCopy(this.value ?? createEmptyTable());

        const newRow: TableRow = {
            settings: { isHeaderRow: false, isUnderlined: false },
            cells: t.columns.map(() => ({ value: "" })),
        };

        const safeIndex = Math.max(0, Math.min(index, t.rows.length));
        t.rows.splice(safeIndex, 0, newRow);

        this._commit(t);
    }

    private _insertCol(index: number) {
        if (this.readonly) return;

        const t = deepCopy(this.value ?? createEmptyTable());

        const safeIndex = Math.max(0, Math.min(index, t.columns.length));
        
        t.columns.splice(safeIndex, 0, { value: "" });
        
        for (const row of t.rows) {
            row.cells.splice(safeIndex, 0, { value: "" });
        }

        this._commit(t);
    }

    private async _removeCol(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if (t.columns.length <= 1) return;
        if (index < 0 || index >= t.columns.length) return;

        try {
            await umbConfirmModal(this, {
                headline: "Delete column",
                content: "Are you sure you want to delete this column? This cannot be undone.",
                color: "danger",
                confirmLabel: "Delete",
            });
        } catch {
            return;
        }

        t.columns.splice(index, 1);
        for (const row of t.rows) row.cells.splice(index, 1);
        this._commit(t);
    }

    private async _removeRow(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if (t.rows.length <= 1) return;
        if (index < 0 || index >= t.rows.length) return;

        try {
            await umbConfirmModal(this, {
                headline: "Delete row",
                content: "Are you sure you want to delete this row? This cannot be undone.",
                color: "danger",
                confirmLabel: "Delete",
            });
        } catch {
            return;
        }

        t.rows.splice(index, 1);
        this._commit(t);
    }

    private _updateColName(index: number, value: string) {
        const t = deepCopy(this.value ?? createEmptyTable());
        if (!t.columns[index]) return;
        t.columns[index].value = value;
        this._commit(t);
    }

    private _updateCell(rowIndex: number, colIndex: number, value: string) {
        const t = deepCopy(this.value ?? createEmptyTable());
        const row = t.rows[rowIndex];
        if (!row?.cells[colIndex]) return;
        row.cells[colIndex].value = value;
        this._commit(t);
    }

    private _isTableEmpty(table: TableModel | undefined) {
        if (!table) return true;
        return table.columns.length === 0 && table.rows.length === 0;
    }

    private _moveRow(from: number, to: number) {
        if (from === to) return;

        const t = deepCopy(this.value ?? createEmptyTable());
        if (from < 0 || from >= t.rows.length) return;

        // clamp "to" to valid insertion points (0..len-1)
        const clampedTo = Math.max(0, Math.min(to, t.rows.length - 1));

        const [row] = t.rows.splice(from, 1);
        t.rows.splice(clampedTo, 0, row);

        this._commit(t);
    }

    private _moveCol(from: number, to: number) {
        if (from === to) return;

        const t = deepCopy(this.value ?? createEmptyTable());
        if (from < 0 || from >= t.columns.length) return;

        const clampedTo = Math.max(0, Math.min(to, t.columns.length - 1));

        const [col] = t.columns.splice(from, 1);
        t.columns.splice(clampedTo, 0, col);

        for (const row of t.rows) {
            const [cell] = row.cells.splice(from, 1);
            row.cells.splice(clampedTo, 0, cell);
        }

        this._commit(t);
    }

    private _onRowDragStart(e: DragEvent, rowIndex: number) {
        if (this.readonly) return;
        this._dragRowIndex = rowIndex;
        this._dragOverRowIndex = rowIndex;
        this.renderRoot.querySelectorAll<HTMLElement>(".insertLine uui-button-inline-create").forEach((el) => {
            el.style.pointerEvents = "none";
        });
        e.dataTransfer?.setData("text/plain", String(rowIndex));
        e.dataTransfer?.setData("application/x-webwonders-row", "1");
        e.dataTransfer?.setDragImage?.((e.target as HTMLElement), 10, 10);
        if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
    }

    private _onRowDragOver(e: DragEvent, rowIndex: number) {
        // allow drop
        if (!this._isDraggingRow(e)) return;
        e.preventDefault();
        this._dragOverRowIndex = rowIndex;
        if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
    }

    private _onRowDrop(e: DragEvent, rowIndex: number) {
        if (!this._isDraggingRow(e)) return;
        e.preventDefault();

        const from = this._dragRowIndex;
        this._clearRowDrag();

        if (from === null) return;
        this._moveRow(from, rowIndex);
    }

    private _onRowDragEnd() {
        this._clearRowDrag();
        this.renderRoot.querySelectorAll<HTMLElement>(".insertLine uui-button-inline-create").forEach((el) => {
            el.style.pointerEvents = "";
        });
    }

    private _clearRowDrag() {
        this._dragRowIndex = null;
        this._dragOverRowIndex = null;
    }

    private _isDraggingRow(e: DragEvent) {
        return this._dragRowIndex !== null && e.dataTransfer?.types?.includes("application/x-webwonders-row");
    }


// --- columns ---
    private _onColDragStart(e: DragEvent, colIndex: number) {
        if (this.readonly) return;
        this._dragColIndex = colIndex;
        this._dragOverColIndex = colIndex;

        this.renderRoot.querySelectorAll<HTMLElement>(".colRailActions").forEach((el) => {
            el.style.pointerEvents = "none";
        });

        e.dataTransfer?.setData("text/plain", String(colIndex));
        e.dataTransfer?.setData("application/x-webwonders-col", "1");
        e.dataTransfer?.setDragImage?.((e.target as HTMLElement), 10, 10);
        if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
    }

    private _onColDragOver(e: DragEvent, colIndex: number) {
        if (!this._isDraggingCol(e)) return;
        e.preventDefault();
        this._dragOverColIndex = colIndex;
        if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
    }

    private _onColDrop(e: DragEvent, colIndex: number) {
        if (!this._isDraggingCol(e)) return;
        e.preventDefault();

        const from = this._dragColIndex;
        this._clearColDrag();

        if (from === null) return;
        this._moveCol(from, colIndex);
    }

    private _onColDragEnd() {
        this._clearColDrag();
        this.renderRoot.querySelectorAll<HTMLElement>(".colRailActions").forEach((el) => {
            el.style.pointerEvents = "";
        });
    }

    private _clearColDrag() {
        this._dragColIndex = null;
        this._dragOverColIndex = null;
    }

    private _isDraggingCol(e: DragEvent) {
        return this._dragColIndex !== null && e.dataTransfer?.types?.includes("application/x-webwonders-col");
    }

    override render() {
        const table = this.value ?? createEmptyTable();

        return html`
            ${this._isEdit
            ? html`
                    ${this._renderEditControls(table)}
                    ${this._renderEditTable(table)}
                `
            : html`${this._renderReadTable(table)}`}

            ${this._renderToolbar()}
        `;
    }

    private _renderToolbar() {
        const table = this.value;
        const isEmpty = this._isTableEmpty(table);

        if (this._isEdit) return null;

        return html`
            <div class="toolbar">
                ${isEmpty
                    ? html`
                        <uui-button
                            look="primary"
                            label="Create table"
                            ?disabled=${this.readonly}
                            @click=${this._openCreateTableModal}>
                            Create
                        </uui-button>
                    `
                    : html`
                        <uui-button
                            look="primary"
                            label="Edit"
                            ?disabled=${this.readonly}
                            @click=${this._toggleEdit}>
                            Edit
                        </uui-button>
                    `}
            </div>
        `;
    }

    private _renderEditControls(_table: TableModel) {
        return html`
            <div class="editControls">
                <uui-button
                        look="secondary"
                        compact
                        @click=${this._openTableSettings}
                        .disabled=${this.readonly}
                        label="Table settings">
                    <uui-icon name="icon-settings"></uui-icon>
                </uui-button>

                <div class="editActions">
                    <uui-button
                            look="secondary"
                            @click=${this._cancel}
                            .disabled=${this.readonly}
                            label="Cancel">
                        Cancel
                    </uui-button>
                    <uui-button
                            look="primary"
                            @click=${this._toggleEdit}
                            .disabled=${this.readonly}
                            label="Done">
                        Done
                    </uui-button>
                </div>
            </div>
        `;
    }

    private _renderReadTable(table: TableModel) {
        return html`
            <uui-box class="tableBox">
                <uui-scroll-container>
                <uui-table class="uuiReadTable">
                    <uui-table-row>
                        ${table.columns.map(
                                (c, ci) => {
                                    const isEmpty = !c.value?.trim();
                                    const classes = [
                                        table.settings.columnHasHeader ? "colHeader" : "",
                                        table.settings.rowHasHeader && ci === 0 ? "rowHeader" : "",
                                        table.settings.highlightEmptyCells && isEmpty ? "empty" : "",
                                    ].filter(Boolean).join(" ");
                                    const display = c.value || (table.settings.highlightEmptyCells && isEmpty ? "—" : "");
                                    return table.settings.columnHasHeader
                                        ? html`<uui-table-head-cell class=${classes}>${display}</uui-table-head-cell>`
                                        : html`<uui-table-cell class=${classes}>${display}</uui-table-cell>`;
                                }
                        )}
                    </uui-table-row>

                    ${table.rows.map(
                            (r) => html`
                            <uui-table-row>
                                ${r.cells.map((cell, ci) => {
                                const isEmpty = !cell.value?.trim();
                                const isRowHeader = r.settings?.isHeaderRow;
                                const isUnderlined = r.settings?.isUnderlined;
                                const classes = [
                                    table.settings.rowHasHeader && ci === 0 ? "rowHeader" : "",
                                    table.settings.highlightEmptyCells && isEmpty ? "empty" : "",
                                ].filter(Boolean).join(" ");
                                const display = cell.value || (table.settings.highlightEmptyCells && isEmpty ? "—" : "");
                                const content = isUnderlined ? html`<span style="text-decoration:underline">${display}</span>` : display;
                                return isRowHeader
                                    ? html`<uui-table-head-cell class=${classes}>${content}</uui-table-head-cell>`
                                    : html`<uui-table-cell class=${classes}>${content}</uui-table-cell>`;
                            })}
                            </uui-table-row>
                        `
                    )}
                </uui-table>
                </uui-scroll-container>
            </uui-box>
        `;
    }

    private _renderEditTable(table: TableModel) {
        const colCount = table.columns.length;
        const templateCols = `repeat(${Math.max(colCount, 1)}, minmax(140px, 1fr))`;

        return html`
            <uui-box class="tableBox">
            <uui-scroll-container>
            <div class=${["gridEditor", this._dragRowIndex !== null ? "draggingRow" : ""].filter(Boolean).join(" ")} style=${`--te-cols:${templateCols};`}
            data-drag-col="${this._dragOverColIndex ?? ''}">
                ${this._renderColumnHoverCss(table.columns.length)}
                <!-- Header -->
                <div class="headerLayout">
                    <div class="headerColumns"
                        @dragover=${(e: DragEvent) => { if (this._isDraggingCol(e)) e.preventDefault(); }}>
                        ${table.columns.map((c, ci) => html`
                            <div class=${["headerCol", table.settings.columnHasHeader ? "colHeaderActive" : "", this._dragOverColIndex === ci ? "dropTarget" : "", table.settings.rowHasHeader && ci === 0 ? "rowHeader" : "", table.settings.highlightEmptyCells && !c.value?.trim() ? "empty" : ""].filter(Boolean).join(" ")}
                                 style=${`grid-column:${ci + 1};`}
                                 data-col="${ci}"
                                 @dragover=${(e: DragEvent) => this._onColDragOver(e, ci)}
                                 @drop=${(e: DragEvent) => this._onColDrop(e, ci)}>
                                <div class="colRailCell">
                                    <uui-action-bar class="colRailActions">
                                        <uui-button
                                                label="Insert column before"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly}
                                                @click=${(ev: Event) => { ev.stopPropagation(); this._insertCol(ci); }}>
                                            <uui-icon name="icon-arrow-left"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                label="Delete column"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly || table.columns.length <= 1}
                                                @click=${(ev: Event) => { ev.stopPropagation(); this._removeCol(ci); }}>
                                            <uui-icon name="icon-trash"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                label="Insert column after"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly}
                                                @click=${(ev: Event) => { ev.stopPropagation(); this._insertCol(ci + 1); }}>
                                            <uui-icon name="icon-arrow-right"></uui-icon>
                                        </uui-button>
                                    </uui-action-bar>
                                    <span
                                            class="dragHandle colDragHandle"
                                            role="button"
                                            aria-label="Drag to reorder column"
                                            draggable=${this.readonly ? "false" : "true"}
                                            @dragstart=${(e: DragEvent) => this._onColDragStart(e, ci)}
                                            @dragend=${this._onColDragEnd}>
                                        <uui-icon name="icon-navigation"></uui-icon>
                                    </span>
                                </div>

                                <div class="colHead">
                                    <uui-input
                                            .value=${c.value}
                                            @input=${(e: InputEvent) => this._updateColName(ci, (e.target as HTMLInputElement).value)}>
                                    </uui-input>
                                </div>
                            </div>
                        `)}
                    </div>

                    <div class="headerGutter" aria-hidden="true"></div>
                </div>
                
                <div class="insertLine insertTop">
                    <uui-button-inline-create
                            label="Add row"
                            .disabled=${this.readonly}
                            @click=${() => this._insertRow(0)}></uui-button-inline-create>
                </div>
                
                ${table.rows.map(
                        (r, ri) => html`
                            <div class=${["rowLayout", this._dragOverRowIndex === ri ? "dropTarget" : "", r.settings?.isHeaderRow ? "isHeaderRow" : "", r.settings?.isUnderlined ? "isUnderlined" : ""].filter(Boolean).join(" ")}
                                 @dragover=${(e: DragEvent) => this._onRowDragOver(e, ri)}
                                 @drop=${(e: DragEvent) => this._onRowDrop(e, ri)} 
                                 data-row=${ri}>
                                <div class="gridRow">
                                    ${r.cells.map(
                                            (cell, ci) => html`
                                        <div
                                            class=${[
                                                "cell",
                                                table.settings.rowHasHeader && ci === 0 ? "rowHeader" : "",
                                                table.settings.highlightEmptyCells && !cell.value?.trim() ? "empty" : "",
                                                r.settings?.isHeaderRow ? "isHeaderRow" : "",
                                                r.settings?.isUnderlined ? "isUnderlined" : "",
                                            ]
                                                    .filter(Boolean)
                                                    .join(" ")}
                                            style=${`grid-column:${ci + 1};`}
                                            data-col="${ci}">
                                            <uui-input
                                                .value=${cell.value}
                                                @input=${(e: InputEvent) => this._updateCell(ri, ci, (e.target as HTMLInputElement).value)}></uui-input>
                                        </div>
                                    `
                                    )}
                                </div>

                                <div class="rowActionsRail">
                                    <uui-action-bar class="rowActions">
                                        <uui-button popovertarget="rowSettingsMenu${ri}"
                                                look="secondary"
                                                label="Row settings"
                                                compact>
                                            <uui-symbol-more></uui-symbol-more>
                                        </uui-button>
                                        <uui-popover-container id="rowSettingsMenu${ri}" placement="top-left" interaction="click">
                                            <uui-box class="rowMenu" @click=${(ev: Event) => ev.stopPropagation()}>
                                                <div class="rowMenuItem">
                                                    <span>Header row</span>
                                                    <uui-toggle
                                                            ?checked=${!!r.settings?.isHeaderRow}
                                                            ?disabled=${this.readonly}
                                                            @change=${(e: Event) =>
                                                                    this._updateRowSettings(ri, { isHeaderRow: (e.target as any).checked })}>
                                                    </uui-toggle>
                                                </div>
                                                <div class="rowMenuItem">
                                                    <span>Underlined</span>
                                                    <uui-toggle
                                                            ?checked=${!!r.settings?.isUnderlined}
                                                            ?disabled=${this.readonly}
                                                            @change=${(e: Event) =>
                                                                    this._updateRowSettings(ri, { isUnderlined: (e.target as any).checked })}>
                                                    </uui-toggle>
                                                </div>
                                            </uui-box>
                                        </uui-popover-container>
                                        <uui-button
                                                label="Delete row"
                                                look="secondary"
                                                color="danger"
                                                compact
                                                ?disabled=${this.readonly || table.rows.length <= 1}
                                                @click=${(ev: Event) => { ev.stopPropagation(); this._removeRow(ri); }}>
                                            <uui-icon name="icon-trash"></uui-icon>
                                        </uui-button>
                                        <span
                                                class="dragHandle"
                                                role="button"
                                                aria-label="Drag to reorder row"
                                                draggable=${this.readonly ? "false" : "true"}
                                                @dragstart=${(e: DragEvent) => this._onRowDragStart(e, ri)}
                                                @dragend=${this._onRowDragEnd}>
                                            <uui-icon name="icon-navigation"></uui-icon>
                                        </span>
                                    </uui-action-bar>
                                </div>
                            </div>
                            
                            <div class="insertLine" style=${`--afterRow:${ri};`}>
                                <uui-button-inline-create
                                        label="Add row"
                                        .disabled=${this.readonly}
                                        @click=${() => this._insertRow(ri + 1)}></uui-button-inline-create>
                            </div>
                        `
                )}
            </div>
            </uui-scroll-container>
            </uui-box>
        `;
    }

    private _renderColumnHoverCss(colCount: number) {
        const rules: string[] = [];

        for (let i = 0; i < colCount; i++) {
            rules.push(`
      .gridEditor[data-drag-col="${i}"] .cell[data-col="${i}"],
      .gridEditor[data-drag-col="${i}"] .headerCol[data-col="${i}"] {
        border-left: 2px solid var(--uui-color-border-emphasis, var(--uui-color-border));
        border-right: 2px solid var(--uui-color-border-emphasis, var(--uui-color-border));
        border-radius: var(--uui-border-radius);
      }
    `);
        }

        return html`<style>${rules.join("\n")}</style>`;
    }

    static styles = css`
        .toolbar,
        .actions {
            display: flex;
            gap: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .editControls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--uui-size-4);
            margin-bottom: var(--uui-size-4);
        }

        .editActions {
            display: flex;
            gap: var(--uui-size-3);
        }

        uui-input {
            width: 100%;
        }

        .tableBox {
            --uui-box-default-padding: 0;
            overflow: hidden;
        }

        .uuiReadTable uui-table-head-cell,
        .uuiReadTable uui-table-cell {
            min-width: 140px;
        }
        
        .gridEditor {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding-bottom: var(--uui-size-6);
            background: var(--uui-color-surface);
            min-width: max-content;
        }

        .gridHeader {
            display: grid;
            grid-template-columns: var(--te-cols);
            gap: var(--uui-size-6);
            padding: 0;
            border-bottom: none;
            min-width: 0;
        }

        .headerGutter {
            width: 84px;
        }

        .colHead {
            position: relative;
            display: flex;
            gap: var(--uui-size-2);
            align-items: center;
            min-width: 0;
        }
        
        .rowLayout {
            display: grid;
            grid-template-columns: 1fr 84px;
            gap: var(--uui-size-2);
            align-items: center;
            border-bottom: 1px solid var(--uui-color-border);
            transition: background-color 120ms ease-in-out;
        }

        .gridRow {
            display: grid;
            grid-template-columns: var(--te-cols);
            gap: var(--uui-size-6);
            padding: 0;
            border-bottom: none;
        }

        .rowActionsRail {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .rowActionsRail .rowActions {
            opacity: 0;
            pointer-events: none;
            transition: opacity 120ms ease-in-out;
        }

        .rowLayout:hover .rowActionsRail .rowActions,
        .rowLayout:focus-within .rowActionsRail .rowActions {
            opacity: 1;
            pointer-events: auto;
        }

        .cell {
            min-width: 0;
        }

        .colHeader {
            font-weight: 700;
            background: var(--uui-color-surface-alt);
        }

        .rowHeader {
            font-weight: 700;
            background: var(--uui-color-surface-alt);
        }

        .rowLayout.isHeaderRow .cell uui-input {
            font-weight: 700;
            --uui-input-background-color: color-mix(in srgb, var(--uui-color-selected) 8%, transparent);
        }

        .rowLayout.isUnderlined .cell uui-input {
            border-bottom: 2px solid var(--uui-color-text);
        }

        .empty uui-input {
            --uui-input-background-color: color-mix(in srgb, var(--uui-color-warning) 12%, transparent);
            outline: 1px dashed var(--uui-color-warning-emphasis, var(--uui-color-border-emphasis));
            outline-offset: 2px;
        }

        
        .insertLine {
            position: relative;
            height: 0;
        }

        .insertLine uui-button-inline-create {
            position: absolute;
            left: 0;
            right: 0;
            top: 0px;
            opacity: 0;
            pointer-events: auto;
            transition: opacity 120ms ease-in-out;
            z-index: 5;
        }

        .insertLine:hover uui-button-inline-create,
        .insertLine:focus-within uui-button-inline-create {
            opacity: 1;
        }

        .draggingRow .insertLine uui-button-inline-create {
            pointer-events: none;
        }

        .insertLine::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: -10px;
            height: 20px;
        }

        .headerLayout {
            display: grid;
            grid-template-columns: 1fr 84px;
            gap: var(--uui-size-2);
            align-items: start;
            border-bottom: 1px solid var(--uui-color-border);
        }

        .headerColumns {
            display: grid;
            grid-template-columns: var(--te-cols);
            gap: var(--uui-size-6);
        }
        
        .headerCol {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-2);
            padding: var(--uui-size-2) var(--uui-size-6) var(--uui-size-6) var(--uui-size-6);
            min-width: 0;
        }

        .headerCol.colHeaderActive {
            background: var(--uui-color-surface-alt);
        }

        .colRailCell {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
        }
        
        .colRailActions {
            opacity: 0;
            pointer-events: none;
            transition: opacity 120ms ease-in-out;
        }

        .colDragHandle {
            opacity: 0;
            pointer-events: none;
            transition: opacity 120ms ease-in-out;
        }

        .headerCol:hover .colRailActions,
        .headerCol:focus-within .colRailActions,
        .headerCol.rowHeader .colRailActions {
            opacity: 1;
            pointer-events: auto;
        }

        .headerCol:hover .colDragHandle,
        .headerCol:focus-within .colDragHandle,
        .headerCol.rowHeader .colDragHandle {
            opacity: 1;
            pointer-events: auto;
        }

        .headerCol {
            transition: background-color 120ms ease-in-out;
        }
        
        .cell {
            padding: var(--uui-size-6);
            transition: background-color 120ms ease-in-out;
        }
        
        .colHead {
            min-width: 0;
        }

        .dragHandle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: var(--uui-border-radius);
            color: var(--uui-color-border-emphasis);
            cursor: grab;
            flex-shrink: 0;
            transition: background-color 120ms ease-in-out, color 120ms ease-in-out;
            user-select: none;
            -webkit-user-drag: element;
        }

        .dragHandle:hover {
            background: var(--uui-color-surface-alt);
            color: var(--uui-color-text);
        }

        .dragHandle:active {
            cursor: grabbing;
        }

        /* Highlight drop target (row or column) */
        .dropTarget {
            border: 2px solid var(--uui-palette-malibu-light, var(--uui-palette-malibu-light));
            outline-offset: 2px;
            border-radius: var(--uui-border-radius);
        }

        .rowMenu {
            padding: var(--uui-size-4);
            min-width: 200px;
        }

        .rowMenuItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin:8px 0;
            gap: var(--uui-size-6);
        }

        .rowMenuDivider {
            height: 1px;
            background: var(--uui-color-border);
            margin: var(--uui-size-2) 0;
        }
        
        .rowMenuActions {
            margin-top:8px;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
        }
    `;
}

export { WebwondersTableEditorPropertyEditorUiElement as element };
