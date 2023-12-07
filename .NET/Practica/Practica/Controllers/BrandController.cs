using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Practica.Models;

namespace Practica.Controllers
{
    public class BrandController : Controller
    {
        private readonly BeerDbContext _context;

        public BrandController(BeerDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Brands.ToListAsync());
        }
    }
}
