import React from 'react'
import './App.css'
import Slot from './Slot'


function App() {
  return (
    <>
    <div>
      <h2>🎰Welcome to Slot Machine Game🎰</h2>
      <Slot x='😄' y='😄' z='😄'/>
      <Slot x='😄' y='😄' z='😀'/>
      <Slot x='😊' y='😄' z='😀'/>
      <Slot x='😄' y='😄' z='😄'/>
    </div>
    </>
  )
}

export default App