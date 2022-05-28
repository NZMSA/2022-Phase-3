using GameApi.Domain.Game;
using MediatR;

namespace GameApi.AppServices.Leaderboards.Queries;

public class GetLeaderboardQuery : IRequest<Leaderboard>
{
    
}

public class GetLeaderboardHandler : IRequestHandler<GetLeaderboardQuery, Leaderboard>
{
    public Task<Leaderboard> Handle(GetLeaderboardQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}