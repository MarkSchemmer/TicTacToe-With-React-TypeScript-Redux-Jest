import React from "react";
import "./HistoryMove.css";
import { genBoard } from "../../helpers/javaScriptMethods/jsHelpers";

interface IProps {
    Turn : number,
    Coordinates : Array<number> | null 
}

class HistoryMove extends React.Component<IProps> {
    constructor(props:any){
        
        super(props);
    }

    genButton = (text:string) => <button className="history-button">{text}</button>

    IsInitialTurn = () => {
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