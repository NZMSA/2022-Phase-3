using GameApi.Domain.Game;
using Microsoft.EntityFrameworkCore;

namespace GameApi.Infrastructure.Persistence.Contexts;

public class SqlDbContext : DbContext
{
    public SqlDbContext(DbContextOptions<SqlDbContext> options)
        : base(options)
    {
    }

    public DbSet<GameInstance>? GameInstance { get; set; }

    public DbSet<GameStep>? GameStep { get; set; }

    public DbSet<User>? User { get; set; }

    public DbSet<Leaderboard>? Leaderboard { get; set; }
}