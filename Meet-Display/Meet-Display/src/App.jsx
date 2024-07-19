import { useState } from 'react'
import './App.css'
import Meetlist from './components/Meet/Meetlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Meetlist/>
    </>
  )
}

export default App
