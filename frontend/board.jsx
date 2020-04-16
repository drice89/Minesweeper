import React from "react";
import * as Minesweeper from "./minesweeper";
import Tile from "./tile";


// class Board extends React.Component {
//   constructor(props) {
//      super(props)
//   }
// }

const Board = ({board, updateGame}) =>  {
  return(
  <div className ="center">
    <div className="board"> 
      {
        board.grid.map((row, r) => {
          return ( <div className="row" key={r} id={r}>
            {
              row.map((col, c) => <Tile 
                col = {col}
                updateGame={updateGame}
                key={((r*10)+c)*10} 
                />) 
            }
          </div> )
        })
      }
    </div>
  </div>
  )

};

export default Board;
