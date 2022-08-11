from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from useModel import useModel

root = FastAPI(title="Data Science API Endpoints!")

class GameGrid(BaseModel):
    GameGrid: list[int]

@root.get(
    "/api/health",
    summary="Check whether the API is up or not.",
    tags=["API"]
)
def health_Check():
    return {"message": "I am up and running!"}

@root.post(
    "/api/move",
    summary="Have the model decide the move for the game.",
    description="""
    Let the model decide the best swipe move based on given input.
    Input:
        A list with 16 numbers. The numbers used are indices of 2.
    Returns:
        "Up", "Down", "Left", "Right" or "Game Over"
    """,
    tags=["API"]
)
def decide_Move_or_Game_Over(grid: list[int]):
    if len(grid) != 16:
        raise HTTPException(status_code=400, detail=f"Invalid array size! Expected 16 numbers, got {len(grid)} numbers instead.")
    
    return useModel(grid)