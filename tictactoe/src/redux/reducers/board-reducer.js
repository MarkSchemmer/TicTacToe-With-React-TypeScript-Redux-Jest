import { Move } from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";
import { SQUARE_CLICKED, IS_THERE_WINNER, HANDLE_RESTART, HIGHlIGHT_WINNING_SQUARES, CHANGE_TURN, HIGHLIGHT_BUTTON} from "../constants/constants";

export const initState = {
    board : {
    History : [new Move(jsHelpers.genBoard(), [])],
    Turn : 0,
    XIsWinner : null, 
    winningSquares : null,
    highlightedButton : 0
    } 
}

export  function board(state = initState, action){
     const { type, data } = action;
     switch(type){
        case SQUARE_CLICKED : { 
                // state = JSON.parse(JSON.stringify(state));
                let [x,y] = data.square.Coordinate;
                let val = data.val;
                let _hist = JSON.parse(JSON.stringify(state));

                _hist.History = _hist.History.slice(0, _hist.Turn+1);

                let latestMove = JSON.parse(JSON.stringify(_hist.History[_hist.Turn]));
                let clone =  Object.assign({}, latestMove);
                clone.Board[x][y].Value = val;
                clone.Move = [x,y];
                clone.Board.Move = [x,y];
                let obj = JSON.parse(JSON.stringify(Object.assign({}, _hist, { Turn : _hist.Turn+1, highlightedButton : _hist.highlightedButton+1,
                                                     History: [ ..._hist.History, clone ] })));
              return obj;
        }
        case IS_THERE_WINNER : {
            let obj = JSON.parse(JSON.stringify(Object.assign({}, state, {XIsWinner : data })));
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
            let winningBoard = JSON.parse(JSON.stringify(state.History[state.Turn].Board));
            let winningSquares = jsHelpers.getWinningSquares(winningBoard);
            winningSquares.forEach(coor => {
                const [x,y] = coor;
                winningBoard[x][y].shouldBeHighlighted = true;
            });
            let obj = JSON.parse(JSON.stringify(Object.assign({}, state, { History : state.History.slice() })));
            obj.History[state.Turn].Board = winningBoard;

            return obj;
        }
        case CHANGE_TURN : {
            let obj = Object.assign({}, JSON.parse(JSON.stringify(state)), { Turn : data });
            return obj;
        }
        case HIGHLIGHT_BUTTON : {
            return Object.assign({}, JSON.parse(JSON.stringify(state)), { highlightedButton : data });
        }
        default :
            return state;
    }
}