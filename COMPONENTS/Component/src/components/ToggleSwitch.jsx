import React, { useState, Fragment } from 'react';
import PressMe from './PressMe';
import styles from './ToogleSwitch.module.css'


function ToggleSwitch() {
  const [on, setOn] = useState(false);

  const toggleSwitch = () => {
    setOn(!on); // Toggle the state
  };

  return (
    <Fragment>
    <h2> ToggleSwitch</h2>
      <PressMe label="Switch" onClick={toggleSwitch} className={styles.toggleSwitch}></PressMe>   
     {/* <button className={styles.button}> Hello3 </button>  importing through ToogleSwitch.css */}
     
     <br /> 
     <span className={on ? styles.turnOff : styles.turnOn}>
        {on ? 'Turn Off' : 'Turn On'} <br />
      
      </span>
     {/*ternary operator for unconditional rendering */}
    </Fragment>
  );
}

export default ToggleSwitch;
