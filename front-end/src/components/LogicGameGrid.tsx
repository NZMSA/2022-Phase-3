import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { moveDown, moveLeft, moveRight, moveUp, gameOver, newGame, selectState } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";


//OPTIMISE: Create a logic game grid row to reduce update counts - Rodger, 7th May 2022
export interface LogicGameGridProps {
    width: number,
    height: number
}

//TODO: Add in custom key-bindings for controls - Rodger, 7th May 2022 (Alternative, bundle common keypress events)
const LogicGameGrid = ({width, height} : LogicGameGridProps) : JSX.Element => {
    const gameState = useAppSelector(selectState);
    const dispatch = useAppDispatch();
    
    useKeyPress('ArrowDown', () => {
        console.log("Down Key Trigger");
        dispatch(moveDown());
    });
    useKeyPress('ArrowUp', () => {
        console.log("Up Key Trigger");
        dispatch(moveUp())
    });
    useKeyPress('ArrowLeft', () => {
        console.log("Left Key Trigger");
        dispatch(moveLeft());
    });
    useKeyPress('ArrowRight', () => {
        console.log("Right Key Trigger");
        dispatch(moveRight());
    });

    return <Fragment> 
            <GameGrid width={width} height={height} gameState={gameState}/>
        </Fragment>
}

const useKeyPress = (targetKey: string, callback: () => void) => {
    const [isKeyPressed, setKeyPressed] = useState(false);
    const [interval, setInterval] = useState(-1);

    //we only want this to be triggered once, so ignore the deps here
    useEffect(() => {
        //set a listener for the key being depressed (not literally).
        window.addEventListener('keydown', (event) => {
            if(event.key === targetKey)
                //we want to trigger the callback here immediately, to register the initial press action
                callback();
                setKeyPressed(true);
        });

        //set a listener for the key being released
        window.addEventListener('keyup', (event) => {
            if(event.key === targetKey)
                setKeyPressed(false);

                //we want to clear the interval here, to register the release action
                window.clearInterval(interval);
        });

        //set an interval so that while the key is held down, presses are being registered
        setInterval(window.setInterval(() => {
            if(isKeyPressed)
                callback();
        }, 200));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default LogicGameGrid;