namespace GameApi.Domain.Game;

public enum MoveType
{
    Left, 
    Right, 
    Up, 
    Down, 
    // System indicates the move is a system generated, e.g. the beginning of a game.
    System
}