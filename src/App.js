import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

// Import styling sheet
import './styles/root.scss';

const App = () => {
  // Initializing the state of the board : 9 boxes are null
  const [board, setBoard] = useState(Array(9).fill(null));

  // Function gets called everytime the component gets rerendered with updated board
  const winner = calculateWinner(board);

  // Initializing the current state of the board
  const [isXNext, setXNext] = useState(true);

  // Set the message based on the state of the board
  const message = winner
    ? `Winner is ${winner}`
    : `Next is ${isXNext ? 'X' : 'O'}`;

  // Creating a function to handle a square button
  const handleSquareButton = position => {
    //console.log(position);

    // Check if the position is already modified or Winner is there
    if (board[position] || winner) {
      return;
    }

    // Update the square box of board
    // 'previous' is the last updated state of the board : Array of size 9
    setBoard(previous => {
      // changing the current state of the clicked box
      return previous.map((current, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        } else {
          return current;
        }
      });
    });

    // Update the state of the board
    setXNext(previous => !previous);
  };

  // Sharing of state between components through props
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareButton={handleSquareButton} />
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
