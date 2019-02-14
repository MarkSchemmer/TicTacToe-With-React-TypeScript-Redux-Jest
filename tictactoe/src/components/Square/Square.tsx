import React from "react";
import { Square } from "../../helpers/types/types";
import "./Square.css";


interface IProps {
    square : Square, 
    handleSquareClick : (Value : string | null, id : number) => void 
}

class ComponentSquare extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }

    render() {
     const { id, Value } = this.props.square;
     const { handleSquareClick } = this.props;
        return (
                <div onClick={() => handleSquareClick(Value, id) } className="square">
                        { Value }
                </div>
        );
    }
}

export default ComponentSquare