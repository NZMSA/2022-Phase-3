namespace GameApi.Domain.Game;

public class Tile
{
    public int Row { get; set; }
    public int Column { get; set; }
    public int Exponent { get; set; }

    public Tile(int row, int column, int exponent)
    {
        Row = row;
        Column = column;
        Exponent = exponent;
    }
}
