from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from useModel import useModel

root = FastAPI()

class GameGrid(BaseModel):
    GameGrid: list[int]

@root.get("/api/health")
def replyHealth():
    return {"message": "I am up and running!"}

@root.post(
    "/api/move",
    description="""
    Let the AI decide the best swipe move based on given input.
    Input:
        A list of 16 numbers.
    Returns:
        "Up", "Down", "Left" or "Right"
    """
)
def decideMove(grid: list[int]):
    if len(grid) != 16:
        raise HTTPException(status_code=400, detail=f"Invalid array size! Expected 16 numbers, got {len(grid)} numbers instead.")

    for item in grid:
        if type(item) != int:
            raise HTTPException(status_code=400, detail="Invalid data type detected!")
    
    return useModel(grid)