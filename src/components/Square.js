import React from 'react';

// Square component receives argument - props (object)
// props.value is destructured as { value } and props.onClick as { onClick }
const Square = ({ value, onClick, isWinningSquare }) => {
  // Return 1 square clickable box - button
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  ); // access "value" attribute in JS using {} exp
};

export default Square;
