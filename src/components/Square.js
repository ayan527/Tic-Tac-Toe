import React from 'react';

// Square component receives argument - props (object)
// props.value is destructured as { value }
const Square = ({ value }) => {
  // Return 1 square clickable box - button
  return <button className="square">{value}</button>; // access "value" attribute in JS using {} exp
};

export default Square;
