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
import { useState } from 'react';

function Tile({black, occupant, tileclickfn, i_index, j_index, active}) {
    const [occImage, setOccImage] = useState("");
    const index = i_index + "" + j_index;

    function getOccImage(){
        switch(occupant){
            case "wp":
                return w_p;
                break;
            case "wr":
                return w_r;
                break;
            case "wn":
                return w_n;
                break;
            case "wb":
                return w_b;
                break;
            case "wq":
                return w_q;
                break;
            case "wk":
                return w_k;
                break;
            case "bp":
                return b_p;
                break;
            case "br":
                return b_r;
                break;
            case "bn":
                return b_n;
                break;
            case "bb":
                return b_b;
                break;
            case "bq":
                return b_q;
                break;
            case "bk":
                return b_k;
                break;
            default:
                return "";
        }
    }

    return (
        <div onClick={(e) => {tileclickfn(i_index, j_index, e)}} className={["Tile", black ? "Black" : "", index == active ? "Active" : ""].join(' ')}>
            <img src={getOccImage()} />
        </div>
    );
}

export default Tile;