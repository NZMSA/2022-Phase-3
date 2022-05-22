import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootStore';

export interface TileInfo {
    value: number
}

export interface GameState {
    gameState: TileInfo[][],
    height: number,
    width: number,
    score: number,
    isOver: boolean
}

const initialState : GameState = {
    gameState: [
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
    ],
    height: 4,
    width: 4,
    score: 0,
    isOver: false
}

//TODO: implement reducer actions - Rodger, 7th May 2022
export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGame: (state, action : PayloadAction<{height: number, width: number}>) => {
            let newGameState = [];

            for(let i = 0; i < action.payload.height; i++) {
                let row = [];

                for(let j = 0; j < action.payload.width; j++) {
                    row.push({ value: 0 });
                }

                newGameState.push(row);
            }

            state.gameState = newGameState;
            state.isOver = false;
            state.score = 0;
            state.height = action.payload.height;
            state.width = action.payload.width;
        },
        moveLeft: (state) => {
            console.log("Left Key Trigger");   
        },
        moveRight: (state) => {
            console.log("Right Key Trigger");
        },
        moveUp: (state) => {
            console.log("Up Key Trigger");
        },
        moveDown: (state) => {
            console.log("Down Key Trigger");
        },
        gameOver: (state) => {
            state.isOver = true;
        },
        startGame: (state) => {
            let cleanState = initialState.gameState.map((i) => i.slice());

            for(let i = 0; i < 2; i++) {
                cleanState[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = { value: Math.ceil(Math.random() * 2)}
            }

            state.gameState = cleanState;
        }
    }
});

export const { newGame, moveLeft, moveRight, moveUp, moveDown, gameOver, startGame } = gameSlice.actions;

export const selectState = (state: RootState) => state.game.gameState;
export const selectIsOver = (state: RootState) => state.game.isOver;

export default gameSlice.reducer;