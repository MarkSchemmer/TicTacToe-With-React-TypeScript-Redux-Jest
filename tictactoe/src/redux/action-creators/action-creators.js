import * as constants from "../constants/constants";

export function SquareClickedCreator (val, id) {
    return {
        type : constants.SQUARE_CLICKED,
        data : { val, id }
    }
}