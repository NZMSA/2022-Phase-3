using Microsoft.EntityFrameworkCore;

namespace GameApi.Infrastructure.Persistence.Contexts;

public interface ISqlDbContextFactory<T> : IDbContextFactory<T> where T : DbContext
{
    
}