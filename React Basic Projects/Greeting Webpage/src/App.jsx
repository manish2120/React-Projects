import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currGreeting, setGreetings] = useState('');
  const [currTime, setTime] = useState('');

  useEffect(() => {
    let intervalId = 
    setInterval(() => {
      const date = new Date();
      const currTime = date.toLocaleTimeString();
      setTime(currTime);

        let currHour = date.getHours();
        let greeting = '';
        if(currHour >= 1 && currHour < 12) {
         greeting = 'Good Morning';
         setGreetings(greeting);
        }
        else if(currHour >= 12 && currHour <= 18) {
          greeting = 'Good Afternoon';
          setGreetings(greeting);
        }
        else {
          greeting = 'Good Night';
         setGreetings(greeting);
        }
    }, 1000)

    return () => {clearInterval(intervalId)};
  }, [])
    
  return (
    <>
      <div className="bg-cover bg-center h-screen w-screen flex flex-col justify-center align-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <h1 className="font-bold">{currTime}</h1>
        <h3 className="font-semibold">{currGreeting}</h3>
      </div>
    </>
  )
}

export default App
