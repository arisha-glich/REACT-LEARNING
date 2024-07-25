import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DisplayNumber from "./components/DisplayNumber";
import AddNumber from "./components/AddNumber";
import AddNumberUseState from "./components/AddNumber_usestate";
import ReactFragment from "./components/ReactFragment";
import ToggleSwitch from "./components/ToggleSwitch";
import BasicCounter from "./components/BasicCounter";
import Timer from "./components/Timer";
import { TimerComponent } from "./components/TimerComponet";
import withStyledComponent from "./components/withStyledComponent";
import MyComponent from "./components/MyComponent";

function App() {
  {
    /*const number = [2, 3];
  const numberes = [3, 3, 4, 5, 5]; */
  }
  const EnhancedMyComponent = withStyledComponent(MyComponent);

  return (
    <>
      <div className="App">
        {/* <DisplayNumber number={number} numbers={numberes} /> */}
        {/* <AddNumber/>*/}
        {/* <AddNumberUseState/> */}
        {/* <ReactFragment/> */}
        {/*<BasicCounter /> */}
        {/*<ToggleSwitch />*/}
        {/*<Timer enddate/>*/}
        {/*<TimerComponent/>*/}
        <EnhancedMyComponent extraProp="I am an extra prop!" />
      </div>
    </>
  );
}

export default App;
