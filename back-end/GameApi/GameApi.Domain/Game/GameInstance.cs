using GameApi.Domain.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameApi.Domain.Game;

public class GameInstance
{
    /// <summary>
    /// The id of a game instance.
    /// </summary>
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int GameInstanceId { get; set; }

    public int UserId { get; set; }

    public bool GameActive { get; set; }

    public int Score { get; set; }

    public int RowSize { get; set; }

    public int ColumnSize { get; set; }

    public ICollection<GameStep> GameSteps { get; set; } = default!;

    public string LatestGrid { get; set; } = "";

    public User User { get; set; } = default!;
}