using LoggingInByGoogle.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoggingInByGoogle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<ValueModel> ReturnValueToFrontend()
        {
            ValueModel valueModel = new ValueModel();
            valueModel.ValueString1 = "To";
            valueModel.ValueString2 = "Jest";
            valueModel.ValueString3 = "Kupsztal";
            return Ok(valueModel);
        }
    }
}
