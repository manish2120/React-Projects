import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <h1 className="bg-green-400 mb-5 rounded-lg py-2 font-semibold">Cards</h1>
  <div className="flex flex-wrap justify-center gap-10">
    <Card username="Jennifer" btnText="View Profile"/>
    <Card username="Bianca" btnText="View Profile"/>
    </div>
  </>
)

