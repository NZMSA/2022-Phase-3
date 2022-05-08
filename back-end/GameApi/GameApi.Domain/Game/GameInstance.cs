using GameApi.Domain.Users;

namespace GameApi.Domain.Game;

public class GameInstance
{
    /// <summary>
    /// The id of a game instance.
    /// </summary>
    public int GameInstanceId { get; set; }
    
    public int UserId { get; set; }

    public bool GameActive { get; set; }

    public int Score { get; set; }

    public int RowSize { get; set; }

    public int ColumnSize { get; set; }

    public IList<GameStep> GameSteps { get; set; } = default!;

    public User User { get; set; } = default!;
}