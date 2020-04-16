import React from "react";
import * as Minesweeper from "./minesweeper";

class Tile extends React.Component  {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      this.props.updateGame(this.props.col, e.altKey)
    }

    render () {
      const klass = this.props.col.flagged ? "tile flagged" : !this.props.col.explored ? "tile unexplored" : this.props.col.explored && this.props.col.bombed ? "tile bombed" : "tile explored";
      
      return (
          <div 
          className={klass}
          onClick = {this.handleClick }
          >
              {this.props.col.flagged ? "🚩" : !this.props.col.explored ? "" : this.props.col.explored && this.props.col.bombed ? "💣" : this.props.col.adjacentBombCount()}</div>
          )
      }
};

export default Tile;