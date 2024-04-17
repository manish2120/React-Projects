import { useState } from 'react'
import './App.css'
import data from './api';
import Accord from './Accord';

function App() {
  const [getData, setData] = useState(data)
  return (
    <>
    <div className="max-w-sm">
      <h2 className='text-3xl font-bold mb-4'>React Accordion</h2>
      <div>
        {
          getData.map((elem, index) => {
            const { id, question, answer } = elem;
            return <Accord key={index} question={question} answer={answer}/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
