import { Move} from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";
import { SQUARE_CLICKED, IS_THERE_WINNER } from "../constants/constants";

export const initState = {
    History : [new Move(jsHelpers.genBoard(), [])],
    Turn : 0,
    XIsWinner : null 
}

export  function board(state = initState, action){
    // console.log('from the board-reducer', state);
    // console.log('the action is here', action);
     const { type, data } = action;
     switch(type){
        case SQUARE_CLICKED: {
            
                let [x,y] = data.square.Coordinate;
                let val = data.val;
                let latestMove = state.History[state.Turn]
                let clone = Object.assign({}, latestMove, { Board : latestMove.Board.slice() });
                clone.Board[x][y].Value = val;
                clone.Move = [x,y];
                clone.Board.Move = [x,y];

                let obj = Object.assign({}, state, { Turn : state.Turn+1, 
                                                     History: [ ...state.History, clone ] })
              return obj;
            }
        case IS_THERE_WINNER : {
            console.log(state);
            let obj = Object.assign({}, state, {XIsWinner : data });
            return obj;
        }
        default :
            return state;
    }
}