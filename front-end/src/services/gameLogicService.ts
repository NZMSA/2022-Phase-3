import { TileInfo } from "../store/slices/gameSlice";

export const copyGameState = (arr: TileInfo[][]): TileInfo[][] => {
  return arr.map((i) => i.slice());
};

export const squashRow = (row: TileInfo[]): TileInfo[] => {
  let squashedRow = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i].value !== 0) {
      squashedRow.push(row[i]);
    }
  }

  return squashedRow;
};

export const combineLeftRowVals = (squashedRow: TileInfo[]): TileInfo[] => {
  let newRow = [];

  for (let i = 0; i < squashedRow.length; i++) {
    if (i + 1 === squashedRow.length) {
      newRow.push({ value: squashedRow[i].value });
      break;
    }

    //TODO: Update score value
    if (squashedRow[i].value === squashedRow[i + 1].value) {
      newRow.push({ value: squashedRow[i].value + 1 });
      i++;
      continue;
    }

    newRow.push({ value: squashedRow[i].value });
  }

  return newRow;
};

export const combineRightRowVals = (squashedRow: TileInfo[]): TileInfo[] => {
  let newRow = [];

  for (let i = squashedRow.length - 1; i >= 0; i--) {
    if (i - 1 < 0) {
      newRow.unshift({ value: squashedRow[i].value });
      break;
    }

    if (squashedRow[i].value === squashedRow[i - 1].value) {
      newRow.unshift({ value: squashedRow[i].value + 1 });
      i--;
      continue;
    }

    newRow.unshift({ value: squashedRow[i].value });
  }

  return newRow;
};

export const rotateRight = (gameState: TileInfo[][]): TileInfo[][] => {
  var newState: TileInfo[][] = [];
  for (let i = 0; i < gameState[0].length; i++) {
    newState.push([]);
  }

  gameState.forEach((row) => {
    row.forEach((tile, index) => {
      newState[index].unshift(tile);
    });
  });

  return newState;
};

export const rotateLeft = (gameState: TileInfo[][]): TileInfo[][] => {
  var newState: TileInfo[][] = [];
  for (let i = 0; i < gameState[0].length; i++) {
    newState.push([]);
  }

  gameState.forEach((row) => {
    row.forEach((tile, index) => {
      newState[row.length - index - 1].push(tile);
    });
  });

  return newState;
};

export const generateTile = (gameState: TileInfo[][]): TileInfo[][] => {
  let newState = copyGameState(gameState);

  var emptyTiles: { x: number; y: number }[] = [];

  gameState.forEach((row, rowInd) => {
    row.forEach((tile, tileInd) => {
      if (tile.value === 0) {
        emptyTiles.push({ x: rowInd, y: tileInd });
      }
    });
  });

  let randEmpty = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  newState[randEmpty.x][randEmpty.y] = { value: Math.ceil(Math.random() * 2) };

  return newState;
};

export const hasTileMoved = (
  originalState: TileInfo[][],
  newState: TileInfo[][]
) => {
  for (let i = 0; i < originalState.length; i++) {
    for (let j = 0; j < originalState[i].length; j++) {
      if (originalState[i][j].value !== newState[i][j].value) {
        return true;
      }
    }
  }

  return false;
};

export const makeLeftMove = (originalState: TileInfo[][]): TileInfo[][] => {
  return originalState.map((row) => {
    let squashedRow = squashRow(row);
    let newRow = combineLeftRowVals(squashedRow);

    let diff = row.length - newRow.length;
    for (let i = 0; i < diff; i++) {
      newRow.push({ value: 0 });
    }

    return newRow;
  });
};

export const makeRightMove = (originalState: TileInfo[][]): TileInfo[][] => {
  return originalState.map((row) => {
    let squashedRow = squashRow(row);
    let newRow = combineRightRowVals(squashedRow);

    let diff = row.length - newRow.length;
    for (let i = 0; i < diff; i++) {
      newRow.unshift({ value: 0 });
    }

    return newRow;
  });
};

export const makeDownMove = (originalState: TileInfo[][]) : TileInfo[][] => {
  let rotatedState = rotateRight(originalState);

  let newState = rotatedState.map((row) => {
    let squashedRow = squashRow(row);
    let newRow = combineLeftRowVals(squashedRow);

    let diff = row.length - newRow.length;
    for (let i = 0; i < diff; i++) {
      newRow.push({ value: 0 });
    }

    return newRow;
  });

  return rotateLeft(newState);
};

export const makeUpMove = (originalState: TileInfo[][]) : TileInfo[][] => {
  let rotatedState = rotateLeft(originalState);

  let newState = rotatedState.map((row) => {
    let squashedRow = squashRow(row);
    let newRow = combineRightRowVals(squashedRow);

    let diff = row.length - newRow.length;
    for (let i = 0; i < diff; i++) {
      newRow.push({ value: 0 });
    }

    return newRow;
  });

  return rotateRight(newState);
};

export const isGameOver = (state: TileInfo[][]) : boolean => {
    let leftState = makeLeftMove(state);
    let rightState = makeRightMove(state);
    let downState = makeDownMove(state);
    let upState = makeUpMove(state);

    let hasEmptyTile = false;

    state.forEach((row) => {
        row.forEach((tile) => {
            if (tile.value === 0) {
                hasEmptyTile = true;
            };
        });
    });

    return !hasEmptyTile &&
    !hasTileMoved(state, leftState) && 
    !hasTileMoved(state, rightState) && 
    !hasTileMoved(state, downState) && 
    !hasTileMoved(state, upState);
}