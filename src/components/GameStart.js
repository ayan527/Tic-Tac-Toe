import React from 'react';

const GameStart = ({ onClick }) => {
  return (
    <div className="restart">
      <button
        type="button"
        onClick={() => onClick()}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Restart Game
      </button>
    </div>
  );
};

export default GameStart;
