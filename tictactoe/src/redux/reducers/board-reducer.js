import { Move} from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";
import { SQUARE_CLICKED } from "../constants/constants";

export const initState = {
    History : [new Move(jsHelpers.genBoard(), [])],
    Turn : 0
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
                clone.Board.Move = [x,y];

                let obj = Object.assign({}, state, { Turn : state.Turn+1, 
                                                     History: [ ...state.History, clone ] })
              return obj;
            }
        default :
            return state;
    }
}