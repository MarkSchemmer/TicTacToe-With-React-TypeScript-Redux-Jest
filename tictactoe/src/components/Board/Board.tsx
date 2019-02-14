import React from "react";
import { Move, Square } from "../../helpers/types/types";
import ComponentSquare from "../Square/Square";
import "./Board.css";
import { SquareClickedCreator, IsThereWinnerCreator } from "../../redux/action-creators/action-creators";
import store from "../../redux/store/genStore";
import { IsWinner } from "../../helpers/javaScriptMethods/jsHelpers";

interface IProps {
  Move : Move,
  Turn : number,
  XIsWinner : number | null 
}

class Board extends React.Component<IProps> {

    constructor(props:any){
        super(props);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    handleSquareClick(square : Square) {
        // Find the Square by Id
        // check if it has Value
        // alert(id);
        // must pass below actionCreator into action...
        let IsTieWinLose = () => this.props.XIsWinner === null || this.props.XIsWinner === 4;
        if(square.Value===null && IsTieWinLose()){
            let val = this.props.Turn % 2 == 0 ? 'X' : 'O';
            store.dispatch(SquareClickedCreator(square, val));
            if(IsTieWinLose) store.dispatch(IsThereWinnerCreator(IsWinner(this.props.Move.Board)))
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