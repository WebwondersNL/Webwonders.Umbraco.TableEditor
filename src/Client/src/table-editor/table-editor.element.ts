import {
    css,
    html,
    LitElement,
    customElement,
    property,
    state
} from "@umbraco-cms/backoffice/external/lit";
import {UmbElementMixin} from "@umbraco-cms/backoffice/element-api";
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

        // init value if empty (and patch legacy missing settings)
        const v = this.value ?? createEmptyTable();
        if (!v.settings) v.settings = { columnHasHeader: false, rowHasHeader: false, highlightEmptyCells: false };
        if (v.settings.highlightEmptyCells === undefined) v.settings.highlightEmptyCells = false;

        this.value = v;
        this._original = deepCopy(v);
    }

    private _commit(next: TableModel) {
        this.value = next;
        this.dispatchEvent(new UmbChangeEvent()); // tells Umbraco “model changed”
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

    private _addRow() {
        if (this.readonly) return;
        const t = deepCopy(this.value ?? createEmptyTable());
        const row: TableRow = {
            cells: t.columns.map(() => ({ value: "" })),
            settings: { isHeaderRow: false, isUnderlined: false },
        };
        t.rows.push(row);
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
      <div class="toolbar">
        <uui-button
          look="primary"
          @click=${this._toggleEdit}
          .disabled=${this.readonly}
          label=${this._isEdit ? "Done" : "Edit"}></uui-button>

        ${this._isEdit
            ? html`<uui-button look="secondary" @click=${this._cancel} .disabled=${this.readonly} label="Cancel"></uui-button>`
            : null}
      </div>

      ${this._isEdit
            ? html`
            <div class="toggles">
              <uui-toggle ?checked=${table.settings.columnHasHeader} @change=${this._toggleColumnHasHeader}
                >First row is header</uui-toggle
              >
              <uui-toggle ?checked=${table.settings.rowHasHeader} @change=${this._toggleRowHasHeader}
                >First column is header</uui-toggle
              >
              <uui-toggle ?checked=${table.settings.highlightEmptyCells} @change=${this._toggleHighlightEmptyCells}
                >Highlight empty cells</uui-toggle
              >
            </div>

            <div class="actions">
              <uui-button look="secondary" @click=${this._addCol} .disabled=${this.readonly} label="Add column"></uui-button>
              <uui-button look="secondary" @click=${this._addRow} .disabled=${this.readonly} label="Add row"></uui-button>
            </div>
          `
            : null}

      <table class="grid">
        <thead>
          <tr>
            ${this._isEdit ? html`<th></th>` : null}
            ${table.columns.map(
            (c, i) => html`
                <th>
                  ${this._isEdit
                ? html`<uui-input .value=${c.value} @input=${(e: InputEvent) =>
                    this._updateColName(i, (e.target as HTMLInputElement).value)}></uui-input>
                      <uui-button
                        look="danger"
                        compact
                        @click=${() => this._removeCol(i)}
                        .disabled=${this.readonly}
                        label="×"></uui-button>`
                : html`${c.value}`}
                </th>
              `
        )}
          </tr>
        </thead>

        <tbody>
          ${table.rows.map(
            (r, ri) => html`
              <tr>
                ${this._isEdit
                ? html`<td>
                      <uui-button look="danger" compact @click=${() => this._removeRow(ri)} .disabled=${this.readonly}
                        label="×"></uui-button>
                    </td>`
                : null}

                ${r.cells.map(
                (cell, ci) => html`
                    <td>
                      ${this._isEdit
                    ? html`<uui-input
                            .value=${cell.value}
                            @input=${(e: InputEvent) =>
                        this._updateCell(ri, ci, (e.target as HTMLInputElement).value)}></uui-input>`
                    : html`${cell.value}`}
                    </td>
                  `
            )}
              </tr>
            `
        )}
        </tbody>
      </table>
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
    table.grid {
      width: 100%;
      border-collapse: collapse;
    }
    table.grid th,
    table.grid td {
      border: 1px solid var(--uui-color-border);
      padding: 6px;
      vertical-align: top;
    }
    uui-input {
      width: 100%;
    }
  `;
}

export {WebwondersTableEditorPropertyEditorUiElement as element};