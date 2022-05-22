import random

def useModel(grid: list) -> str:


    map_dir = {0:"Up", 1: "Right", 2: "Down", 3: "Left"}
    return map_dir[random.randrange(0,4)]