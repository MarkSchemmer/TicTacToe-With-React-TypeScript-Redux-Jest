import React from "react";
import { Move, Square } from "../../helpers/types/types";
import ComponentSquare from "../Square/Square";
import "./Board.css";
import { SquareClickedCreator, IsThereWinnerCreator, highlightWinningSquaresCreator } from "../../redux/action-creators/action-creators";
import store from "../../redux/store/genStore";
import { IsWinner } from "../../helpers/javaScriptMethods/jsHelpers";

interface IProps {
  Move : Move,
  Turn : number,
  XIsWinner : number | null 
}

class Board extends React.Component<IProps> {

    constructor(props:any) {
        super(props);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    handleSquareClick(square : Square) {
        if(square.Value===null && [4, null].includes(this.props.XIsWinner)){
            let val = this.props.Turn % 2 == 0 ? 'X' : 'O';
            store.dispatch(SquareClickedCreator(square, val));
            let turn = store.getState().board.Turn 
            let latestBoard = store.getState().board.History[turn].Board;
            let _isWinner = IsWinner(latestBoard);
            if(_isWinner===1 || _isWinner===2){
                store.dispatch(IsThereWinnerCreator(_isWinner));
                store.dispatch(highlightWinningSquaresCreator(true));
            } else {
                store.dispatch(IsThereWinnerCreator(_isWinner));
            }  
        }
    }

    render() {
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