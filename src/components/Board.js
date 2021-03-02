import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareButton, winningSquares }) => {
  // Render a square button
  const renderSquareButton = position => {
    // Check if the square is in winning sqaures
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareButton(position);
        }}
        isWinningSquare={isWinningSquare}
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
