import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { moveDown, moveLeft, moveRight, moveUp, gameOver, newGame, selectState, startGame, selectIsOver, MoveType, startMove } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";


//OPTIMISE: Create a logic game grid row to reduce update counts - Rodger, 7th May 2022
export interface LogicGameGridProps {
    width: number,
    height: number
}

//TODO: Add in custom key-bindings for controls - Rodger, 7th May 2022 (Alternative, bundle common keypress events)
const LogicGameGrid = ({width, height} : LogicGameGridProps) : JSX.Element => {
    const gameState = useAppSelector(selectState);
    const isGameOver = useAppSelector(selectIsOver);
    const dispatch = useAppDispatch();
    
    useKeyPress('ArrowDown', () => {
        dispatch(startMove(MoveType.DOWN));
    });
    useKeyPress('ArrowUp', () => {
        dispatch(startMove(MoveType.UP))
    });
    useKeyPress('ArrowLeft', () => {
        dispatch(startMove(MoveType.LEFT));
    });
    useKeyPress('ArrowRight', () => {
        dispatch(startMove(MoveType.RIGHT));
    });

    useEffect(() => {
        dispatch(startGame())
    }, [dispatch]);

    return <Fragment> 
            {isGameOver ? <div>
                <h1>Game Over!</h1>
            </div> : 
            <GameGrid width={width} height={height} gameState={gameState}/>
        }
        </Fragment>
}

const useKeyPress = (targetKey: string, callback: () => void) => {

    const handlePress = (event : KeyboardEvent) => {
        if(event.key === targetKey) {
            callback();
        }
    };

    useEffect(() => {
        //remove any existing listeners (in case this component gets re-rendered multiple times)
        window.removeEventListener('keyup', handlePress);
        //set a listener for the key being released
        window.addEventListener('keyup', handlePress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default LogicGameGrid;