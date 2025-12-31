namespace Webwonders.Umbraco.TableEditor.Models;

public class TableEditorValue
{
    public TableSettings Settings { get; set; } = new();
    public List<TableColumn> Columns { get; set; } = new();
    public List<TableRow> Rows { get; set; } = new();
}