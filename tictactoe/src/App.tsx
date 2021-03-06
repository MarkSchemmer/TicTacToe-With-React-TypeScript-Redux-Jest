import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import { Move } from './helpers/types/types';
import Board from "./components/Board/Board";
import store from './redux/store/genStore';
import { restartCreator, changeTurnCreator, highlightButtonCreator } from "./redux/action-creators/action-creators";
import Header from './components/Header/Header';

interface IProps {
  Turn : number, 
  History : Array<Move>,
  XIsWinner : number | null, 
  winningSquares : Array<Array<number>> | null, 
  highlightedButton : number | null 
}

class App extends Component<IProps> {

  constructor(props:any){
    super(props);
  }


  canShowButton = (opt:number | null ) => {
    if(opt !== null){
      return [1,2,3].includes(opt);
    } else {
      return false;
    }
  }

  handleRestartClick = () => {
    store.dispatch(restartCreator());
  }

  handleSlowReplayMode = (start:number=0) => {
    if(start >= store.getState().board.History.length) return 
    setTimeout(() => {
      store.dispatch(changeTurnCreator(start));
      store.dispatch(highlightButtonCreator(start));
      this.handleSlowReplayMode(start+1);
    }, 900);
  }

  genWhosTurnMessage = (option:number | null ) => {
     const opton1 = "Player : " +  (this.props.Turn % 2 == 0 ? "X" : "O");
     const playerX = "Player X Wins!";
     const playerO = "Player O Wins!";
     const Tie = "Tie Game!";
     switch(option){
       case 1 : {
         return playerX;
       }
       case 2 : {
         return playerO;
       }
       case 3 : {
         return Tie;
       }
       default : 
          return opton1;
     }
  }

  renderButton = () => {   
      return ( 
          <React.Fragment>
            <button onClick={() => this.handleRestartClick() } className="play-again">Play Again?</button> 
            <button onClick={() => this.handleSlowReplayMode() } className="play-again">Replay of games</button>
          </React.Fragment>
        );
  }


  render() {
    const { History, Turn, XIsWinner } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="board-title turn">{this.genWhosTurnMessage(this.props.XIsWinner)}</h1>
        <h1 className="board-title move">Move:{this.props.Turn}</h1>
        <div className="cont">
              <Header History={History} />  
              <Board 
                  Move={History[Turn]} 
                  Turn={Turn} 
                  XIsWinner={XIsWinner} /> 
        </div>

        { this.canShowButton(XIsWinner) ? this.renderButton() : null }

      </div>
    );
  }
}

function mapStateToProps(state:any, props:any) {
  const { board } = state;
  return {
      Turn : board.Turn, 
      History : board.History,
      XIsWinner : board.XIsWinner, 
      winningSquares : board.winningSquares,
      highlightedButton : board.highlightedButton 
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



