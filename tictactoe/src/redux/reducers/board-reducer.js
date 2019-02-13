import * as types from "../../helpers/types/types";
import * as jsHelpers from "../../helpers/javaScriptMethods/jsHelpers";


export const initState = {
    History : [new types.Move(jsHelpers.genBoard(), [])],
    Turn : 0
}

export  function board(state = initState, action){
    switch(action.type){
        default :
            return state 
    }
}