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

export function restartCreator () {
    return {
        type : constants.HANDLE_RESTART,
        data : null 
    }
}


export function highlightWinningSquaresCreator(data) {
    return {
        type : constants.HIGHlIGHT_WINNING_SQUARES,
        data : data
    }
}

export function changeTurnCreator (data) {
    return {
        type : constants.CHANGE_TURN, 
        data : data 
    }
}

export function highlightButtonCreator (data) {
    return {
        type : constants.HIGHLIGHT_BUTTON, 
        data : data 
    }
}