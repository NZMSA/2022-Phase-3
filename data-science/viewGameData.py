import pandas as pd
from os import name, system
from math import ceil, floor

"""
This script is just to display the game history in terminal.
Optional to use but feel free to improve this script for better readability.
"""

gameData = pd.read_csv("./output/game_data.csv")
index = 0

while True:
    if name == "nt":
        system("CLS")
    else:
        system("clear")

    item = list(gameData.loc[index])

    board = [str(2 ** i) if i > 0 else " " for i in item[:16]]
        
    for i in range(4):
        itemBoard = []
        for j in range(4):
            indexBoard = 4*i + j
            str_num = board[indexBoard]
            itemBoard.append(' '*(4 - ceil(len(str_num)/2)) + str_num + ' '*(4 - floor(len(str_num)/2)))
        
        print('        |        |        |        ')
        print('|'.join(itemBoard))
        print('        |        |        |        ')

        if i < 3:
            print('--------+--------+--------+--------')

    print()

    possibleMoves = ["up", "down", "left", "right"]
    move = ""

    for i in range(4):
        if item[16+i] == 1:
            move = possibleMoves[i]
            break
        
    if len(move) > 0:
        print(f"Next move made was {move}.\nNumber of swipes is {index}.\nNumber of instances is {gameData.shape[0] - 1}.")
    else:
        print("Game Over!")

    inputItem = input("Enter 'a' to go to previous instance, 'd' to go to next instance, an instance number or 'q' to quit and then press [Enter]: ")
    if inputItem.lower() == "a" and index > 0:
        index -= 1
    elif inputItem.lower() == "d" and index < (gameData.shape[0] - 1):
        index += 1
    elif inputItem.lower() == "q":
        break
    else:
        try:
            inputItem = int(inputItem)
            if inputItem >= 0 and inputItem < gameData.shape[0]:
                index = inputItem
        except:
            pass
