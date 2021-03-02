import React from 'react';

const GameHistory = ({ history, currentMove, moveTo }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                type="button"
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                onClick={() => moveTo(move)}
              >
                {move === 0 ? 'Go to Start' : `Go to move ${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GameHistory;
