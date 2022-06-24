import pandas as pd
from game import Game
import random

def genGameInstance() -> pd.DataFrame:
    """
    Generate a gameplay history data. 
    The current script chooses random valid moves.

    Feel free to make the change to the script strategically and data storage methods.
    Returns:
        Dataframe containing game play history.
    """
    mainInstance = Game()
    possibleMoves = ["up", "down", "left", "right"]
    histList = []

    while not mainInstance.isGameOver():
        boardState = mainInstance.board()
        validMove = []

        # Valid move checker.
        for move in possibleMoves:
            checkedInstance = Game(boardState.copy())
            checkedInstance.move(move)
            if checkedInstance.board() != boardState:
                validMove.append(move)

        selectedMove = random.choice(validMove)
        mainInstance.move(selectedMove)

        # Append a selected move to the row.
        for move in possibleMoves:
            if move == selectedMove:
                boardState.append(1)
            else:
                boardState.append(0)

        boardState.append(0)
        histList.append(boardState.copy())

    histList.append(mainInstance.board()+[0,0,0,0,1])
    return pd.DataFrame(histList, columns=[str(i) for i in range(16)]+possibleMoves+["gameOver"])


if __name__ == "__main__":
    """
    Generate a gameplay history made by the agent.
    """
    import warnings
    warnings.filterwarnings('ignore')

    instances = pd.DataFrame(columns=[str(i) for i in range(16)]+["up", "down", "left", "right", "gameOver"])
    instances = instances.append(genGameInstance(), ignore_index=True)
    instances.drop_duplicates(subset=[str(i) for i in range(16)]).to_csv("./output/game_data.csv", index=None)
