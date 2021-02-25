import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    // 3 x 3 Board
    <div className="board">
      {/* First Row*/}
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      {/* Second Row*/}
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      {/* Third Row*/}
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
};

export default Board;
