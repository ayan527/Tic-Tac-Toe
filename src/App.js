import React from 'react';
import Board from './components/Board';

// import styling sheet
import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
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
