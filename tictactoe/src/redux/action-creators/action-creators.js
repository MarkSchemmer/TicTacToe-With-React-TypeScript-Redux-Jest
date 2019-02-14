import * as constants from "../constants/constants";

export function SquareClickedCreator (square, val ) {
    return {
        type : constants.SQUARE_CLICKED,
        data : { square, val } 
    }
}

export function IsThereWinnerCreator (number) {
    return {
        type : constants.IS_THERE_WINNER,
        data : number 
    }
}