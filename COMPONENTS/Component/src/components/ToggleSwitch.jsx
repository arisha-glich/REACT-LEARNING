import React, { useState, Fragment } from 'react';
import PressMe from './PressMe';

function ToggleSwitch() {
  const [on, setOn] = useState(false);

  const toggleSwitch = () => {
    setOn(!on); // Toggle the state
  };

  return (
    <Fragment>
      <div>ToggleSwitch</div>
      <PressMe label="Switch" onClick={toggleSwitch} className="toggleSwitch" />
      <p>{on ? 'ON' : 'OFF'}</p>
    </Fragment>
  );
}

export default ToggleSwitch;
