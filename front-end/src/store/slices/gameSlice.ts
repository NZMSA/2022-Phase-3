import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import {
  scoreChange,
  combineLeftRowVals,
  combineRightRowVals,
  copyGameState,
  generateTile,
  hasTileMoved,
  isGameOver,
  makeDownMove,
  makeLeftMove,
  makeRightMove,
  makeUpMove,
  rotateLeft,
  rotateRight,
  squashRow,
} from "../../services/gameLogicService";
import { RootState } from "../rootStore";

export interface TileInfo {
  value: number;
}

export interface GameState {
  gameState: TileInfo[][];
  height: number;
  width: number;
  score: number;
  isOver: boolean;
}

const initialState: GameState = {
  gameState: [
    [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
    [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
    [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
    [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  ],
  height: 4,
  width: 4,
  score: 0,
  isOver: false,
};

//TODO: implement reducer actions - Rodger, 7th May 2022
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame: (
      state,
      action: PayloadAction<{ height: number; width: number }>
    ) => {
      let newGameState = [];

      for (let i = 0; i < action.payload.height; i++) {
        let row = [];

        for (let j = 0; j < action.payload.width; j++) {
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
      let newState = makeLeftMove(current(state.gameState));
      if (hasTileMoved(state.gameState, newState))
        newState = generateTile(newState);
      if (isGameOver(newState)) state.isOver = true;

      state.score += scoreChange;
      state.gameState = newState;
    },
    moveRight: (state) => {
      let newState = makeRightMove(current(state.gameState));

      if (hasTileMoved(state.gameState, newState))
        newState = generateTile(newState);
      if (isGameOver(newState)) state.isOver = true;

      state.score += scoreChange;
      state.gameState = newState;
    },
    moveUp: (state) => {
      let newState = makeUpMove(current(state.gameState));

      if (hasTileMoved(state.gameState, newState))
        newState = generateTile(newState);
      if (isGameOver(newState)) state.isOver = true;

      state.score += scoreChange;
      state.gameState = newState;
    },
    moveDown: (state) => {
      let newState = makeDownMove(current(state.gameState));

      if (hasTileMoved(state.gameState, newState))
        newState = generateTile(newState);
      if (isGameOver(newState)) state.isOver = true;

      state.score += scoreChange;
      state.gameState = newState;
    },
    gameOver: (state) => {
      state.isOver = true;
    },
    startGame: (state) => {
      let cleanState = copyGameState(initialState.gameState);

      let x1 = Math.floor(Math.random() * 4);
      let x2 = Math.floor(Math.random() * 4);
      let y1 = Math.floor(Math.random() * 4);
      let y2 = Math.floor(Math.random() * 4);

      if (x1 === x2 && y1 === y2) {
        y2 = Math.floor(Math.random() * y1);
        x2 = Math.floor(Math.random() * x1);
      }

      cleanState[x1][y1] = { value: Math.ceil(Math.random() * 2) };
      cleanState[x2][y2] = { value: Math.ceil(Math.random() * 2) };

      state.gameState = cleanState;
    },
  },
});

export const {
  newGame,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  gameOver,
  startGame,
} = gameSlice.actions;

export const selectState = (state: RootState) => state.game.gameState;
export const selectIsOver = (state: RootState) => state.game.isOver;
export const getScore = (state: RootState) => state.game.score;

export default gameSlice.reducer;
