import { Grid } from "@mui/material";
import { TileInfo } from "../store/slices/gameSlice";
import Tile from "./Tile";


export interface GameGridRowProps {
    width: number,
    height: number,
    tiles: TileInfo[]
};

const GameGridRow = ({width, height, tiles} : GameGridRowProps) => {
    let tileWidth = 12 / width;

    //TODO: Replace with Kenny's Tile IMPL
    const generateTiles = () : JSX.Element[] => {
        const res = [];

        for(let i = 0; i < width; i++) 
            res.push(<Grid item key={`GameGridTile${height} ${i}`} md={tileWidth} justifyContent={"space-evenly"} alignItems={"stretch"}>
                <Tile currentValue={tiles[i].value}/>
            </Grid>);

        return res;
    }

    return <Grid container item spacing={2} justifyContent={"space-evenly"} alignContent={"space-evenly"} md={12}>
        {generateTiles().map(tile => tile)}
    </Grid>
}

export default GameGridRow;