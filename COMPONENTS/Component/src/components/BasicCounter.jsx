import React, { Fragment, useState } from 'react';
import ReactFragment from './ReactFragment';
import PressMe from './PressMe';

function BasicCounter() {
  const [counter, setCounter] = useState(0);

  const incrementFunction = () => {
    setCounter(counter + 1);
  };

  const decrementFunction = () => {
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <ReactFragment />
      <h1>BASIC COUNTER</h1>

      <h2>Current Number: {counter}</h2>

      {/*<button onClick={decrementFunction}>Click me for decrement</button>*/}
      <PressMe label="Decrement" onClick={decrementFunction} className="primary-button1" />

       {/*<button onClick={incrementFunction}>Click me for increment</button>*/}
      <PressMe label="Increment" onClick={incrementFunction} className="primary-button" />
    </Fragment>
  );
}

export default BasicCounter;
