import * as types from "../types/types";


export const OPTIONS = {
    XWIN : 1,
    XLOSE : 2,
    TIE : 3, 
    MOREMOVES : 4
}


let threeInRow = (chr, [a,b,c], nb) =>  nb[a] === nb[b] && nb[b] === nb[c] && nb[a] === chr

export function IsWinner (board){

    let nb = board
    .reduce((acc,cur) => acc.concat(cur), [])
    .map( x => x.Value )


    let waysToWin = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ]

    for(let i = 0; i < waysToWin.length; i++) {

        if(threeInRow('X', waysToWin[i], nb))
            return OPTIONS.XWIN
        else if (threeInRow('O', waysToWin[i], nb))
            return OPTIONS.XLOSE
    }

    return nb.every(x => x !== null ) ? OPTIONS.TIE : OPTIONS.MOREMOVES
}


export function getWinningSquares (board) {
    let nb = board
    .reduce((acc,cur) => acc.concat(cur), [])
    .map( x => x )

    let _nb = board
    .reduce((acc,cur) => acc.concat(cur), [])
    .map( x => x.Value )

    let waysToWin = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ]

    for(let i = 0; i < waysToWin.length; i++) {
        

        let [a,b,c] = waysToWin[i]


        if(threeInRow('X', waysToWin[i], _nb)){
            return [a,b,c].map(x => nb[x].Coordinate)
        }
        else if (threeInRow('O', waysToWin[i], _nb)){
            return [a,b,c].map(x => nb[x].Coordinate)
        }
           
    }

    return []
}


export function genBoard () {
    let id = 0
    let square = types.Square
    let board = [...Array(3).keys()].map((val, x) => {
        return [...Array(3).keys()].map((innerVal, y) => {
            return new square(x,y, id++);
        })
    })


    return board 
}