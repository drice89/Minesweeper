import React from "react";
import * as Minesweeper from "./minesweeper";
import Board from "./board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 20)
    };
    this.updateGame = this.updateGame.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  updateGame(obj, alt){
    
    if (alt) {
      obj.toggleFlag();
    } else{
      obj.explore();
    }
    this.setState({board: this.state.board})
  }

  reset(){
    this.setState({ board: new Minesweeper.Board(10, 20)});
  }



  render() {
    return(
    <div className="main">
      <div className={ this.state.board.won() || this.state.board.lost() ? "modal" : "hidden" }>
        {this.state.board.won() ? "You Won!" : "You Lose!" }
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
      <Board board={this.state.board} updateGame={this.updateGame} />
    </div>
    );
  }


}

export default Game;