using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MonoFlic.Data;

namespace MonoFlic.Controllers
{
    [Authorize]
    [ApiController]
    [Route("Api/[controller]")]
    public class StreamController : Controller
    {
        private readonly StreamServerContext _context;
        public StreamController(StreamServerContext context)
        {
            _context = context;
        }

        [Route("Get/{id}")]
        [HttpGet]
        public FileStreamResult Get(int id)
        {
            

            var filestream = System.IO.File.OpenRead(@"./StreamServer/TheLastOfUsTrailer.mp4");
            return File(filestream, contentType: "video/mp4", fileDownloadName: "test", enableRangeProcessing: true);
        }
    }
}
