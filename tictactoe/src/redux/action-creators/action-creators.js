import * as constants from "../constants/constants";

export function SquareClickedCreator (payload) {
    return {
        type : constants.SQUARE_CLICKED,
        payload : payload
    }
}