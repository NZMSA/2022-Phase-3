namespace GameApi.Domain.Game;

public class Leaderboard
{
    IEnumerable<LeaderboardEntry> LeaderboardEntries { get; set; } = default!;
}