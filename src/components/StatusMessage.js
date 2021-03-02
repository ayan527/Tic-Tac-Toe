import React from 'react';

const StatusMessage = ({ winner, currentState }) => {
  // Returns true if all sqaures are filled
  const noMovesLeft = currentState.board.every(el => el !== null);

  return (
    <div className="status-message">
      {/* Winner is shown */}
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {/* Next move is shown */}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={currentState.isXNext ? 'text-green' : 'text-orange'}>
            {currentState.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {/* Draw is shown */}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
