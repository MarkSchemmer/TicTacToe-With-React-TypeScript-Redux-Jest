import {Square, Move} from "../../helpers/types/types";
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
                let newBoard = Object.assign({}, state.History, {})
              return Object.assign({}, state, { Turn : state.Turn+1, History: [...state.History, new Move(jsHelpers.genBoard())]})
            }
        default :
            return state;
    }
}