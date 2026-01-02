import { LitElement as f, html as s, css as b, property as m, state as h, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UmbModalToken as v, umbOpenModal as p } from "@umbraco-cms/backoffice/modal";
const C = new v(
  "Webwonders.TableEditor.TableSettingsModal",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), $ = new v(
  "Webwonders.TableEditor.CreateTableModal",
  {
    modal: {
      type: "dialog"
    }
  }
);
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? E(t, i) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (o = (a ? u(t, i, o) : u(o)) || o);
  return a && o && x(t, i, o), o;
};
function l() {
  return {
    settings: { columnHasHeader: !1, rowHasHeader: !1, highlightEmptyCells: !1 },
    columns: [],
    rows: []
  };
}
function n(e) {
  return e && JSON.parse(JSON.stringify(e));
}
let d = class extends y(f) {
  constructor() {
    super(...arguments), this._isEdit = !1, this._hoverColIndex = null, this._dragRowIndex = null, this._dragOverRowIndex = null, this._dragColIndex = null, this._dragOverColIndex = null;
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.value ?? l();
    e.settings || (e.settings = { columnHasHeader: !1, rowHasHeader: !1, highlightEmptyCells: !1 }), e.settings.highlightEmptyCells === void 0 && (e.settings.highlightEmptyCells = !1), this.value = e, this._original = n(e);
  }
  _commit(e) {
    this.value = e, this.dispatchEvent(new g());
  }
  _toggleEdit() {
    this.readonly || (this._isEdit = !this._isEdit, this._isEdit && (this._original = n(this.value ?? l())));
  }
  _cancel() {
    this.readonly || (this._isEdit = !1, this._original && this._commit(n(this._original)));
  }
  async _openTableSettings() {
    if (this.readonly) return;
    const e = this.value ?? l(), t = await p(this, C, {
      data: {
        headline: "Table settings",
        settings: {
          columnHasHeader: !!e.settings.columnHasHeader,
          rowHasHeader: !!e.settings.rowHasHeader,
          highlightEmptyCells: !!e.settings.highlightEmptyCells
        }
      }
    }).catch(() => {
    });
    if (!t?.settings) return;
    const i = n(e);
    i.settings = {
      ...i.settings,
      ...t.settings
    }, this._commit(i);
  }
  async _openCreateTableModal() {
    if (this.readonly) return;
    const e = await p(this, $, {
      data: {
        headline: "Create table",
        rows: 3,
        columns: 3
      }
    }).catch(() => {
    });
    e && this._createTable(e.rows, e.columns);
  }
  _createTable(e, t) {
    const i = Array.from({ length: t }, () => ({ value: "" })), a = Array.from({ length: e }, () => ({
      settings: {},
      cells: Array.from({ length: t }, () => ({ value: "" }))
    })), o = {
      ...this.value ?? { settings: { columnHasHeader: !1, rowHasHeader: !1, highlightEmptyCells: !1 }, columns: [], rows: [] },
      settings: {
        columnHasHeader: !1,
        rowHasHeader: !1,
        highlightEmptyCells: !1
      },
      columns: i,
      rows: a
    };
    this.value = o, this._isEdit = !0, this.dispatchEvent(new g());
  }
  _insertRow(e) {
    if (this.readonly) return;
    const t = n(this.value ?? l()), i = {
      settings: { isHeaderRow: !1, isUnderlined: !1 },
      cells: t.columns.map(() => ({ value: "" }))
    }, a = Math.max(0, Math.min(e, t.rows.length));
    t.rows.splice(a, 0, i), this._commit(t);
  }
  _insertCol(e) {
    if (this.readonly) return;
    const t = n(this.value ?? l()), i = Math.max(0, Math.min(e, t.columns.length));
    t.columns.splice(i, 0, { value: "" });
    for (const a of t.rows)
      a.cells.splice(i, 0, { value: "" });
    this._commit(t);
  }
  _removeCol(e) {
    if (this.readonly) return;
    const t = n(this.value ?? l());
    if (!(t.columns.length <= 1) && !(e < 0 || e >= t.columns.length)) {
      t.columns.splice(e, 1);
      for (const i of t.rows) i.cells.splice(e, 1);
      this._commit(t);
    }
  }
  _removeRow(e) {
    if (this.readonly) return;
    const t = n(this.value ?? l());
    t.rows.length <= 1 || e < 0 || e >= t.rows.length || (t.rows.splice(e, 1), this._commit(t));
  }
  _updateColName(e, t) {
    const i = n(this.value ?? l());
    i.columns[e] && (i.columns[e].value = t, this._commit(i));
  }
  _updateCell(e, t, i) {
    const a = n(this.value ?? l()), o = a.rows[e];
    o?.cells[t] && (o.cells[t].value = i, this._commit(a));
  }
  _isTableEmpty(e) {
    return e ? e.columns.length === 0 && e.rows.length === 0 : !0;
  }
  _moveRow(e, t) {
    if (e === t) return;
    const i = n(this.value ?? l());
    if (e < 0 || e >= i.rows.length) return;
    const a = Math.max(0, Math.min(t, i.rows.length - 1)), [o] = i.rows.splice(e, 1);
    i.rows.splice(a, 0, o), this._commit(i);
  }
  _moveCol(e, t) {
    if (e === t) return;
    const i = n(this.value ?? l());
    if (e < 0 || e >= i.columns.length) return;
    const a = Math.max(0, Math.min(t, i.columns.length - 1)), [o] = i.columns.splice(e, 1);
    i.columns.splice(a, 0, o);
    for (const r of i.rows) {
      const [u] = r.cells.splice(e, 1);
      r.cells.splice(a, 0, u);
    }
    this._commit(i);
  }
  _onRowDragStart(e, t) {
    this.readonly || (this._dragRowIndex = t, this._dragOverRowIndex = t, e.dataTransfer?.setData("text/plain", String(t)), e.dataTransfer?.setData("application/x-webwonders-row", "1"), e.dataTransfer?.setDragImage?.(e.target, 10, 10), e.dataTransfer && (e.dataTransfer.effectAllowed = "move"));
  }
  _onRowDragOver(e, t) {
    this._isDraggingRow(e) && (e.preventDefault(), this._dragOverRowIndex = t, e.dataTransfer && (e.dataTransfer.dropEffect = "move"));
  }
  _onRowDrop(e, t) {
    if (!this._isDraggingRow(e)) return;
    e.preventDefault();
    const i = this._dragRowIndex;
    this._clearRowDrag(), i !== null && this._moveRow(i, t);
  }
  _onRowDragEnd() {
    this._clearRowDrag();
  }
  _clearRowDrag() {
    this._dragRowIndex = null, this._dragOverRowIndex = null;
  }
  _isDraggingRow(e) {
    return this._dragRowIndex !== null && e.dataTransfer?.types?.includes("application/x-webwonders-row");
  }
  // --- columns ---
  _onColDragStart(e, t) {
    this.readonly || (this._dragColIndex = t, this._dragOverColIndex = t, e.dataTransfer?.setData("text/plain", String(t)), e.dataTransfer?.setData("application/x-webwonders-col", "1"), e.dataTransfer?.setDragImage?.(e.target, 10, 10), e.dataTransfer && (e.dataTransfer.effectAllowed = "move"));
  }
  _onColDragOver(e, t) {
    this._isDraggingCol(e) && (e.preventDefault(), this._dragOverColIndex = t, e.dataTransfer && (e.dataTransfer.dropEffect = "move"));
  }
  _onColDrop(e, t) {
    if (!this._isDraggingCol(e)) return;
    e.preventDefault();
    const i = this._dragColIndex;
    this._clearColDrag(), i !== null && this._moveCol(i, t);
  }
  _onColDragEnd() {
    this._clearColDrag();
  }
  _clearColDrag() {
    this._dragColIndex = null, this._dragOverColIndex = null;
  }
  _isDraggingCol(e) {
    return this._dragColIndex !== null && e.dataTransfer?.types?.includes("application/x-webwonders-col");
  }
  render() {
    const e = this.value ?? l();
    return s`
            ${this._isEdit ? s`
                    ${this._renderEditControls(e)}
                    ${this._renderEditTable(e)}
                ` : s`${this._renderReadTable(e)}`}

            ${this._renderToolbar()}
        `;
  }
  _renderToolbar() {
    const e = this.value, t = this._isTableEmpty(e);
    return s`
            <div class="toolbar">
                ${!this._isEdit && t ? s`
                    <uui-button
                        look="primary"
                        label="Create table"
                        ?disabled=${this.readonly}
                        @click=${this._openCreateTableModal}>
                        Create
                    </uui-button>
                ` : s`
                    <uui-button
                        look="primary"
                        label=${this._isEdit ? "Done" : "Edit"}
                        ?disabled=${this.readonly}
                        @click=${this._toggleEdit}>
                        ${this._isEdit ? "Done" : "Edit"}
                    </uui-button>
                `}

                ${this._isEdit ? s`
                        <uui-button
                                look="secondary"
                                @click=${this._cancel}
                                .disabled=${this.readonly}
                                label="Cancel"></uui-button>
                    ` : null}
            </div>
        `;
  }
  _renderEditControls(e) {
    return s`
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
  _renderReadTable(e) {
    return s`
            <uui-table class="uuiReadTable">
                <uui-table-row>
                    ${e.columns.map(
      (t) => s`
                            <uui-table-head-cell class=${e.settings.columnHasHeader ? "colHeader" : ""}>
                                ${t.value}
                            </uui-table-head-cell>
                        `
    )}
                </uui-table-row>

                ${e.rows.map(
      (t) => s`
                        <uui-table-row
                                class=${[t.settings?.isHeaderRow ? "isHeaderRow" : "", t.settings?.isUnderlined ? "isUnderlined" : ""].filter(Boolean).join(" ")}>
                            ${t.cells.map((i, a) => {
        const o = !i.value?.trim();
        return s`
                                    <uui-table-cell
                                            class=${[
          e.settings.rowHasHeader && a === 0 ? "rowHeader" : "",
          e.settings.highlightEmptyCells && o ? "empty" : ""
        ].filter(Boolean).join(" ")}>
                                        ${i.value}
                                    </uui-table-cell>
                                `;
      })}
                        </uui-table-row>
                    `
    )}
            </uui-table>
        `;
  }
  _renderEditTable(e) {
    const t = e.columns.length, i = `repeat(${Math.max(t, 1)}, minmax(140px, 1fr))`;
    return s`
            <div class="gridEditor" style=${`--te-cols:${i};`}
            data-hover-col="${this._hoverColIndex ?? ""}"
            data-drag-col="${this._dragOverColIndex ?? ""}">
                ${this._renderColumnHoverCss(e.columns.length)}
                <!-- Header -->
                <div class="headerLayout">
                    <div class="headerColumns">
                        ${e.columns.map((a, o) => s`
                            <div class=${["headerCol", this._dragOverColIndex === o ? "dropTarget" : ""].filter(Boolean).join(" ")} 
                                 style=${`grid-column:${o + 1};`} 
                                 data-col="${o}"
                                 @dragover=${(r) => this._onColDragOver(r, o)}
                                 @drop=${(r) => this._onColDrop(r, o)}
                                 @mouseenter=${() => this._hoverColIndex = o}
                                 @mouseleave=${() => this._hoverColIndex = null}>
                                <div class="colRailCell">
                                    <uui-action-bar class="colRailActions">
                                        <uui-button
                                                label="Insert column before"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly}
                                                @click=${(r) => {
      r.stopPropagation(), this._insertCol(o);
    }}>
                                            <uui-icon name="icon-arrow-left"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                label="Delete column"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly || e.columns.length <= 1}
                                                @click=${(r) => {
      r.stopPropagation(), this._removeCol(o);
    }}>
                                            <uui-icon name="icon-trash"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                label="Insert column after"
                                                look="primary"
                                                compact
                                                ?disabled=${this.readonly}
                                                @click=${(r) => {
      r.stopPropagation(), this._insertCol(o + 1);
    }}>
                                            <uui-icon name="icon-arrow-right"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                class="dragHandle"
                                                label="Drag to reorder column"
                                                look="secondary"
                                                compact
                                                ?disabled=${this.readonly}
                                                draggable="true"
                                                @dragstart=${(r) => this._onColDragStart(r, o)}
                                                @dragend=${this._onColDragEnd}>
                                            <uui-icon name="icon-navigation"></uui-icon>
                                        </uui-button>
                                    </uui-action-bar>
                                </div>

                                <div class="colHead">
                                    <uui-input
                                            .value=${a.value}
                                            @input=${(r) => this._updateColName(o, r.target.value)}>
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
                
                ${e.rows.map(
      (a, o) => s`
                            <div class=${["rowLayout", this._dragOverRowIndex === o ? "dropTarget" : ""].filter(Boolean).join(" ")}
                                 @dragover=${(r) => this._onRowDragOver(r, o)}
                                 @drop=${(r) => this._onRowDrop(r, o)} 
                                 data-row=${o}>
                                <div class="gridRow">
                                    ${a.cells.map(
        (r, u) => s`
                                        <div
                                            class=${[
          "cell",
          e.settings.rowHasHeader && u === 0 ? "rowHeader" : "",
          e.settings.highlightEmptyCells && !r.value?.trim() ? "empty" : "",
          a.settings?.isHeaderRow ? "isHeaderRow" : "",
          a.settings?.isUnderlined ? "isUnderlined" : ""
        ].filter(Boolean).join(" ")}
                                            style=${`grid-column:${u + 1};`}
                                            data-col="${u}">
                                            <uui-input
                                                .value=${r.value}
                                                @input=${(w) => this._updateCell(o, u, w.target.value)}></uui-input>
                                        </div>
                                    `
      )}
                                </div>

                                <div class="rowActionsRail">
                                    <uui-action-bar class="rowActions">
                                        <uui-button
                                                label="Delete row"
                                                look="primary"
                                                ?disabled=${this.readonly || e.rows.length <= 1}
                                                @click=${(r) => {
        r.stopPropagation(), this._removeRow(o);
      }}>
                                            <uui-icon name="icon-trash"></uui-icon>
                                        </uui-button>
                                        <uui-button
                                                class="dragHandle"
                                                label="Drag to reorder row"
                                                look="secondary"
                                                compact
                                                ?disabled=${this.readonly}
                                                draggable="true"
                                                @dragstart=${(r) => this._onRowDragStart(r, o)}
                                                @dragend=${this._onRowDragEnd}>
                                            <uui-icon name="icon-navigation"></uui-icon>
                                        </uui-button>
                                    </uui-action-bar>
                                </div>
                            </div>
                            
                            <div class="insertLine" style=${`--afterRow:${o};`}>
                                <uui-button-inline-create
                                        label="Add row"
                                        .disabled=${this.readonly}
                                        @click=${() => this._insertRow(o + 1)}></uui-button-inline-create>
                            </div>
                        `
    )}
            </div>
        `;
  }
  _renderColumnHoverCss(e) {
    const t = [];
    for (let i = 0; i < e; i++)
      t.push(`
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
    return s`<style>${t.join(`
`)}</style>`;
  }
};
d.styles = b`
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
            width: 56px;
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
            grid-template-columns: 1fr 56px;
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
            grid-template-columns: 1fr 56px;
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
    `;
c([
  m({ attribute: !1 })
], d.prototype, "value", 2);
c([
  m({ type: Boolean })
], d.prototype, "readonly", 2);
c([
  h()
], d.prototype, "_isEdit", 2);
c([
  h()
], d.prototype, "_original", 2);
c([
  h()
], d.prototype, "_hoverColIndex", 2);
c([
  h()
], d.prototype, "_dragRowIndex", 2);
c([
  h()
], d.prototype, "_dragOverRowIndex", 2);
c([
  h()
], d.prototype, "_dragColIndex", 2);
c([
  h()
], d.prototype, "_dragOverColIndex", 2);
d = c([
  _("webwonders-table-editor-property-editor-ui")
], d);
export {
  d as WebwondersTableEditorPropertyEditorUiElement,
  d as element
};
//# sourceMappingURL=table-editor.element-DrVYQ3Hp.js.map
