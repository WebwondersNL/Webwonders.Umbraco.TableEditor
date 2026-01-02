import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type TableCreateModalData = {
    headline?: string;
    // Optional defaults if you ever want them:
    rows?: number;
    columns?: number;
};

export type TableCreateModalValue = {
    rows: number;
    columns: number;
};

export const TABLE_CREATE_MODAL_TOKEN = new UmbModalToken<TableCreateModalData, TableCreateModalValue>(
    "Webwonders.TableEditor.CreateTableModal",
    {
        modal: {
            type: "dialog",
        },
    }
);