import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type TableCreateModalData = {
    headline?: string;
    rows?: number;
    columns?: number;
};

export type TableCreateModalValue = {
    rows: number;
    columns: number;
    columnNames?: string[];
    cellData?: string[][];
};

export const TABLE_CREATE_MODAL_TOKEN = new UmbModalToken<TableCreateModalData, TableCreateModalValue>(
    "Webwonders.TableEditor.CreateTableModal",
    {
        modal: {
            type: "sidebar",
            size: "small",
        },
    }
);
