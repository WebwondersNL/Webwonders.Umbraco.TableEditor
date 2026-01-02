import { html as m, css as c, state as r, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
var h = Object.defineProperty, d = Object.getOwnPropertyDescriptor, a = (e, t, o, i) => {
  for (var s = i > 1 ? void 0 : i ? d(t, o) : t, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (s = (i ? n(t, o, s) : n(s)) || s);
  return i && s && h(t, o, s), s;
};
let u = class extends b {
  constructor() {
    super(...arguments), this._rows = 3, this._columns = 3;
  }
  connectedCallback() {
    super.connectedCallback(), typeof this.data?.rows == "number" && this.data.rows > 0 && (this._rows = this.data.rows), typeof this.data?.columns == "number" && this.data.columns > 0 && (this._columns = this.data.columns);
  }
  _onRowsInput(e) {
    const t = Number(e.target.value);
    this._rows = Number.isFinite(t) ? Math.max(1, Math.min(50, t)) : 1;
  }
  _onColumnsInput(e) {
    const t = Number(e.target.value);
    this._columns = Number.isFinite(t) ? Math.max(1, Math.min(20, t)) : 1;
  }
  _close() {
    this.modalContext?.reject();
  }
  _submit() {
    this.value = { rows: this._rows, columns: this._columns }, this.modalContext?.submit();
  }
  render() {
    const e = this.data?.headline ?? "Create table";
    return m`
            <uui-dialog-layout .headline=${e}>

                    <div class="fields">
                        <uui-label for="inputRows">Rows</uui-label>
                        <uui-input
                            id="inputRows"
                            type="number"
                            label="Rows"
                            min="1"
                            max="50"
                            .value=${String(this._rows)}
                            @input=${this._onRowsInput}>
                        </uui-input>

                        <uui-label for="inputColumns">Columns</uui-label>
                        <uui-input
                            id="inputColumns"
                            type="number"
                            label="Columns"
                            min="1"
                            max="20"
                            .value=${String(this._columns)}
                            @input=${this._onColumnsInput}>
                        </uui-input>
                    </div>

                <div slot="actions">
                    <uui-button look="secondary" @click=${this._close} label="Cancel"></uui-button>
                    <uui-button look="primary" @click=${this._submit} label="Create"></uui-button>
                </div>
            </uui-dialog-layout>
        `;
  }
};
u.styles = c`
        .fields {
            display: grid;
            gap: var(--uui-size-4);
        }
    `;
a([
  r()
], u.prototype, "_rows", 2);
a([
  r()
], u.prototype, "_columns", 2);
u = a([
  p("webwonders-table-create-modal")
], u);
export {
  u as WebwondersTableCreateModalElement,
  u as element
};
//# sourceMappingURL=table-create-modal.element-CrZU_DSn.js.map
