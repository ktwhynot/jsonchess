import w_p from './images/pieces/Chess_plt45.svg';
import w_r from './images/pieces/Chess_rlt45.svg';
import w_n from './images/pieces/Chess_nlt45.svg';
import w_b from './images/pieces/Chess_blt45.svg';
import w_q from './images/pieces/Chess_qlt45.svg';
import w_k from './images/pieces/Chess_klt45.svg';
import b_p from './images/pieces/Chess_pdt45.svg';
import b_r from './images/pieces/Chess_rdt45.svg';
import b_n from './images/pieces/Chess_ndt45.svg';
import b_b from './images/pieces/Chess_bdt45.svg';
import b_q from './images/pieces/Chess_qdt45.svg';
import b_k from './images/pieces/Chess_kdt45.svg';
import PiecePaletOption from './PiecePaletOption';

function PiecePalet({curval, setFn}) {

    return (
        <div className='Palet'>
            <div>Pieces</div>
            <div className='PaletCol'>
                <PiecePaletOption pieceName={"wp"} pieceImg={w_p} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"wr"} pieceImg={w_r} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"wn"} pieceImg={w_n} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"wb"} pieceImg={w_b} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"wq"} pieceImg={w_q} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"wk"} pieceImg={w_k} setPieceFn={setFn} curPiece={curval} />
            </div>
            <div className='PaletCol'>
                <PiecePaletOption pieceName={"bp"} pieceImg={b_p} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"br"} pieceImg={b_r} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"bn"} pieceImg={b_n} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"bb"} pieceImg={b_b} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"bq"} pieceImg={b_q} setPieceFn={setFn} curPiece={curval} />
                <PiecePaletOption pieceName={"bk"} pieceImg={b_k} setPieceFn={setFn} curPiece={curval} />
            </div>
        </div>
    );
}

export default PiecePalet;