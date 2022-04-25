namespace GameApi.Infrastructure.Persistence.Contexts;

public class SqlDbContextFactory : ISqlDbContextFactory<SqlDbContext>
{
    public SqlDbContext CreateDbContext()
    {
        throw new NotImplementedException();
    }
}