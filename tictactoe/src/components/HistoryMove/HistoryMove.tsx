import React from "react";
import "./HistoryMove.css";
import { genBoard } from "../../helpers/javaScriptMethods/jsHelpers";
import store from "../../redux/store/genStore";
import { changeTurnCreator, highlightButtonCreator } from "../../redux/action-creators/action-creators";

interface IProps {
    Turn : number,
    Coordinates : Array<number> | null 
}

class HistoryMove extends React.Component<IProps> {
    constructor(props:any){    
        super(props);
    }

    handleButtonClick = () => {
        store.dispatch(changeTurnCreator(this.props.Turn));
        store.dispatch(highlightButtonCreator(this.props.Turn));
    }

    handleClickOffButton = () => {
        store.dispatch(highlightButtonCreator(null));
    }

    genButton = (text:string) => <button 
    className={"history-button" + (store.getState().board.highlightedButton===this.props.Turn ? " bold-button" : "" )} onClick={() => this.handleButtonClick()}>{text}</button>

    IsInitialTurn = () => {
        console.log(store.getState().board);
        console.log(this.props.Turn === store.getState().board.highlightedButton);
        if(this.props.Turn === 0){
            return this.genButton("Game Start");
        } else {
            
           let [x,y] = this.props.Coordinates ? this.props.Coordinates : [0,0];
           let buttonOutPut = `Move: ${this.props.Turn} Coordinates: (${x}, ${y})`;
           return this.genButton(buttonOutPut);
        }
    }



    render () {
        return (
            <React.Fragment>
                { this.IsInitialTurn() }
            </React.Fragment>
        );
    }
}


export default HistoryMove