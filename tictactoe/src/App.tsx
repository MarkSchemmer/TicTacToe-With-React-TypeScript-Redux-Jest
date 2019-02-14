import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import { Move } from './helpers/types/types';
import Board from "./components/Board/Board";

interface IProps {
  Turn : number, 
  History : Array<Move>,
  XIsWinner : boolean | null 
}

class App extends Component<IProps> {

  constructor(props:any){
    super(props);
  }


  genWhosTurnMessage = () => {
    return 'Player : ' +  (this.props.Turn % 2 == 0 ? 'X' : 'O');
  }

  IsThereAWinner = () => {
    
  }


  render() {
    const { History, Turn } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="board-title turn">{this.genWhosTurnMessage()}</h1>
        <h1 className="board-title move">Move:{this.props.Turn}</h1>
        <div className="cont">
              {/* <Header />  */}
              <Board Move={History[Turn]} Turn={Turn} /> 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:any, props:any) {
  console.log('from mapStateToProps: ', state);
  const { board } = state;
  return {
      Turn : board.Turn, 
      History : board.History,
      XIsWinner : board.XIsWinner
  }
}

/**
 * Need to know how mapToProps functions,
 *  and what is the purpose and how I will utilize for this project.
 * 
 */

function mapToProps(props:any){
  return {
  }
}

export default connect(mapStateToProps)(App);



