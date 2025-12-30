import {
    LitElement,
    customElement
} from "@umbraco-cms/backoffice/external/lit";
import {UmbElementMixin} from "@umbraco-cms/backoffice/element-api";


@customElement("table-editor-property-editor-ui")
export class TableEditorPropertyEditorUiElement extends UmbElementMixin(LitElement) {
    
}

export {TableEditorPropertyEditorUiElement as element};