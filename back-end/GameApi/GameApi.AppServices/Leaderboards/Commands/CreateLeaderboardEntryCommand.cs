using GameApi.Domain.Game;
using MediatR;

namespace GameApi.AppServices.Leaderboards.Commands;

public class CreateLeaderboardEntryCommand : IRequest
{
    public LeaderboardEntry LeaderboardEntry { get; set; } = default!;

    public CreateLeaderboardEntryCommand(LeaderboardEntry leaderboardEntry)
    {
        LeaderboardEntry = leaderboardEntry?? throw new ArgumentNullException(nameof(leaderboardEntry));
    }
}

public class CreateLeaderboardEntryHandler : AsyncRequestHandler<CreateLeaderboardEntryCommand>
{
    protected override Task Handle(CreateLeaderboardEntryCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}