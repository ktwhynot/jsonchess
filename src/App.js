import logo from './logo.svg';
import './App.css';
import Grid from './Grid';
import PiecePalet from './PiecePalet';
import { useState, useEffect, useCallback } from 'react';

function App() {
    const [board, setBoard] = useState(Array(8).fill(Array(8).fill("")));
    const [activeTile, setActiveTile] = useState("");
    const [activePaletPiece, setActivePaletPiece] = useState("");
    const [inputVal, setInputVal] = useState("");
    const [multiPasting, setMultiPasting] = useState(false);

    const handleKeyUp = useCallback((e) => {
      console.log(e);
      if(e.key == 'Delete' && activeTile != ""){
        console.log(activeTile);
        const nextBoard = board.map(function(arr) {
          return arr.slice();
        });
        nextBoard[activeTile[0]][activeTile[1]] = "";
        setBoard(nextBoard);
        setActiveTile("");
      }else if(e.key == 'Escape'){
        if(activeTile != ""){
          setActiveTile("");
        }
        if(activePaletPiece != ""){
          setActivePaletPiece("");
        }
      }else if(e.key == "Shift" && multiPasting){
        setActivePaletPiece("");
        setMultiPasting(false);
      }
    }, [activeTile, board, activePaletPiece, multiPasting])

    useEffect(() => {
      window.addEventListener("keyup", handleKeyUp);
  
      return () => {
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [handleKeyUp]);

    function intToLetter(i){
      var returnme = 'x';
      switch(i){
        case 0:
          returnme = 'a';
          break;
        case 1:
          returnme = 'b';
          break;
        case 2:
          returnme = 'c';
          break;
        case 3:
          returnme = 'd';
          break;
        case 4:
          returnme = 'e';
          break;
        case 5:
          returnme = 'f';
          break;
        case 6:
          returnme = 'g';
          break;
        case 7:
          returnme = 'h';
      }
      return returnme;
    }

    function letterToInt(c){
      var returnme = -1;
      switch(c){
        case 'a':
          returnme = 0;
          break;
        case 'b':
          returnme = 1;
          break;
        case 'c':
          returnme = 2;
          break;
        case 'd':
          returnme = 3;
          break;
        case 'e':
          returnme = 4;
          break;
        case 'f':
          returnme = 5;
          break;
        case 'g':
          returnme = 6;
          break;
        case 'h':
          returnme = 7;
          break;
      }
      return returnme;
    }

    function posToIndex(pos){
      if(pos.length != 2){
        alert("Invalid Postion");
        return;
      }

      return (8 - parseInt(pos[1])).toString() + letterToInt(pos[0]);
    }

    function indexToPos(i, j){
      return intToLetter(j) + (8-i).toString();
    }

    function setArrayByPos(thearray, pos, val){
      var i = posToIndex(pos);
      thearray[i[0]][i[1]] = val;
    }

    function isSameFaction(a, b){
      return a[0] == b[0] ? true : false;
    }

    function testInit(){
      const nextBoard = board.map(function(arr) {
        return arr.slice();
      });
      for(var i = 0; i < nextBoard.length; i++){
        for(var j = 0; j < nextBoard[i].length; j++){
          nextBoard[i][j] = intToLetter(j) + (8-i).toString() + "| Index: " + i.toString() + j.toString();
        }
      }
      setBoard(nextBoard);
    }

    function clearBoard(){
      const nextBoard = board.map(function(arr) {
        return arr.slice();
      });
      // Clear
      for(var i = 0; i < nextBoard.length; i++){
        for(var j = 0; j < nextBoard[i].length; j++){
          nextBoard[i][j] = "";
        }
      }
      setBoard(nextBoard);
    }

    function initPieces(){
      const nextBoard = board.map(function(arr) {
        return arr.slice();
      });
      // Clear
      for(var i = 0; i < nextBoard.length; i++){
        for(var j = 0; j < nextBoard[i].length; j++){
          nextBoard[i][j] = "";
        }
      }
      // White
      setArrayByPos(nextBoard, "a2", "wp");
      setArrayByPos(nextBoard, "b2", "wp");
      setArrayByPos(nextBoard, "c2", "wp");
      setArrayByPos(nextBoard, "d2", "wp");
      setArrayByPos(nextBoard, "e2", "wp");
      setArrayByPos(nextBoard, "f2", "wp");
      setArrayByPos(nextBoard, "g2", "wp");
      setArrayByPos(nextBoard, "h2", "wp");
      setArrayByPos(nextBoard, "a1", "wr");
      setArrayByPos(nextBoard, "h1", "wr");
      setArrayByPos(nextBoard, "b1", "wn");
      setArrayByPos(nextBoard, "g1", "wn");
      setArrayByPos(nextBoard, "c1", "wb");
      setArrayByPos(nextBoard, "f1", "wb");
      setArrayByPos(nextBoard, "d1", "wq");
      setArrayByPos(nextBoard, "e1", "wk");
      // Black
      setArrayByPos(nextBoard, "a7", "bp");
      setArrayByPos(nextBoard, "b7", "bp");
      setArrayByPos(nextBoard, "c7", "bp");
      setArrayByPos(nextBoard, "d7", "bp");
      setArrayByPos(nextBoard, "e7", "bp");
      setArrayByPos(nextBoard, "f7", "bp");
      setArrayByPos(nextBoard, "g7", "bp");
      setArrayByPos(nextBoard, "h7", "bp");
      setArrayByPos(nextBoard, "a8", "br");
      setArrayByPos(nextBoard, "h8", "br");
      setArrayByPos(nextBoard, "b8", "bn");
      setArrayByPos(nextBoard, "g8", "bn");
      setArrayByPos(nextBoard, "c8", "bb");
      setArrayByPos(nextBoard, "f8", "bb");
      setArrayByPos(nextBoard, "d8", "bk");
      setArrayByPos(nextBoard, "e8", "bq");

      setBoard(nextBoard);
    }

    function getBoardJSON(){
      var boardobject = {};
      for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
          if(board[i][j] != ""){
            boardobject[indexToPos(i, j)] = board[i][j];
          }
        }
      }
      //console.log(boardobject);
      //console.log(JSON.stringify(boardobject));
      setInputVal(JSON.stringify(boardobject));
    }

    function setBoardJSON(){
      try{
        var boardobject = JSON.parse(inputVal);

        const nextBoard = board.map(function(arr) {
          return arr.slice();
        });
        // Clear
        for(var i = 0; i < nextBoard.length; i++){
          for(var j = 0; j < nextBoard[i].length; j++){
            nextBoard[i][j] = "";
          }
        }
        // Set pieces
        for(var key in boardobject){
          var val = boardobject[key];
          setArrayByPos(nextBoard, key, val);
        }

        setBoard(nextBoard);
      } catch(e){
        console.log(e);
        alert("Error importing board state");
      }
    }

    function handlePaletClick(piecename){
      setActiveTile("");

      if(activePaletPiece == piecename){
        setActivePaletPiece("");
        return;
      }
      setActivePaletPiece(piecename);
    }

    function handleTileClick(i, j, e){
      e.preventDefault();
      //console.log(i.toString() + j.toString());
      //console.log(board[i][j]);

      if(activePaletPiece != ""){
        const nextBoard = board.map(function(arr) {
          return arr.slice();
        });
        nextBoard[i][j] = activePaletPiece;
        setBoard(nextBoard);
        if(!e.shiftKey){
          setActivePaletPiece("");
        }else{
          setMultiPasting(true);
        }
        return;
      }

      if(activeTile == "" && board[i][j] != ""){
        setActiveTile(i.toString() + j.toString());
      }
      else if(activeTile != ""){
        if(activeTile == i.toString() + j.toString()){
          setActiveTile("");
        }else if(board[i][j] == "" || !isSameFaction(board[i][j], board[activeTile[0]][activeTile[1]])){
          // move piece
          board[i][j] = board[activeTile[0]][activeTile[1]];
          board[activeTile[0]][activeTile[1]] = "";
          setActiveTile("");
        }else{
          setActiveTile("");
        }
      }
    }

    function handleInputFocus(e){
      e.target.select();
    }

    return (
      <div className="App">
        <div className='Board'>
          <Grid boardState={board} tilefn={handleTileClick} activetile={activeTile} />
          <PiecePalet setFn={handlePaletClick} curval={activePaletPiece} />
        </div>
        <div>
          <div className='Buttons'>
            <button onClick={initPieces}>Initialize Board</button>
            <button onClick={clearBoard}>Clear Board</button>
          </div>
          <textarea onClick={handleInputFocus} type='textarea' rows={8} cols={70} value={inputVal} onChange={(e) => setInputVal(e.target.value)}></textarea>
          <div className='Buttons'>
            <button onClick={getBoardJSON}>Export</button>
            <button onClick={setBoardJSON}>Import</button>
          </div>
          <div className='Instructions'>
            <p>Click a piece to select it. Click a tile while a piece is selected to move it</p>
            <p>Hold shift while placing pieces to place multiple</p>
            <p>Hit DELETE while a piece is selected to remove it</p>
          </div>
        </div>
      </div>
    );
}

export default App;
