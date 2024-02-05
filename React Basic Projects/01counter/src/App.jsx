import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setCounter] = useState(0);

  if(value < 0 ) {
    value = 0;
  }

  function addVal() {
    value = value + 1;
    setCounter(value);
  }
  
  function removeVal() {
    value = value - 1;
    setCounter(value);
  }
  return (
    <>
      <h1>Counter</h1>
      <p>Counter Value : {value}</p>
      <button onClick={addVal}>
        Add Value
        </button>
      <br/><br/>
      <button onClick={removeVal}>
        Remove Value
        </button>
    </>
  )
}


export default App