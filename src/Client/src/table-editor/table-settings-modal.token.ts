import { UmbModalToken } from '@umbraco-cms/backoffice/modal';

export type TableSettingsModalData = {
    headline?: string;
    settings: {
        columnHasHeader: boolean;
        rowHasHeader: boolean;
        highlightEmptyCells?: boolean;
    };
};

export type TableSettingsModalResult = {
    settings: TableSettingsModalData['settings'];
};

export const TABLE_SETTINGS_MODAL_TOKEN = new UmbModalToken<TableSettingsModalData, TableSettingsModalResult>(
    'Webwonders.TableEditor.TableSettingsModal',
    {
        modal: {
            type: 'sidebar',
            size: 'small',
        },
    }
);