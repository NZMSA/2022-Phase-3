export interface TileProps {
    currentValue: number,
}

const colours = [
    "#faf8ef",
    "#eee4da",
    "#eee1c9",
    "#f2b179",
    "#f59563",
    "#f67c5f",
    "#f65e3b"
]

const Tile = ({currentValue} : TileProps) : JSX.Element => {
    //TODO: Fit the tile text font to the correct font family - Rodger, 21th May 2022
        return <div style={{display: 'grid', placeContent: 'center', aspectRatio: '1', borderRadius: 4, backgroundColor: colours[currentValue]}}>
            {currentValue > 0 ? <p style={{fontSize: '54px'}}>{Math.pow(2, currentValue)}</p> : null}
        </div>
}

export default Tile;