import { combineReducers } from "redux";
import { board } from "../reducers/board-reducer";
import { SquareReducer } from "../reducers/square-reducer";

const rootReducer = combineReducers({
    board,
    SquareReducer
})

export default rootReducer