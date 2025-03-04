import { useState } from 'react'
import './App.css';


function App() {
  const [color, setColor] = useState("olive");
  
  return (

    <div className="w-full min-h-screen duration-200 flex justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16" style={{ backgroundColor: color }}>
      <div className="fixed bottom-16 inset-x-0 flex justify-center">
        <div className="w-fit bg-green-100 px-4 py-2 rounded-3xl flex flex-wrap gap-3 shadow-xl sm:gap-5">
          <div className="text-amber-100 font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "green" }}>
            <button onClick={() => setColor("green")} className='cursor-pointer outline-none px-3'>Green</button>
          </div>
          <div className="font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "white" }}>
            <button onClick={() => setColor("white")} className='cursor-pointer outline-none px-3'>White</button>
          </div>
          <div className="cursor-pointer text-amber-50 font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "red" }}>
            <button onClick={() => setColor("red")} className='cursor-pointer outline-none px-3'>Red</button>
          </div>
          <div className="text-yellow-50 font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "blue" }}>
            <button onClick={() => setColor("blue")} className='outline-none px-3 cursor-pointer'>Blue</button>
          </div>
          <div className="text-white font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "olive" }}>
            <button onClick={() => setColor("olive")} className='cursor-pointer outline-none px-3'>Olive</button>
          </div>
          <div className="text-black font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "orange" }}>
            <button onClick={() => setColor("orange")} className='cursor-pointer outline-none px-3'>Orange</button>
          </div>
          <div className="text-black font-light rounded-xl p-2 text-xs shadow-md" style={{ backgroundColor: "pink" }}>
            <button onClick={() => setColor("pink")} className='cursor-pointer outline-none px-3'>Pink</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
