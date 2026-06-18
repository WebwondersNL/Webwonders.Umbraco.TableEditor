using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Models.PublishedContent;
using Webwonders.Umbraco.TableEditor.Interfaces;
using Webwonders.Umbraco.TableEditor.Models;

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

    public static Task<IHtmlContent> RenderTableAsync(this IHtmlHelper html, IPublishedElement element, string propertyAlias, string theme = "Default")
    {
        var renderer = html.ViewContext.HttpContext.RequestServices.GetRequiredService<IWebwondersTableRenderer>();
        return renderer.RenderTableAsync(html, element, propertyAlias, theme);
    }

    public static Task<IHtmlContent> RenderTableAsync(this IHtmlHelper html, WebwondersTableEditor table, string theme = "Default")
    {
        var renderer = html.ViewContext.HttpContext.RequestServices.GetRequiredService<IWebwondersTableRenderer>();
        return renderer.RenderTableAsync(html, table, theme);
    }
}