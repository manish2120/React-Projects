import { useState } from 'react'
function App() {
  const [color, setColor] = useState('#212121');
  
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color, color: '#fff'}}>
      <div className="flex justify-center align-middle">
        <p className="text-xl font-bold mt-12">Tap to Change Background Color</p>
        </div>
        <div className='flex justify-center mt-7'>
          <div className="fixed bottom-12 px-3 py-3 rounded-2xl bg-white flex flex-wrap justify-center gap-4">
            <button className="px-5 py-2 rounded-2xl" style={{backgroundColor: "red"}} onClick={() => setColor('red')}>Red</button>
            <button className="px-5 py-2 rounded-2xl" style={{backgroundColor: "blue"}}
            onClick={() => setColor('blue')}>Blue</button>
            <button className="px-5 py-2 rounded-2xl" style={{backgroundColor: "violet"}}
            onClick={() => setColor('violet')}>Violet</button>
            <button className="px-5 py-2 rounded-2xl" style={{backgroundColor: "yellow"}}
            onClick={() => setColor('yellow')}>Yellow</button>
            <button className="px-5 py-2 rounded-2xl"style={{backgroundColor: "brown"}}
            onClick={() => setColor('brown')}>Brown</button>
            <button className="px-5 py-2 rounded-2xl" style={{backgroundColor: "orange"}}
            onClick={() => setColor('orange')}>Orange</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
