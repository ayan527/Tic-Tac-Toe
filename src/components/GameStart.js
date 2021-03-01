import React from 'react';

const GameStart = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={() => onClick()}>
        Restart Game
      </button>
    </div>
  );
};

export default GameStart;
