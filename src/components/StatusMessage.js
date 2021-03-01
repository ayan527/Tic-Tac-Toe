import React from 'react';

const StatusMessage = ({ winner, currentState }) => {
  // Returns true if all sqaures are filled
  const noMovesLeft = currentState.board.every(el => el !== null);

  return (
    <h2>
      {/* Winner is shown */}
      {winner && `Winner is ${winner}`}
      {/* Next move is shown */}
      {!winner && !noMovesLeft && `Next is ${currentState.isXNext ? 'X' : 'O'}`}
      {/* Draw is shown */}
      {!winner && noMovesLeft && 'Match tied'}
    </h2>
  );
};

export default StatusMessage;
