using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;
using Webwonders.Umbraco.TableEditor.Interfaces;
using Webwonders.Umbraco.TableEditor.Models;

namespace Webwonders.Umbraco.TableEditor.Services;

public class WebwondersTableRenderer : IWebwondersTableRenderer
{
    private readonly ICompositeViewEngine _viewEngine;
    private readonly ITempDataDictionaryFactory _tempDataFactory;
    private readonly IUmbracoContextAccessor _umbracoContextAccessor;
    private readonly ILogger<WebwondersTableRenderer> _logger;
    
    public WebwondersTableRenderer(
        ICompositeViewEngine viewEngine,
        ITempDataDictionaryFactory tempDataFactory,
        IUmbracoContextAccessor umbracoContextAccessor, 
        ILogger<WebwondersTableRenderer> logger)
    {
        _viewEngine = viewEngine;
        _tempDataFactory = tempDataFactory;
        _umbracoContextAccessor = umbracoContextAccessor;
        _logger = logger;
    }
    
    public Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, string propertyAlias, string theme = "default")
    {
        var content = GetCurrentContent();
        return content is null
            ? Task.FromResult<IHtmlContent>(HtmlString.Empty)
            : RenderTableAsync(html, content, propertyAlias, theme);
    }
    
    public async Task<IHtmlContent> RenderTableAsync(IHtmlHelper html, IPublishedContent content, string propertyAlias, string theme = "default")
    {
        var table = content.Value<WebwondersTableEditor>(propertyAlias);
        if (table is null) return HtmlString.Empty;
        
        var viewPath = $"~/Views/Partials/Tables/{theme}.cshtml";
        var viewResult = _viewEngine.GetView(null, viewPath, isMainPage: false);

        if (!viewResult.Success && !theme.Equals("default", StringComparison.OrdinalIgnoreCase))
        {
            viewResult = _viewEngine.GetView(null, "~/Views/Partials/Tables/default.cshtml", isMainPage: false);
            
        }
        if (!viewResult.Success) return HtmlString.Empty;
        
        return await RenderViewAsync(html, viewResult.View, table);
    }

    private IPublishedContent? GetCurrentContent()
    {
        if (!_umbracoContextAccessor.TryGetUmbracoContext(out var ctx)) return null;
        return ctx.PublishedRequest?.PublishedContent;
    }

    private async Task<IHtmlContent> RenderViewAsync(IHtmlHelper html, IView view, object model)
    {
        var actionContext = html.ViewContext;

        using var sw = new StringWriter();

        var viewData = new ViewDataDictionary(
            new EmptyModelMetadataProvider(),
            actionContext.ViewData.ModelState)
        {
            Model = model
        };

        var viewContext = new ViewContext(
            actionContext,
            view,
            viewData,
            _tempDataFactory.GetTempData(actionContext.HttpContext),
            sw,
            new HtmlHelperOptions());

        await view.RenderAsync(viewContext);

        return new HtmlString(sw.ToString());
    }
}