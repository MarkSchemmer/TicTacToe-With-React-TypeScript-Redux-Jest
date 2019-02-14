import React from "react";
import { Move } from "../../helpers/types/types";
import ComponentSquare from "../Square/Square";
import "./Board.css";
import { SquareClickedCreator } from "../../redux/action-creators/action-creators";
import store from "../../redux/store/genStore";

interface IProps {
  Move : Move 
}

class Board extends React.Component<IProps> {

    constructor(props:any){
        super(props);
    }

    handleSquareClick(Value:string | null, id : number) {
        // Find the Square by Id
        // check if it has Value
        // alert(id);
        // must pass below actionCreator into action...
        if(Value===null){
            store.dispatch(SquareClickedCreator(Value, id));
        }
            
    }

    render(){
        const { Board } = this.props.Move;
        return (
            <div className="board">
                {Board.map( (row:any) => <div className="row" key={Date.now()*Math.random()*100}> 
                { row.map( (square:any) => <ComponentSquare 
                                                key={square.id}
                                                handleSquareClick={this.handleSquareClick} 
                                                square={square} /> )  } 
            </div> ) }
            </div>
        )
    }
}

export default Board 