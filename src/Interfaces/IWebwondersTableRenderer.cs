using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Umbraco.Cms.Core.Models.PublishedContent;
using Webwonders.Umbraco.TableEditor.Models;

namespace Webwonders.Umbraco.TableEditor.Interfaces;

public interface IWebwondersTableRenderer
{
    Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, IPublishedContent content, string propertyAlias, string theme = "Default");
    Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, IPublishedElement element, string propertyAlias, string theme = "Default");
    Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, string propertyAlias, string theme = "default");
    Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, WebwondersTableEditor table, string theme = "default");
}