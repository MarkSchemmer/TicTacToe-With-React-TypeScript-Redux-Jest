import React from "react";
import "./HistoryMove.css";

interface IProps {

}

class HistoryMove extends React.Component<IProps> {
    constructor(props:any){
        
        super(props);
    }



    render () {
        return (
            <button className="history-button">History</button>
        );
    }
}


export default HistoryMove