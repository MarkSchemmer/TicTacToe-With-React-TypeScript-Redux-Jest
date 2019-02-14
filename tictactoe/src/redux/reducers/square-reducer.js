import * as types from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";

import { SQUARE_CLICKED } from "../constants/constants";

export const initState = {
    Value : null,
}


export function SquareReducer(state = initState, { type, data }){
    console.log("type from SquareReducer: ", type);
    console.log("Payload from SquareReducer: ", data);
    console.log("state from SquareReducer: ", state);
    switch(type){
        case SQUARE_CLICKED : {

            return {
                Value : data.Value, 
            }
        }
        default : 
            return state;
    }
}