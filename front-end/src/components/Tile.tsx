import { Grow, Slide } from "@mui/material";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { executeStateUpdate, MoveType } from "../store/slices/gameSlice";

export interface TileProps {
  currentValue: number;
}

const colours = [
  "#eee4da59",
  "#eee4da",
  "#eee1c9",
  "#f2b179",
  "#f59563",
  "#f67c5f",
  "#f65e3b",
  "#edcf72",
  "#edcc61",
  "#edc850",
  "#edc53f",
  "#edc22e",
  "#3c3a32",
];

const Tile = ({ currentValue }: TileProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const slideRef = useRef(null);
    const direction = useAppSelector(state => state.game.moveInProgress);
    const playAnimation = useAppSelector(state => state.game.playAnimation);

    let temp : any = undefined; 
    switch (direction) {
        case MoveType.UP:
            temp = "down";
            break;
        case MoveType.DOWN:
            temp = "up";
            break;
        case MoveType.LEFT:
            temp = "right";
            break;
        case MoveType.RIGHT:
            temp = "left";
            break;
    };

  return (
    <div ref={slideRef} style={{
        display: "grid",
        aspectRatio: "1",
        borderRadius: 4,
        backgroundColor: '#eee4da59',
      }}>
      <Grow addEndListener={() => new Promise(r => setTimeout(r, 200)).then(() => dispatch(executeStateUpdate()))} in={!playAnimation} mountOnEnter unmountOnExit>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            borderRadius: 4,
            backgroundColor: colours[currentValue],
          }}
        >
          {currentValue > 0 ? (
            <p
              style={{
                fontSize: "55px",
                fontWeight: "700",
                color: currentValue > 2 ? "#FFF" : "#776e65",
                margin: 0,
              }}
            >
              {Math.pow(2, currentValue)}
            </p>
          ) : null}
        </div>
      </Grow>
    </div>
  );
};

export default Tile;
