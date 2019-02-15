import * as jsHelpers from "../javaScriptMethods/jsHelpers";


interface ISquare {
    id : number;
    Value : string | null;
    Coordinate : Array<number>;
}

interface IMove {
    Move : Array<number> | null;
    Board : Array<Array<Square>>
}

interface IState {
    Turn : number;
    History : Array<Move>;
}


export class Square implements ISquare {
    public Value : string | null;
    public Coordinate : Array<number>;
    public id : number;
    public shouldBeHighlighted : boolean | null;
    constructor(x:number, y:number, id:number) {
        this.Value = null; 
        this.Coordinate  = [x,y];
        this.id = id;
        this.shouldBeHighlighted = false;
    }
}

export class Move implements IMove {
    public Move : Array<number> | null;
    public Board : Array<Array<Square>>;
    constructor(Board:Array<Array<Square>>, Move:Array<number>=[]){
        this.Board = Board;
        this.Move = Move;
    }
}

export class State implements IState {
    public History : Array<Move>
    public Turn : number 
    constructor(){
        this.Turn = 0; 
        this.History = [new Move(jsHelpers.genBoard())];
    }
}

