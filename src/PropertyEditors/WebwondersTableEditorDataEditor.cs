using Umbraco.Cms.Core.PropertyEditors;

namespace Webwonders.Umbraco.TableEditor.PropertyEditors;

[DataEditor(alias: Constants.SchemaAlias, ValueType = ValueTypes.Json)]
public sealed class WebwondersTableEditorDataEditor : DataEditor
{
    public WebwondersTableEditorDataEditor(IDataValueEditorFactory factory)
        : base(factory)
    {
    }
}