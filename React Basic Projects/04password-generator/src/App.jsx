import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) {
      str += '0123456789';
    }

    if(charAllowed) {
      str += '!@#$%^&*()~';
    }

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
  }, [password]);

  return (
    <>
      <div className='w-full h-screen flex items-center font-poppins'>
        <div className='max-w-lg min-w-fit shadow-sm px-9 py-3 bg-gray-600 rounded-xl mx-auto'>
          <h3 className='text-white text-xl font-semibold'>Password Generator</h3>
          <div className='py-4 flex justify-center'>
              <input type="text" placeholder="Password" value={password} className="cursor-pointer outline-none rounded-s-lg py-2 px-3 w-full" ref={passwordRef} readOnly/>
              <button className="bg-blue-600 px-3 py-2 rounded-e-lg outline-none text-white font-bold" onClick={copyToClipboard}>copy</button>
            </div>
          <div className='text-white flex justify-center items-center flex-wrap py-3'>
            <div className='flex items-center'>
              <span>Length : </span>
              <input type="range" min="0" max="20" value={length} onChange={(e) => setLength(e.target.value)} className="cursor-pointer mx-1"/>
              <span>{length}</span>
            </div>
            <div className='flex items-center mx-4'>
              <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumber((prevNumb) => !prevNumb)} className="cursor-pointer mx-1"/>
              <span>Numbers</span>
            </div>
            <div className='flex items-center'>
              <input type="checkbox" defaultChecked={charAllowed} onChange={() => setChar((prevChar) => !prevChar)} className="cursor-pointer mx-1"/>
              <span>Characters</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
