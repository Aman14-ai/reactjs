import { useState, useCallback , useEffect , useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
   } , [ password ])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "1234567890";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_><?:";
    }

    for (let index = 0; index < length; index++) {

      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(()=> { passwordGenerator() } ,[length ,numberAllowed ,characterAllowed ,passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center font-bold font-sans">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg bg-white text-black"
            placeholder="Generated Password"
            readOnly ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
