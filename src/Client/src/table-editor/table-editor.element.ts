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
import { umbOpenModal } from "@umbraco-cms/backoffice/modal";
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

    @state()
    private _hoverColIndex: number | null = null;

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

        this._createTable(result.rows, result.columns);
    }

    private _createTable(rowCount: number, colCount: number) {
        const cols = Array.from({ length: colCount }, () => ({ value: "" }));
        const rows = Array.from({ length: rowCount }, () => ({
            settings: {},
            cells: Array.from({ length: colCount }, () => ({ value: "" })),
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

    private _removeCol(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if (t.columns.length <= 1) return;
        if (index < 0 || index >= t.columns.length) return;

        t.columns.splice(index, 1);
        for (const row of t.rows) row.cells.splice(index, 1);
        this._commit(t);
    }

    private _removeRow(index: number) {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        if(t.rows.length <= 1) return;
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
    }

    private _clearRowDrag() {
        this._dragRowIndex = null;
        this._dragOverRowIndex = null;
    }

    private _isDraggingRow(e: DragEvent) {
        return this._dragRowIndex !== null && e.dataTransfer?.types?.includes("application/x-webwonders-row");
    }

    private _closePopoverFromEvent(e: Event) {
        const el = e.currentTarget as HTMLElement | null;
        const popover = el?.closest("uui-popover-container") as any;
        if (!popover) return;

        // UUI / Popover API variants:
        if (typeof popover.hidePopover === "function") popover.hidePopover();
        else if (typeof popover.close === "function") popover.close();
        else if ("open" in popover) popover.open = false;
    }

// --- columns ---
    private _onColDragStart(e: DragEvent, colIndex: number) {
        if (this.readonly) return;
        this._dragColIndex = colIndex;
        this._dragOverColIndex = colIndex;

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

        return html`
            <div class="toolbar">
                ${!this._isEdit && isEmpty
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
                        label=${this._isEdit ? "Done" : "Edit"}
                        ?disabled=${this.readonly}
                        @click=${this._toggleEdit}>
                        ${this._isEdit ? "Done" : "Edit"}
                    </uui-button>
                `
                }

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

    private _renderEditControls(_table: TableModel) {
        return html`
            <div class="editControls">
                <div class="settings">
                    <uui-button
                            look="secondary"
                            compact
                            @click=${this._openTableSettings}
                            .disabled=${this.readonly}
                            label="Table settings">
                        <uui-icon name="icon-settings"></uui-icon>
                    </uui-button>
                </div>
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
            <div class="gridEditor" style=${`--te-cols:${templateCols};`}
            data-hover-col="${this._hoverColIndex ?? ''}"
            data-drag-col="${this._dragOverColIndex ?? ''}">
                ${this._renderColumnHoverCss(table.columns.length)}
                <!-- Header -->
                <div class="headerLayout">
                    <div class="headerColumns">
                        ${table.columns.map((c, ci) => html`
                            <div class=${["headerCol", this._dragOverColIndex === ci ? "dropTarget" : ""].filter(Boolean).join(" ")} 
                                 style=${`grid-column:${ci + 1};`} 
                                 data-col="${ci}"
                                 @dragover=${(e: DragEvent) => this._onColDragOver(e, ci)}
                                 @drop=${(e: DragEvent) => this._onColDrop(e, ci)}
                                 @mouseenter=${() => (this._hoverColIndex = ci)}
                                 @mouseleave=${() => (this._hoverColIndex = null)}>
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
                                        <uui-button
                                                class="dragHandle"
                                                label="Drag to reorder column"
                                                look="secondary"
                                                compact
                                                ?disabled=${this.readonly}
                                                draggable="true"
                                                @dragstart=${(e: DragEvent) => this._onColDragStart(e, ci)}
                                                @dragend=${this._onColDragEnd}>
                                            <uui-icon name="icon-navigation"></uui-icon>
                                        </uui-button>
                                    </uui-action-bar>
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
                            <div class=${["rowLayout", this._dragOverRowIndex === ri ? "dropTarget" : ""].filter(Boolean).join(" ")}
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

                                                <div class="rowMenuDivider"></div>
                                                <div class="rowMenuActions">
                                                    <uui-button
                                                            label="Delete row"
                                                            look="primary"
                                                            color="danger"
                                                            ?disabled=${this.readonly || table.rows.length <= 1}
                                                            popovertargetaction="hide"
                                                            @click=${(ev: Event) => { ev.stopPropagation();this._closePopoverFromEvent(ev); this._removeRow(ri);}}>
                                                        <uui-icon name="icon-trash"></uui-icon>
                                                    </uui-button>
                                                    <uui-button
                                                            look="primary"
                                                            @click=${(ev: Event) => {
                                                                ev.stopPropagation();
                                                                this._closePopoverFromEvent(ev);
                                                            }}>
                                                        Done
                                                    </uui-button>
                                                </div>
                                            </uui-box>
                                        </uui-popover-container>
                                        <uui-button
                                                class="dragHandle"
                                                label="Drag to reorder row"
                                                look="secondary"
                                                compact
                                                ?disabled=${this.readonly}
                                                draggable="true"
                                                @dragstart=${(e: DragEvent) => this._onRowDragStart(e, ri)}
                                                @dragend=${this._onRowDragEnd}>
                                            <uui-icon name="icon-navigation"></uui-icon>
                                        </uui-button>
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
        `;
    }

    private _renderColumnHoverCss(colCount: number) {
        const rules: string[] = [];

        for (let i = 0; i < colCount; i++) {
            rules.push(`
      .gridEditor[data-hover-col="${i}"] .cell[data-col="${i}"],
      .gridEditor[data-hover-col="${i}"] .headerCol[data-col="${i}"] {
        background-color: var(--uui-color-surface-alt);
        border-radius: var(--uui-border-radius);
      }

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
            margin-bottom: 10px;
        }

        .editControls {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
            margin: 10px 0;
        }

        uui-input {
            width: 100%;
        }
        
        .gridEditor {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding-bottom: var(--uui-size-6);
            overflow: hidden;
            background: var(--uui-color-surface);
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

        .rowLayout:hover,
        .rowLayout:focus-within {
            background-color: var(--uui-color-surface-alt);
            border-radius: var(--uui-border-radius);
        }

        .gridRow {
            display: grid;
            grid-template-columns: var(--te-cols);
            gap: var(--uui-size-6);
            padding: 0;
            border-bottom: none;
            min-width: 0;
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
            min-width: 0;
        }
        
        .headerCol {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-2);
            padding: var(--uui-size-2) var(--uui-size-6) var(--uui-size-6) var(--uui-size-6);
            min-width: 0;
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
        
        .headerCol:hover .colRailActions,
        .headerCol:focus-within .colRailActions {
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
            cursor: grab;
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
