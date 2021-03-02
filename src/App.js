import React, { useState } from 'react';
import Board from './components/Board';
import GameStart from './components/GameStart';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';

// Import styling sheet
import './styles/root.scss';

// Initializing the state of 9x9 board & next X move
const NEW_GAME_STATE = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  // Initializing the state of the board : 9 boxes are null
  const [history, setHistory] = useState(NEW_GAME_STATE);

  // Initializing the current move number
  const [currentMove, setCurrentMove] = useState(0);
  const currentState = history[currentMove];

  // Function gets called everytime the component gets rerendered with updated board
  const { winner, winningSquares } = calculateWinner(currentState.board);

  // Creating a function to handle a square button
  const handleSquareButton = position => {
    //console.log(position);
    // Check if the position is already modified or Winner is there
    if (currentState.board[position] || winner) {
      return;
    }

    // Update the square box of board
    // 'previous' is the last updated arraye of states of the game
    setHistory(previous => {
      // pick the last updated state of the game
      const lastState = previous[previous.length - 1];

      // changing the current state of the clicked box
      const newState = lastState.board.map((current, pos) => {
        if (pos === position) {
          return lastState.isXNext ? 'X' : 'O';
        } else {
          return current;
        }
      });

      // append the new state and return
      return previous.concat({ board: newState, isXNext: !lastState.isXNext });
    });

    // Increment the move count
    setCurrentMove(previous => previous + 1);
  };

  const restartGame = () => {
    setHistory(NEW_GAME_STATE);
    setCurrentMove(0);
  };

  // Sharing of state between components through props
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} currentState={currentState} />
      <Board
        board={currentState.board}
        handleSquareButton={handleSquareButton}
        winningSquares={winningSquares}
      />
      {!currentState.board.every(el => el === null) && (
        <GameStart onClick={restartGame} />
      )}
    </div>
  );
};

export default App;

/* export default () => (
  <>
    <h1>Welcome to Tic-Tac-Toe App</h1>
    <p>A new beginning to the React World</p>
  </>
); */
