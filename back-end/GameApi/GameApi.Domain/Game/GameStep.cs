namespace GameApi.Domain.Game;

/// <summary>
/// This class represents a game step.
/// An entry of this class should be created after a move is made and a new tile is spawned.
/// </summary>
public class GameStep
{
    /// Should be auto-incremented from 0
    public int GameStepId { get; set; }

    /// <summary>
    /// The id of a game instance.
    /// </summary>
    public int GameInstanceId { get; set; }

    public int NewTileRow { get; set; }

    public int NewTileColumn { get; set; }

    ///
    /// <summary>
    /// The exponent of the number of a tile. e.g. 2048 -> 11
    public int NewTileExponent { get; set; } = default!;

    public MoveType LastMove { get; set; }
}
