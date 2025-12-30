using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webwonders.Umbraco.TableEditor.Controllers
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "Webwonders.Umbraco.TableEditor")]
    public class WebwondersUmbracoTableEditorApiController : WebwondersUmbracoTableEditorApiControllerBase
    {

        [HttpGet("ping")]
        [ProducesResponseType<string>(StatusCodes.Status200OK)]
        public string Ping() => "Pong";
    }
}
