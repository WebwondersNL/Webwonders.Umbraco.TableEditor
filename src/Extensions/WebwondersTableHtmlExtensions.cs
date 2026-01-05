using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Models.PublishedContent;
using Webwonders.Umbraco.TableEditor.Interfaces;

namespace Webwonders.Umbraco.TableEditor.Extensions;

public static class WebwondersTableHtmlExtensions
{
    public static Task<IHtmlContent> RenderTableAsync(this IHtmlHelper html, string propertyAlias, string theme = "Default")
    {
        var renderer = html.ViewContext.HttpContext.RequestServices.GetRequiredService<IWebwondersTableRenderer>();
        return renderer.RenderTableAsync(html, propertyAlias, theme);
    }
    
    public static Task<IHtmlContent> RenderTableAsync(this IHtmlHelper html, IPublishedContent content, string propertyAlias, string theme = "Default")
    {
        var renderer = html.ViewContext.HttpContext.RequestServices.GetRequiredService<IWebwondersTableRenderer>();
        return renderer.RenderTableAsync(html, content, propertyAlias, theme);
    }
}