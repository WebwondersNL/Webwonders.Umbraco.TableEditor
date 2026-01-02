import { css, customElement, html, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";
import type { TableCreateModalData, TableCreateModalValue } from "./table-create-modal.token";

@customElement("webwonders-table-create-modal")
export class WebwondersTableCreateModalElement extends UmbModalBaseElement<
    TableCreateModalData,
    TableCreateModalValue
> {
    @state()
    private _rows = 3;

    @state()
    private _columns = 3;

    connectedCallback(): void {
        super.connectedCallback();
        
        if (typeof this.data?.rows === "number" && this.data.rows > 0) this._rows = this.data.rows;
        if (typeof this.data?.columns === "number" && this.data.columns > 0) this._columns = this.data.columns;
    }

    private _onRowsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._rows = Number.isFinite(raw) ? Math.max(1, Math.min(50, raw)) : 1;
    }

    private _onColumnsInput(e: InputEvent) {
        const raw = Number((e.target as HTMLInputElement).value);
        this._columns = Number.isFinite(raw) ? Math.max(1, Math.min(20, raw)) : 1;
    }

    private _close() {
        this.modalContext?.reject();
    }

    private _submit() {
        this.value = { rows: this._rows, columns: this._columns };
        this.modalContext?.submit();
    }

    override render() {
        const headline = this.data?.headline ?? "Create table";

        return html`
            <uui-dialog-layout .headline=${headline}>

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

    static styles = css`
        .fields {
            display: grid;
            gap: var(--uui-size-4);
        }
    `;
}

export { WebwondersTableCreateModalElement as element };

declare global {
    interface HTMLElementTagNameMap {
        "webwonders-table-create-modal": WebwondersTableCreateModalElement;
    }
}