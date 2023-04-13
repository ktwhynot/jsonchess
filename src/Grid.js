import Tile from "./Tile";

function Grid({boardState, tilefn, activetile}) {

    return (
        <div className="Grid">
            {boardState.map((row, i) => (
                <div key={"r" + i.toString()} className="GridRow">
                    <div className="gridRulerY Ruler">{8 - i}</div>
                    {row.map((tile, j) => (
                        <Tile active={activetile} tileclickfn={tilefn} i_index={i} j_index={j} key={i.toString() + j.toString()} occupant={tile} black={(i+j) % 2 == 0 ? true : false} />
                    ))}
                </div>
            ))}
            <div className="GridRow BottomRuler Ruler">
                <div className="gridRulerX">A</div>
                <div className="gridRulerX">B</div>
                <div className="gridRulerX">C</div>
                <div className="gridRulerX">D</div>
                <div className="gridRulerX">E</div>
                <div className="gridRulerX">F</div>
                <div className="gridRulerX">G</div>
                <div className="gridRulerX">H</div>
            </div>
        </div>
    );
}

export default Grid;