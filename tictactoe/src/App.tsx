import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import { Move } from './helpers/types/types';
import Board from "./components/Board/Board";

interface IProps {
  Turn : number, 
  History : Array<Move>
}

class App extends Component<IProps> {

  constructor(props:any){
    super(props);
  }


  render() {
    console.log(this.props);
    const { History, Turn } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.props.Turn}</h1>
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
  const { board, SquareReducer } = state;
  return {
      Turn : board.Turn, 
      History : board.History 
  }
}

function mapToProps(props:any){
  return {
    Turn : 0
  }
}

export default connect(mapStateToProps)(App);



