using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Webwonders.Umbraco.TableEditor.Configuration;

public class WebwondersTableEditorComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.AddWebwondersTableEditor();
    }
}