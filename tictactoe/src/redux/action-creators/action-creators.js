import * as constants from "../constants/constants";

export function SquareClickedCreator (square, val ) {
    return {
        type : constants.SQUARE_CLICKED,
        data : { square, val } 
    }
}