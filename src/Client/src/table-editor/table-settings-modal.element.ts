import { css, customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbModalBaseElement } from '@umbraco-cms/backoffice/modal';
import type { TableSettingsModalData, TableSettingsModalResult } from './table-settings-modal.token';

@customElement('webwonders-table-settings-modal')
export class WebwondersTableSettingsModalElement
    extends UmbModalBaseElement<TableSettingsModalData, TableSettingsModalResult> {

    @state()
    private _settings = {
        columnHasHeader: false,
        rowHasHeader: false,
        highlightEmptyCells: false,
    };

    connectedCallback(): void {
        super.connectedCallback();
        const incoming = this.data?.settings;
        if (incoming) {
            this._settings = {
                columnHasHeader: !!incoming.columnHasHeader,
                rowHasHeader: !!incoming.rowHasHeader,
                highlightEmptyCells: !!incoming.highlightEmptyCells,
            };
        }
    }

    private _submit() {
        this.value = {
            settings: this._settings,
        };

        this.modalContext?.submit();
    }

    private _close() {
        this.modalContext?.reject();
    }

    private _toggle(key: keyof typeof this._settings) {
        this._settings = { ...this._settings, [key]: !this._settings[key] };
    }

    render() {
        return html`
      <umb-body-layout .headline=${this.data?.headline ?? 'Table settings'}>
        <uui-box>
          <div class="toggles">
            <uui-toggle
              ?checked=${this._settings.columnHasHeader}
              @change=${() => this._toggle('columnHasHeader')}>
              First row is header
            </uui-toggle>

            <uui-toggle
              ?checked=${this._settings.rowHasHeader}
              @change=${() => this._toggle('rowHasHeader')}>
              First column is header
            </uui-toggle>

            <uui-toggle
              ?checked=${this._settings.highlightEmptyCells}
              @change=${() => this._toggle('highlightEmptyCells')}>
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

    static styles = css`
    .toggles {
      display: flex;
      flex-direction: column;
      gap: var(--uui-size-4);
    }
  `;
}

export { WebwondersTableSettingsModalElement as element };

declare global {
    interface HTMLElementTagNameMap {
        'webwonders-table-settings-modal': WebwondersTableSettingsModalElement;
    }
}