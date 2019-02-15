import { combineReducers } from "redux";
import { board } from "../reducers/board-reducer";

const rootReducer = combineReducers({
    board
})

export default rootReducer