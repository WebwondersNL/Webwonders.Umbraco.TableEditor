namespace Webwonders.Umbraco.TableEditor.Models;

public class TableRow
{
    public RowSettings Settings { get; set; } = new();
    public List<TableCell> Cells { get; set; } = new();
}