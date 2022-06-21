using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameApi.Domain.Game;

public class Leaderboard
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int GameLeaderboardEntryId { get; set; }

    public int GameInstanceId { get; set; }

    public int UserId { get; set; }

    public int Score { get; set; }
}