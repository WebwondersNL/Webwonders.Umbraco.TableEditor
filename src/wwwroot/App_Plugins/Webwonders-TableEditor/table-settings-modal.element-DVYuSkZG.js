import { html as u, css as r, state as h, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as d } from "@umbraco-cms/backoffice/modal";
var m = Object.defineProperty, b = Object.getOwnPropertyDescriptor, n = (e, s, o, i) => {
  for (var t = i > 1 ? void 0 : i ? b(s, o) : s, a = e.length - 1, g; a >= 0; a--)
    (g = e[a]) && (t = (i ? g(s, o, t) : g(t)) || t);
  return i && t && m(s, o, t), t;
};
let l = class extends d {
  constructor() {
    super(...arguments), this._settings = {
      columnHasHeader: !1,
      rowHasHeader: !1,
      highlightEmptyCells: !1
    };
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.data?.settings;
    e && (this._settings = {
      columnHasHeader: !!e.columnHasHeader,
      rowHasHeader: !!e.rowHasHeader,
      highlightEmptyCells: !!e.highlightEmptyCells
    });
  }
  _submit() {
    this.value = {
      settings: this._settings
    }, this.modalContext?.submit();
  }
  _close() {
    this.modalContext?.reject();
  }
  _toggle(e) {
    this._settings = { ...this._settings, [e]: !this._settings[e] };
  }
  render() {
    return u`
      <umb-body-layout .headline=${this.data?.headline ?? "Table settings"}>
        <uui-box>
          <div class="toggles">
            <uui-toggle
              ?checked=${this._settings.columnHasHeader}
              @change=${() => this._toggle("columnHasHeader")}>
              First row is header
            </uui-toggle>

            <uui-toggle
              ?checked=${this._settings.rowHasHeader}
              @change=${() => this._toggle("rowHasHeader")}>
              First column is header
            </uui-toggle>

            <uui-toggle
              ?checked=${this._settings.highlightEmptyCells}
              @change=${() => this._toggle("highlightEmptyCells")}>
              Highlight empty cells
            </uui-toggle>
          </div>
        </uui-box>

        <div slot="actions">
          <uui-button look="secondary" @click=${this._close} label="Cancel"></uui-button>
          <uui-button look="primary" @click=${this._submit} label="Apply"></uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
l.styles = r`
    .toggles {
      display: flex;
      flex-direction: column;
      gap: var(--uui-size-4);
    }
  `;
n([
  h()
], l.prototype, "_settings", 2);
l = n([
  c("webwonders-table-settings-modal")
], l);
export {
  l as WebwondersTableSettingsModalElement,
  l as element
};
//# sourceMappingURL=table-settings-modal.element-DVYuSkZG.js.map
