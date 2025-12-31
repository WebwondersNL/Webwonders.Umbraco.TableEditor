using System.Text.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Webwonders.Umbraco.TableEditor.Models;

namespace Webwonders.Umbraco.TableEditor.PropertyValueConverters;

public class WebwondersTableEditorPropertyValueConverter : PropertyValueConverterBase
{
    private static readonly JsonSerializerOptions JsonOptions =
        new(JsonSerializerDefaults.Web);

    public override bool IsConverter(IPublishedPropertyType propertyType)
        => propertyType.EditorAlias == Constants.SchemaAlias;
    
    public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
        => typeof(TableEditorValue);

    public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
        => PropertyCacheLevel.Element;

    public override object? ConvertSourceToIntermediate(
        IPublishedElement owner,
        IPublishedPropertyType propertyType,
        object? source,
        bool preview)
        => source;

    public override object? ConvertIntermediateToObject(
        IPublishedElement owner,
        IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel,
        object? inter,
        bool preview)
    {
        if (inter is not string json || string.IsNullOrWhiteSpace(json))
            return null;

        try
        {
            return JsonSerializer.Deserialize<TableEditorValue>(json, JsonOptions);
        }
        catch
        {
            return null;
        }
    }
}