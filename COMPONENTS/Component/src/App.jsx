import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayNumber from './components/DisplayNumber'
import AddNumber from './components/AddNumber'


function App() {
const number=[1,3,3]
const numbers=[2,4,5,6]



  return (
    <>
      <DisplayNumber number={number} numbers={numbers}/>
      <AddNumber/>
    </>
  )
}

export default App
