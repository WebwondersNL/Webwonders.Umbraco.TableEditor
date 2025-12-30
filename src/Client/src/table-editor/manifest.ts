export const manifests: Array<UmbExtensionManifest> = [
    {
        type: "propertyEditorUi",
        alias: "Webwonders.TableEditor.PropertyEditorUi",
        name: "Icon Picker Property Editor UI",
        element: () => import('./table-editor.element.ts'),
        meta: {
            label: "Table Editor",
            icon: "icon-table",
            group: "common",
            propertyEditorSchemaAlias: "Webwonders.TableEditor.PropertyEditorSchema"
        },
    }
];