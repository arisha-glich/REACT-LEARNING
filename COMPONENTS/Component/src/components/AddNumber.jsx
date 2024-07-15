import React from 'react';

const AddNumber = () => {
  const addNumbers = () => {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 + number2;
    document.getElementById('result').innerText = `Result: ${result}`;
  };

  return (
    <div>
      <h1>ADD Number</h1>
      <input id="number1" type="text" placeholder="Enter Number 1" /><br />
      <input id="number2" type="text" placeholder="Enter Number 2" /><br />
      <button onClick={addNumbers}>Add Number</button>
      <p id="result">Result: </p>
    </div>
  );
};

export default AddNumber;
