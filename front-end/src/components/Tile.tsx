export interface TileProps {
    currentValue: number,
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
    "#3c3a32"
]

const Tile = ({currentValue} : TileProps) : JSX.Element => {
    //TODO: Fit the tile text font to the correct font family - Rodger, 21th May 2022
        return <div style={{display: 'grid', placeContent: 'center', aspectRatio: '1', borderRadius: 4, backgroundColor: colours[currentValue]}}>
            {currentValue > 0 ? <p style={{fontSize: '55px', fontWeight: '700', color: currentValue > 2 ? '#FFF' : '#776e65', margin: 0}}>{Math.pow(2, currentValue)}</p> : null}
        </div>
}

export default Tile;