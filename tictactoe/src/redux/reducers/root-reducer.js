import { combineReducers } from "redux";
import * as boardReducer from "../reducers/board-reducer";
let board = boardReducer.board;
const rootReducer = combineReducers({
    board,
})

export default rootReducer