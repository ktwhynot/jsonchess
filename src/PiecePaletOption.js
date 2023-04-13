function PiecePaletOption({pieceName, pieceImg, setPieceFn, curPiece}) {

    return (
        <div onClick={(e) => {setPieceFn(pieceName)}} className={["Tile", pieceName == curPiece ? "Active" : ""].join(' ')}>
             <img src={pieceImg} />
        </div>
    );
}

export default PiecePaletOption;