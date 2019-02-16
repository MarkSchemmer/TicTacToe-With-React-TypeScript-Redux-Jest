import React from "react";
import HistoryMove from "../HistoryMove/HistoryMove";
import { Move } from "../../helpers/types/types";
import "./Header.css";

interface IProps {
    History : Array<Move>
}

class Header extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }
    render () {
        return (
            <div className="header">
                {this.props.History.map((x, idx) => <HistoryMove key={idx} /> )}
            </div>
        );
    }
}

export default Header;