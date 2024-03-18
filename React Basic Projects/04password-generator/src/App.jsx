import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null); //default value in parentheses

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let characters = "!@#$%^&*-_+=[]{}~`";
    if(numberAllowed) {
      str += '0123465789';
    }

    if(charAllowed) {
      str += '!@#$%^&*-_+=[]{}~`';
    }

    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  })

  return (
    <>
     <div className='flex min-h-50 w-full justify-center px-3 py-2'>
      <div className='bg-gray-700 px-5 py-5 rounded-2xl flex flex-col justify-center align-middle'>
        <p className="text-center mb-2 font-bold">Password Generator</p>
        <input type="text"
        placeholder="password"
        value={password}
        className="rounded-md px-3 py-2 bg-white text-black"/>
        <button onClick={copyPasswordToClipboard}>copy</button>
        <div className='flex gap-6'>
          <div className="flex align-middle gap-2">
            <p>{length}</p>
          <input type="range" 
          id="passLength"
          value={length}
          min={8}
          max={20}
          ref={passwordRef}
          onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="passLength">Length</label>
          </div>

          <div className="flex align-middle gap-1">
          <input type="checkbox" id="number" onChange={() => {
            setNumber((prev) => !prev)
          }}/>
          <label htmlFor="number">Numbers</label>
          </div>
          
          <div className="flex align-middle gap-1">
          <input type="checkbox" id="character" value={length} onChange={() => {
            setCharacter((prevNum) => !prevNum)
          }}/>
          <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

// useCallback is used to cache the data in memory, it helps to optimize the code.
// useEffect is used to 
// useRef is used to get the reference