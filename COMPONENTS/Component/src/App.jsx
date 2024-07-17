import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayNumber from './components/DisplayNumber'
import AddNumber from './components/AddNumber'
import AddNumberUseState from './components/AddNumber_usestate'
import ReactFragment from './components/ReactFragment'
import ToggleSwitch from './components/ToggleSwitch'
import BasicCounter from './components/BasicCounter'



function App() {
{/*const number = [2, 3];
  const numberes = [3, 3, 4, 5, 5]; */}

  return (

    <>
      <div className="App"> 
      {/* <DisplayNumber number={number} numbers={numberes} /> */}
       {/* <AddNumber/>*/}
       {/* <AddNumberUseState/> */}
       {/* <ReactFragment/> */}
         {/*<BasicCounter /> */}
      <ToggleSwitch />
    </div>
    </>
  );
}

export default App;
