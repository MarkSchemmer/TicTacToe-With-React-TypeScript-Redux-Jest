import { Move } from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";
import { SQUARE_CLICKED, IS_THERE_WINNER, HANDLE_RESTART, HIGHlIGHT_WINNING_SQUARES } from "../constants/constants";

export const initState = {
    board : {
    History : [new Move(jsHelpers.genBoard(), [])],
    Turn : 0,
    XIsWinner : null, 
    winningSquares : null
    } 
}

export  function board(state = initState, action){
     const { type, data } = action;
     switch(type){
        case SQUARE_CLICKED : { 
                let [x,y] = data.square.Coordinate;
                let val = data.val;
                let latestMove = state.History[state.Turn];
                let clone =  Object.assign({}, latestMove, { Board : latestMove.Board.slice() });
                clone.Board[x][y].Value = val;
                clone.Move = [x,y];
                clone.Board.Move = [x,y];
                let obj = JSON.parse(JSON.stringify(Object.assign({}, state, { Turn : state.Turn+1, 
                                                     History: [ ...state.History, clone ] })));
              return obj;
        }
        case IS_THERE_WINNER : {
            let obj = Object.assign({}, state, {XIsWinner : data });
            return obj;
        }
        case HANDLE_RESTART : {
            return {
                History : [new Move(jsHelpers.genBoard(), [])],
                Turn : 0,
                XIsWinner : null
            }
        }

        case HIGHlIGHT_WINNING_SQUARES : {
            let winningBoard = state.History[state.Turn].Board;
            let winningSquares = jsHelpers.getWinningSquares(winningBoard);
            winningSquares.forEach(coor => {
                const [x,y] = coor;
                winningBoard[x][y].shouldBeHighlighted = true;
            });
            let obj = Object.assign({}, state, { History : state.History.slice() });
            obj.History[state.Turn].Board = winningBoard;

            return obj;
        }
        default :
            return state;
    }
}