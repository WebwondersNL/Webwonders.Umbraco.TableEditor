namespace Webwonders.Umbraco.TableEditor.Models;

public class WebwondersTableEditor
{
    public TableSettings Settings { get; set; } = new();
    public List<TableColumn> Columns { get; set; } = new();
    public List<TableRow> Rows { get; set; } = new();
}