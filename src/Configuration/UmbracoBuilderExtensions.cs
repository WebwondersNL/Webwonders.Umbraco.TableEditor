using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.DependencyInjection;
using Webwonders.Umbraco.TableEditor.Interfaces;
using Webwonders.Umbraco.TableEditor.PropertyValueConverters;
using Webwonders.Umbraco.TableEditor.Services;

namespace Webwonders.Umbraco.TableEditor.Configuration;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder AddWebwondersTableEditor(this IUmbracoBuilder builder)
    {
        builder.PropertyValueConverters()
            .Append<PropertyValueConverters.WebwondersTableEditorPropertyValueConverter>();
        
        builder.Services.AddScoped<IWebwondersTableRenderer, WebwondersTableRenderer>();
        
        return builder;
    }
}