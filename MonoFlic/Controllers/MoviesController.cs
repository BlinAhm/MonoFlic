using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MonoFlic.Data;
using MonoFlic.Models;

namespace MonoFlic.Controllers
{
    /*[Authorize]*/
    [ApiController]
    [Route("Api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly StreamServerContext _context;
        public MoviesController(StreamServerContext context)
        {
            _context = context;
        }

        [Route("Get/{id}")]
        [HttpGet]
        public Movie Get(int id)
        {
            return _context.Movies.Where(x => x.Id == id).First();
        }

        [Route("GetAll")]
        [HttpGet]
        public List<Movie> GetAll()
        {
            return _context.Movies.ToList();
        }
    }
}
