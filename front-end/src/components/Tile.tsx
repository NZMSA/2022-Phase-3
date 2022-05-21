export interface TileProps {
    currentValue: number,
}

const colours = [
    "#776e65",
    "#eee4da",
    "#eee1c9",
    "#f2b179",
    "#f59563",
    "#f67c5f",
    "#f65e3b"
]

const Tile = ({currentValue} : TileProps) : JSX.Element => {
        return <div style={{display: 'grid', placeContent: 'center', aspectRatio: '1', borderRadius: 4, backgroundColor: colours[currentValue]}}>
            {currentValue > 0 ? <p>{Math.pow(2, currentValue)}</p> : null}
        </div>
}

export default Tile;