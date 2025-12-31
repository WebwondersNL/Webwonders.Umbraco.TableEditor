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

    private _toggleColumnHasHeader() {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        t.settings.columnHasHeader = !t.settings.columnHasHeader;
        this._commit(t);
    }

    private _toggleRowHasHeader() {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        t.settings.rowHasHeader = !t.settings.rowHasHeader;
        this._commit(t);
    }

    private _toggleHighlightEmptyCells() {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        t.settings.highlightEmptyCells = !t.settings.highlightEmptyCells;
        this._commit(t);
    }

    private _addCol() {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        t.columns.push({ value: "" });
        for (const row of t.rows) row.cells.push({ value: "" });
        this._commit(t);
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

    private _removeCol(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if (index < 0 || index >= t.columns.length) return;

        t.columns.splice(index, 1);
        for (const row of t.rows) row.cells.splice(index, 1);
        if (t.columns.length === 0) t.rows = [];

        this._commit(t);
    }

    private _removeRow(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if (index < 0 || index >= t.rows.length) return;
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
        return html`
            <div class="toolbar">
                <uui-button
                        look="primary"
                        @click=${this._toggleEdit}
                        .disabled=${this.readonly}
                        label=${this._isEdit ? "Done" : "Edit"}></uui-button>

                ${this._isEdit
                        ? html`
                            <uui-button
                                    look="secondary"
                                    @click=${this._cancel}
                                    .disabled=${this.readonly}
                                    label="Cancel"></uui-button>
                        `
                        : null}
            </div>
        `;
    }

    private _renderEditControls(table: TableModel) {
        return html`
            <div class="toggles">
                <uui-toggle ?checked=${table.settings.columnHasHeader} @change=${this._toggleColumnHasHeader}>
                    First row is header
                </uui-toggle>

                <uui-toggle ?checked=${table.settings.rowHasHeader} @change=${this._toggleRowHasHeader}>
                    First column is header
                </uui-toggle>

                <uui-toggle ?checked=${table.settings.highlightEmptyCells} @change=${this._toggleHighlightEmptyCells}>
                    Highlight empty cells
                </uui-toggle>
            </div>

            <div class="actions">
                <uui-button
                        look="secondary"
                        @click=${this._addCol}
                        .disabled=${this.readonly}
                        label="Add column"></uui-button>
            </div>
        `;
    }

    private _renderReadTable(table: TableModel) {
        return html`
            <uui-table class="uuiReadTable">
                <uui-table-row>
                    ${table.columns.map(
                            (c) => html`
                                <uui-table-head-cell class=${table.settings.columnHasHeader ? "colHeader" : ""}>
                                    ${c.value}
                                </uui-table-head-cell>
                            `
                    )}
                </uui-table-row>

                ${table.rows.map(
                        (r) => html`
                            <uui-table-row
                                    class=${[r.settings?.isHeaderRow ? "isHeaderRow" : "", r.settings?.isUnderlined ? "isUnderlined" : ""]
                                            .filter(Boolean)
                                            .join(" ")}>
                                ${r.cells.map((cell, ci) => {
                                    const isEmpty = !cell.value?.trim();
                                    return html`
                                        <uui-table-cell
                                                class=${[
                                                    table.settings.rowHasHeader && ci === 0 ? "rowHeader" : "",
                                                    table.settings.highlightEmptyCells && isEmpty ? "empty" : "",
                                                ]
                                                        .filter(Boolean)
                                                        .join(" ")}>
                                            ${cell.value}
                                        </uui-table-cell>
                                    `;
                                })}
                            </uui-table-row>
                        `
                )}
            </uui-table>
        `;
    }

    private _renderEditTable(table: TableModel) {
        const colCount = table.columns.length;
        const templateCols = `repeat(${Math.max(colCount, 1)}, minmax(140px, 1fr))`;

        return html`
            <div class="gridEditor" style=${`--te-cols:${templateCols};`}>
                <!-- Header -->
                <div class="headerLayout">
                    <div class="gridHeader">
                        ${table.columns.map((c, ci) => html`
                            <div class="colHead" data-col="${ci}" style=${`grid-column:${ci + 1};`}>
                                <uui-input
                                        .value=${c.value}
                                        @input=${(e: InputEvent) => this._updateColName(ci, (e.target as HTMLInputElement).value)}></uui-input>

                                <uui-action-bar class="colActions">
                                    <uui-button
                                            label="Delete column"
                                            look="primary"
                                            @click=${(ev: Event) => { ev.stopPropagation(); this._removeCol(ci); }}>
                                        <uui-icon name="icon-trash"></uui-icon>
                                    </uui-button>
                                </uui-action-bar>
                            </div>
                        `)}
                    </div>

                    <!-- header gutter (empty, just for alignment) -->
                    <div class="headerGutter" aria-hidden="true"></div>
                </div>

                <!-- Insert at top -->
                <div class="insertLine insertTop">
                    <uui-button-inline-create
                            label="Add row"
                            .disabled=${this.readonly}
                            @click=${() => this._insertRow(0)}></uui-button-inline-create>
                </div>

                <!-- Rows (with right-hand action gutter) -->
                ${table.rows.map(
                        (r, ri) => html`
                            <div class="rowLayout" data-row=${ri}>
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
                                        <uui-button
                                                label="Delete row"
                                                look="primary"
                                                @click=${(ev: Event) => {
                                                    ev.stopPropagation();
                                                    this._removeRow(ri);
                                                }}>
                                            <uui-icon name="icon-trash"></uui-icon>
                                        </uui-button>
                                    </uui-action-bar>
                                </div>
                            </div>

                            <!-- Insert between rows (after ri) -->
                            <div class="insertLine" style=${`--afterRow:${ri};`}>
                                <uui-button-inline-create
                                        label="Add row"
                                        .disabled=${this.readonly}
                                        @click=${() => this._insertRow(ri + 1)}></uui-button-inline-create>
                            </div>
                        `
                )}
            </div>
        `;
    }

    static styles = css`
        .toolbar,
        .actions {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }

        .toggles {
            display: flex;
            gap: 20px;
            margin: 10px 0;
            align-items: center;
            flex-wrap: wrap;
        }

        uui-input {
            width: 100%;
        }

        /* Edit surface */
        .gridEditor {
            display: flex;
            flex-direction: column;
            gap: 0;
            overflow: hidden;
            background: var(--uui-color-surface);
        }

        .headerLayout {
            display: grid;
            grid-template-columns: 1fr 56px;
            gap: var(--uui-size-2);
            align-items: center;

            padding: var(--uui-size-6);
            border-bottom: 1px solid var(--uui-color-border);
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
            width: 56px;
        }

        .colHead {
            position: relative;
            display: flex;
            gap: var(--uui-size-2);
            align-items: center;
            min-width: 0;
        }

        .colActions {
            position: absolute;
            right: var(--uui-size-2);
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            opacity: 0;
            pointer-events: none;
            transition: opacity 120ms ease-in-out;
        }

        .colHead:hover .colActions,
        .colHead:focus-within .colActions {
            opacity: 1;
            pointer-events: auto;
        }

        /* ---- Row layout with right gutter ---- */
        .rowLayout {
            display: grid;
            grid-template-columns: 1fr 56px; /* gutter width */
            gap: var(--uui-size-2);
            align-items: center;

            padding: var(--uui-size-6);
            border-bottom: 1px solid var(--uui-color-border);

            transition: background-color 120ms ease-in-out;
        }

        .rowLayout:hover,
        .rowLayout:focus-within {
            background-color: var(--uui-color-surface-alt);
            border-radius: var(--uui-border-radius);
        }

        .gridRow {
            display: grid;
            grid-template-columns: var(--te-cols);
            gap: var(--uui-size-6);
            padding: 0; /* padding handled by rowLayout */
            border-bottom: none; /* border handled by rowLayout */
            min-width: 0;
        }

        .rowActionsRail {
            display: flex;
            justify-content: flex-end;
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

        .rowHeader {
            font-weight: 700;
            background: var(--uui-color-surface-alt);
            border-radius: 2px;
            padding: 2px;
        }

        .isHeaderRow {
            font-weight: 700;
        }

        .isUnderlined {
            text-decoration: underline;
        }

        .empty uui-input {
            outline: 1px dashed var(--uui-color-border);
            outline-offset: 2px;
        }

        /* Insert lines (between rows) */
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

        .insertLine::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: -10px;
            height: 20px;
        }
    `;
}

export { WebwondersTableEditorPropertyEditorUiElement as element };
