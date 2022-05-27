import { Grid } from "@mui/material";
import { TileInfo } from "../store/slices/gameSlice";
import GameGridRow from "./GameGridRow";

//TODO: Move styling to emotion file or theme - Rodger, 7th May 2022

export interface GameGridProps {
    width: number,
    height: number,
    gameState: TileInfo[][]
}

const GameGrid = ({width, height, gameState} : GameGridProps) => {

    //TODO: Deprecate this - Rodger, 7th May 2022
    const generateRows = () : JSX.Element[] => {
        const res = [];

        for(let i = 0; i < height; i++)
            res.push(<GameGridRow key={`GameGridRow${i}`} 
            width={width} 
            height={height} 
            tiles={gameState[i]}/>);
        return res;
    }

    return <Grid container spacing={2} 
    justifyContent={"space-evenly"} 
    alignContent={"space-evenly"} sx={{
        backgroundColor: "#bbada0", 
        pr: 2, 
        pb: 2,
        borderRadius: 4}}>
        {generateRows().map(row => row)}
    </Grid>
}

export default GameGrid;