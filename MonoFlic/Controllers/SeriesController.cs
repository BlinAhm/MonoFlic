using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MonoFlic.Data;
using MonoFlic.Models;

namespace MonoFlic.Controllers
{
    /*[Authorize]*/
    [ApiController]
    [Route("Api/[controller]")]
    public class SeriesController : Controller
    {
        private readonly StreamServerContext _context;
        public SeriesController(StreamServerContext context)
        {
            _context = context;
        }

        [Route("Get/{id}")]
        [HttpGet]
        public Series Get(int id)
        {
            return _context.Series.Where(x => x.Id == id).First();
        }

        [Route("GetAll")]
        [HttpGet]
        public List<Series> GetAll()
        {
            return _context.Series.ToList();
        }
    }
}
