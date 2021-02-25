import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  // Initializing the state of the board : 9 boxes are null
  const [board, setBoard] = useState(Array(9).fill(null));

  // Creating a function to handle a square button
  const handleSquareButton = position => {
    //console.log(position);
  };

  // Render a square button
  const renderSquareButton = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareButton(position);
        }}
      />
    );
  };

  return (
    // 3 x 3 Board
    <div className="board">
      {/* First Row*/}
      <div className="board-row">
        {renderSquareButton(0)}
        {renderSquareButton(1)}
        {renderSquareButton(2)}
      </div>
      {/* Second Row*/}
      <div className="board-row">
        {renderSquareButton(3)}
        {renderSquareButton(4)}
        {renderSquareButton(5)}
      </div>
      {/* Third Row*/}
      <div className="board-row">
        {renderSquareButton(6)}
        {renderSquareButton(7)}
        {renderSquareButton(8)}
      </div>
    </div>
  );
};

export default Board;
