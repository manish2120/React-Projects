import { useState } from "react"

function App() {
  const [color, setColor] = useState('#402E7A');

  return (
    <>
    <div className="w-full h-screen duration-150 font-poppins" style={{backgroundColor: color}}>
      <div className="w-full h-screen grid place-items-center text-white text-xl">
        <p>Click on the buttons to change Background Color</p>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 shadow-sm p-4 bg-gray-200 rounded-full">
        <button style={{backgroundColor: 'red'}} onClick={() => setColor('red')} className="px-5 py-1 rounded-full shadow-md text-white font-semibold">Red</button>
        <button style={{backgroundColor: 'green'}} onClick={() => setColor('green')} className="px-5 py-1 rounded-full shadow-md text-white font-semibold">Green</button>
        <button style={{backgroundColor: 'blue'}} onClick={() => setColor('Blue')} className="px-5 py-1 rounded-full shadow-md text-white font-semibold">Blue</button>
        <button style={{backgroundColor: 'violet'}} onClick={() => setColor('violet')} className="px-5 py-1 rounded-full shadow-md text-white font-semibold">Violet</button>
        <button style={{backgroundColor: 'brown'}} onClick={() => setColor('brown')} className="px-5 py-1 rounded-full shadow-md text-white font-semibold">Brown</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
