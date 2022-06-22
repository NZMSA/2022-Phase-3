using GameApi.Domain.Game;

namespace GameApi.Domain.GameLogic;

public class GameBoard
{
    int[,] grid;

    public GameBoard(string gameBoardString)
    {
        var board = Newtonsoft.Json.JsonConvert.DeserializeObject<int[][]>(gameBoardString);

        if (board == null)
        {
            throw new Exception("Invalid board");
        }

        grid = new int[board.Length, board[0].Length];

        for (int i = 0; i < board.Length; i++)
        {
            for (int j = 0; j < board[i].Length; j++)
            {
                grid[i, j] = board[i][j];
            }
        }
    }

    public GameBoard(int col, int row)
    {
        grid = new int[col, row];
    }

    public int GetScore()
    {
        int score = 0;

        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                score += Convert.ToInt32(Math.Pow(2, grid[i, j]));
            }
        }

        return score;
    }

    public string GetGameBoardString()
    {
        var board = new int[grid.GetLength(0), grid.GetLength(1)];

        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                board[i, j] = grid[i, j];
            }
        }

        return Newtonsoft.Json.JsonConvert.SerializeObject(board);
    }

    /**
        * Creates a random tile in the grid and return the location of the tile.
        */
    public Tile AddRandomTile()
    {
        var emptyTiles = new List<Tuple<int, int>>();

        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] == 0)
                {
                    emptyTiles.Add(new Tuple<int, int>(i, j));
                }
            }
        }

        if (emptyTiles.Count == 0)
        {
            throw new Exception("No empty tiles");
        }

        var randomTile = emptyTiles[new Random().Next(0, emptyTiles.Count)];

        grid[randomTile.Item1, randomTile.Item2] = new Random().Next(1, 3) == 1 ? 1 : 2;

        return new Tile(randomTile.Item1, randomTile.Item2, grid[randomTile.Item1, randomTile.Item2]);
    }

    public int TryToMove(string direction)
    {
        if (this.IsMoveValid(direction))
        {
            return this.Move(direction);
        }
        else
        {
            throw new Exception("Invalid move");
        }
    }

    /**
        * Move the tiles in te game to a direction, this assumes the move is valid.
        * Returns the points made from making the move
        */
    private int Move(string direction)
    {
        switch (direction)
        {
            case "up":
                return MoveAllUp();
            case "down":
                return MoveAllDown();
            case "left":
                return MoveAllLeft();
            case "right":
                return MoveAllRight();
            default:
                throw new Exception("Invalid direction");
        }
    }

    public bool IsMoveValid(string direction)
    {
        if (direction == "up")
        {
            for (int i = 0; i < grid.GetLength(0); i++)
            {
                for (int j = 0; j < grid.GetLength(1); j++)
                {
                    if (grid[i, j] != 0)
                    {
                        if (i > 0 && grid[i - 1, j] == 0)
                        {
                            return true;
                        }
                        else if (i > 0 && grid[i - 1, j] == grid[i, j])
                        {
                            return true;
                        }
                    }
                }
            }
        }
        else if (direction == "down")
        {
            for (int i = grid.GetLength(0) - 1; i >= 0; i--)
            {
                for (int j = 0; j < grid.GetLength(1); j++)
                {
                    if (grid[i, j] != 0)
                    {
                        if (i < grid.GetLength(0) - 1 && grid[i + 1, j] == 0)
                        {
                            return true;
                        }
                        else if (i < grid.GetLength(0) - 1 && grid[i + 1, j] == grid[i, j])
                        {
                            return true;
                        }
                    }
                }
            }
        }
        else if (direction == "left")
        {
            for (int i = 0; i < grid.GetLength(0); i++)
            {
                for (int j = 0; j < grid.GetLength(1); j++)
                {
                    if (grid[i, j] != 0)
                    {
                        if (j > 0 && grid[i, j - 1] == 0)
                        {
                            return true;
                        }
                        else if (j > 0 && grid[i, j - 1] == grid[i, j])
                        {
                            return true;
                        }
                    }
                }
            }
        }
        else if (direction == "right")
        {
            for (int i = 0; i < grid.GetLength(0); i++)
            {
                for (int j = grid.GetLength(1) - 1; j >= 0; j--)
                {
                    if (grid[i, j] != 0)
                    {
                        if (j < grid.GetLength(1) - 1 && grid[i, j + 1] == 0)
                        {
                            return true;
                        }
                        else if (j < grid.GetLength(1) - 1 && grid[i, j + 1] == grid[i, j])
                        {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    public int MoveAllUp()
    {
        var score = 0;
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] != 0)
                {
                    int k = i;
                    while (k > 0)
                    {
                        if (grid[k - 1, j] == 0)
                        {
                            grid[k - 1, j] = grid[k, j];
                            grid[k, j] = 0;
                            k--;
                        }
                        else if (grid[k - 1, j] == grid[k, j] && grid[k - 1, j] != 0)
                        {
                            grid[k - 1, j] += 1;
                            grid[k, j] = 0;
                            score += Convert.ToInt32(Math.Pow(2, grid[k - 1, j]));
                            break;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
        }
        return score;
    }

    public int MoveAllDown()
    {
        var score = 0;
        for (int i = grid.GetLength(0) - 1; i >= 0; i--)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] != 0)
                {
                    int k = i;
                    while (k < grid.GetLength(0) - 1)
                    {
                        if (grid[k + 1, j] == 0)
                        {
                            grid[k + 1, j] = grid[k, j];
                            grid[k, j] = 0;
                            k++;
                        }
                        else if (grid[k + 1, j] == grid[k, j] && grid[k + 1, j] != 0)
                        {
                            grid[k + 1, j] += 1;
                            grid[k, j] = 0;
                            score += Convert.ToInt32(Math.Pow(2, grid[k + 1, j]));
                            break;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
        }
        return score;
    }

    public int MoveAllLeft()
    {
        var score = 0;
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] != 0)
                {
                    int k = j;
                    while (k > 0)
                    {
                        if (grid[i, k - 1] == 0)
                        {
                            grid[i, k - 1] = grid[i, k];
                            grid[i, k] = 0;
                            k--;
                        }
                        else if (grid[i, k - 1] == grid[i, k] && grid[i, k - 1] != 0)
                        {
                            grid[i, k - 1] += 1;
                            grid[i, k] = 0;
                            score += Convert.ToInt32(Math.Pow(2, grid[i, k - 1]));
                            break;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
        }
        return score;
    }

    public int MoveAllRight()
    {
        var score = 0;
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = grid.GetLength(1) - 1; j >= 0; j--)
            {
                if (grid[i, j] != 0)
                {
                    int k = j;
                    while (k < grid.GetLength(1) - 1)
                    {
                        if (grid[i, k + 1] == 0)
                        {
                            grid[i, k + 1] = grid[i, k];
                            grid[i, k] = 0;
                            k++;
                        }
                        else if (grid[i, k + 1] == grid[i, k] && grid[i, k + 1] != 0)
                        {
                            grid[i, k + 1] += 1;
                            grid[i, k] = 0;
                            score += Convert.ToInt32(Math.Pow(2, grid[i, k + 1]));
                            break;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
        }
        return score;
    }

    public void Print()
    {
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                Console.Write(grid[i, j] + " ");
            }

            Console.WriteLine();
        }
    }

    public void Print(int[,] grid)
    {
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                Console.Write(grid[i, j] + " ");
            }

            Console.WriteLine();
        }
    }

    public bool IsGameOver()
    {
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] == 0)
                {
                    return false;
                }
            }
        }

        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (i > 0 && grid[i, j] == grid[i - 1, j])
                {
                    return false;
                }

                if (i < grid.GetLength(0) - 1 && grid[i, j] == grid[i + 1, j])
                {
                    return false;
                }

                if (j > 0 && grid[i, j] == grid[i, j - 1])
                {
                    return false;
                }

                if (j < grid.GetLength(1) - 1 && grid[i, j] == grid[i, j + 1])
                {
                    return false;
                }
            }
        }

        return true;
    }

    public bool IsGameWon()
    {
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] == 11)
                {
                    return true;
                }
            }
        }

        return false;
    }

    /**
        * Get the grid represented in a string of 2D array. The content of the grid is the exponent of base 2.
        */
    public string ToSerializedString()
    {
        string serializedString = "[";
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            serializedString += "[";
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                serializedString += grid[i, j] + ",";
            }
            serializedString = serializedString.Substring(0, serializedString.Length - 1);
            serializedString += "],";
        }
        serializedString = serializedString.Substring(0, serializedString.Length - 1);
        serializedString += "]";
        return serializedString;
    }

    override
    public string ToString()
    {
        string result = "";
        for (int i = 0; i < grid.GetLength(0); i++)
        {
            for (int j = 0; j < grid.GetLength(1); j++)
            {
                if (grid[i, j] == 0)
                {
                    result += "0";
                }
                else
                {
                    result += Math.Pow(2, grid[i, j]);
                }
            }
            result += "\n";
        }
        return result;
    }
}
