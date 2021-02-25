import React from 'react';

// Square component receives argument - props (object)
// props.value is destructured as { value } and props.onClick as { onClick }
const Square = ({ value, onClick }) => {
  // Return 1 square clickable box - button
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  ); // access "value" attribute in JS using {} exp
};

export default Square;
