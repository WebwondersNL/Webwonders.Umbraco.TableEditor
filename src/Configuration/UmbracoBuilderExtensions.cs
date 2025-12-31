using Umbraco.Cms.Core.DependencyInjection;
using Webwonders.Umbraco.TableEditor.PropertyValueConverters;

namespace Webwonders.Umbraco.TableEditor.Configuration;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder AddWebwondersTableEditor(this IUmbracoBuilder builder)
    {
        builder.PropertyValueConverters()
            .Append<PropertyValueConverters.WebwondersTableEditorPropertyValueConverter>();

        return builder;
    }
}