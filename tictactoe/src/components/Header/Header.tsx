import React from "react";
import { Move } from "../../helpers/types/types";

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

            </div>
        );
    }
}

export default Header;