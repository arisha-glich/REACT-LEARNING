import React, { useState } from 'react';

const AddNumberUseState = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const addNumber = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sum);
  };

  return (
    <div>
      <h1>Add Number Using useState</h1>
      <input
        type="number"
        placeholder="Enter Number 1"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Number 2"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button onClick={addNumber}>
        Add Number
      </button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default AddNumberUseState;
