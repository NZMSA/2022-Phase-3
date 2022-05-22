import { TileInfo } from "../store/slices/gameSlice";

export const copyGameState = (arr: TileInfo[][]) : TileInfo[][] => {
    return arr.map((i) => i.slice());
}

export const squashRow = (row : TileInfo[]) : TileInfo[] => {
    let squashedRow = [];
    
    
    for(let i = 0; i < row.length; i++) {
        if(row[i].value !== 0) {
            squashedRow.push(row[i]);
        }
    }

    return squashedRow;
}

export const combineLeftRowVals = (squashedRow : TileInfo[]) : TileInfo[] => {
    let newRow = [];

    for(let i = 0; i < squashedRow.length; i++) {
        if(i + 1 === squashedRow.length) {
            newRow.push({ value: squashedRow[i].value });
            break;
        }

        if(squashedRow[i].value === squashedRow[i + 1].value) {
            newRow.push({value : squashedRow[i].value + 1});
            i++;
            continue;
        }

        newRow.push({ value: squashedRow[i].value });
    };

    return newRow;
}

export const combineRightRowVals = (squashedRow : TileInfo[]) : TileInfo[] => {
    let newRow = [];

    for(let i = squashedRow.length - 1; i >= 0; i--) {
        if(i - 1 < 0) {
            newRow.unshift({ value: squashedRow[i].value });
            break;
        }

        if(squashedRow[i].value === squashedRow[i - 1].value) {
            newRow.unshift({value : squashedRow[i].value + 1});
            i--;
            continue;
        }

        newRow.unshift({ value: squashedRow[i].value });
    };

    return newRow;
}

export const rotateRight = (gameState: TileInfo[][]) : TileInfo[][] => {
    var newState : TileInfo[][] = [];
    for(let i = 0; i < gameState[0].length; i++) {
        newState.push([]);
    }

    gameState.forEach(row => {
        row.forEach((tile, index) => {
            newState[index].unshift(tile);
        });
    });

    return newState;
}

export const rotateLeft = (gameState: TileInfo[][]) : TileInfo[][] => {
    var newState : TileInfo[][] = [];
    for(let i = 0; i < gameState[0].length; i++) {
        newState.push([]);
    }

    gameState.forEach(row => {
        row.forEach((tile, index) => {
            newState[row.length - index - 1].push(tile);
        });
    });

    return newState;
}