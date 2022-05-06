import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";

export interface GridProps {
    width: number,
    height: number
}

const GameGrid = ({width, height} : GridProps) => {
    const generateRows = () : JSX.Element[] => {
        const res = [];

        for(let i = 0; i < height; i++)
            res.push(<GameGridRow key={`GameGridRow${i}`} width={width} height={height}/>);

        return res;
    }

    return <Grid container spacing={2} justifyContent={"space-evenly"} alignContent={"space-evenly"} sx={{
        backgroundColor: "#bbada0", 
        pr: 2, 
        pb: 2,
        borderRadius: 4}}>
        {generateRows().map(row => row)}
    </Grid>
}

interface GameGridRowProps {
    width: number,
    height: number
};

const GameGridRow = ({width, height} : GameGridRowProps) => {
    let tileWidth = 12 / width;

    const generateTiles = () : JSX.Element[] => {
        const res = [];

        for(let i = 0; i < width; i++) 
        //TODO: New up tile in here - Rodger, 6th May 2022
            res.push(<Grid item key={`GameGridTile${height} ${i}`} md={tileWidth} justifyContent={"space-evenly"} alignItems={"stretch"}>
                <Box sx={{backgroundColor: "#000", aspectRatio: '1', borderRadius: 4}}/>
            </Grid>);

        return res;
    }

    return <Grid container item spacing={2} justifyContent={"space-evenly"} alignContent={"space-evenly"} md={12}>
        {generateTiles().map(tile => tile)}
    </Grid>
}

export default GameGrid;