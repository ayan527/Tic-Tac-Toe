import React from 'react';

const GameStart = ({ restartGame }) => {
  return (
    <div>
      <button type="button" onClick={() => restartGame()}>
        Restart Game
      </button>
    </div>
  );
};

export default GameStart;
