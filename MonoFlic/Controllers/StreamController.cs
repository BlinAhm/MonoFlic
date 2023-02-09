﻿using Microsoft.AspNetCore.Authorization;
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

        [Route("GetSeries/{id}")]
        [HttpGet]
        public FileStreamResult GetSeries(int id)
        {
            var url = _context.Series.Where(x => x.Id == id).First().TrailerURL;

            var filestream = System.IO.File.OpenRead(@""+url);
            return File(filestream, contentType: "video/mp4", fileDownloadName: "test", enableRangeProcessing: true);
        }

        [Route("GetMovie/{id}")]
        [HttpGet]
        public FileStreamResult GetMovie(int id)
        {
            var url = _context.Movies.Where(x => x.Id == id).First().TrailerURL;

            var filestream = System.IO.File.OpenRead(@"" + url);
            return File(filestream, contentType: "video/mp4", fileDownloadName: "test", enableRangeProcessing: true);
        }
    }
}
