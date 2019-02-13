import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/root-reducer";
import * as state from "../reducers/board-reducer";
const store = createStore(
    rootReducer,
    state.initState,
    applyMiddleware(logger)
);

export default store;