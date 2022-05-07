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

        },
        moveLeft: (state) => {
            
        },
        moveRight: (state) => {

        },
        moveUp: (state) => {

        },
        moveDown: (state) => {

        },
        gameOver: (state) => {
            state.isOver = true;
        }
    }
});

export const { newGame, moveLeft, moveRight, moveUp, moveDown, gameOver } = gameSlice.actions;

export const selectState = (state: RootState) => state.game.gameState;
export const selectIsOver = (state: RootState) => state.game.isOver;

export default gameSlice.reducer;