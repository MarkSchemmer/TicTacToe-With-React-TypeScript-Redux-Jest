import React from "react";
import { Square } from "../../helpers/types/types";
import "./Square.css";


interface IProps {
    square : Square, 
    handleSquareClick : (square:Square) => void 
}

class ComponentSquare extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }

    render() {
     const { Value } = this.props.square;
     const { handleSquareClick } = this.props;
        return (
                <div onClick={() => handleSquareClick(this.props.square) } className="square">
                      <span className="value"> { Value }</span>
                </div>
        );
    }
}

export default ComponentSquare