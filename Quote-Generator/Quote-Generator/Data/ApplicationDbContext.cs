using Microsoft.EntityFrameworkCore;
using Quote_Generator.Models;

namespace Quote_Generator.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> option) : base(option)
        {
            
        }
        public DbSet<Miniature> Miniature { get; set; }
    }
}
