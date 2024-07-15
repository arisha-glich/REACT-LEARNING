import React from 'react';

const DisplayNumber = ({ number, numbers }) => {
  const multiplyNumbers = (array) => {
    let result = 1;
    array.forEach(element => {
      result = result * element;
    });
    return result;
  };

  return (
    <div>
      <h1>DisplayNumber</h1>
      <p>Single Number: {number}</p>
      <p>Display All Numbers: {numbers.join(', ')}</p>
      <p>Multiplied Result: {multiplyNumbers(numbers)}</p>
      <button> Thankyou for entering data</button>
    </div>

  );
};

export default DisplayNumber;
