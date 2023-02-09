using Microsoft.EntityFrameworkCore;
using MonoFlic.Models;

namespace MonoFlic.Data
{
    public class StreamServerContext : DbContext
    {
        public StreamServerContext(DbContextOptions<StreamServerContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Series> Series { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>().ToTable("Movie");
            modelBuilder.Entity<Series>().ToTable("Series");
        }
    }
}
