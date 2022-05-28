using GameApi.Domain.Users;

namespace GameApi.Domain.Game;

public class LeaderboardEntry
{
    public int GameLeaderboardEntryId { get; set; }

    public int GameInstanceId { get; set; }

    public int UserId { get; set; }

    public User User { get; set; } = default!;

    public GameInstance GameInstance { get; set; } = default!;
}