import React from "react";
import { Move } from "../../helpers/types/types";
import ComponentSquare from "../Square/Square";
import "./Board.css";
import * as actionCreators from "../../redux/action-creators/action-creators";

interface IProps {
  Move : Move 
}

class Board extends React.Component<IProps> {

    constructor(props:any){
        super(props);
    }

    handleSquareClick(id:number) {
        // Find the Square by Id
        // check if it has Value
        alert(id);

        actionCreators.SquareClickedCreator(id);

    }

    render(){
        const { Board } = this.props.Move;
        return (
            <div className="board">
                {Board.map( (row:any) => <div className="row"> 
                { row.map( (square:any) => <ComponentSquare 
                                                handleSquareClick={this.handleSquareClick} 
                                                square={square} /> )  } 
            </div> ) }
            </div>
        )
    }
}

export default Board 