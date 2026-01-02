const e = [
  {
    type: "propertyEditorUi",
    alias: "Webwonders.TableEditor.PropertyEditorUi",
    name: "Webwonders Table Editor Property Editor UI",
    element: () => import("./table-editor.element-DrVYQ3Hp.js"),
    meta: {
      label: "Webwonders Table Editor",
      icon: "icon-table",
      group: "common",
      propertyEditorSchemaAlias: "Webwonders.TableEditor.PropertyEditorSchema"
    }
  },
  {
    type: "propertyEditorSchema",
    alias: "Webwonders.TableEditor.PropertyEditorSchema",
    name: "Webwonders Table Editor Schema",
    meta: {
      defaultPropertyEditorUiAlias: "Webwonders.TableEditor.PropertyEditorUi"
    }
  },
  {
    type: "modal",
    alias: "Webwonders.TableEditor.TableSettingsModal",
    name: "Webwonders Table Settings Modal",
    element: () => import("./table-settings-modal.element-DVYuSkZG.js")
  },
  {
    type: "modal",
    alias: "Webwonders.TableEditor.CreateTableModal",
    name: "Webwonders Table Create Modal",
    element: () => import("./table-create-modal.element-CrZU_DSn.js")
  }
];
export {
  e as manifests
};
//# sourceMappingURL=webwonders-tableeditor.js.map
