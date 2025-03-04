import { useState } from 'react'
import './App.css';


function App() {
  const [color, setColor] = useState("olive");

  return (

    <div className="w-full h-screen duration-200 flex justify-center items-center" style={{ backgroundColor: color }}>
      <div className="fixed bottom-16 inset-x-0 flex justify-center">
        <div className="w-fit bg-green-100 px-3.5 py-2 rounded-3xl flex gap-5 shadow-xl">
          <div className= "text-amber-100 font-light rounded-xl p-1.5 text-xs shadow-md" style={{backgroundColor: "green"}}>
            <button onClick={()=> setColor("green")}
            className='outline-none px-2'
            >Green</button>
          </div>
          <div className= "font-light rounded-xl p-1.5 text-xs shadow-md" style={{backgroundColor: "white"}}>
            <button onClick={() => setColor("white")}
            className='outline-none px-2'
            >White</button>
          </div>
          <div className= "text-amber-50 font-light rounded-xl p-1.5 text-xs shadow-md" style={{backgroundColor: "red"}}>
            <button onClick={() => setColor("red")}
            className='outline-none px-2'
            >Red</button>
          </div>
          <div className= "text-yellow-50 font-light rounded-xl p-1.5 text-xs shadow-md" style={{backgroundColor: "blue"}}>
            <button onClick={() => { setColor("blue") }}
            className='outline-none px-2'
            >Blue</button>
          </div>
          <div className= " text-white font-light rounded-xl p-1.5 text-xs shadow-md" style={{backgroundColor: "olive"}}>
            <button onClick={()=> setColor("olive")}
            className='outline-none px-2'
            >Olive</button>
          </div>
          
        </div>
      </div>


    </div>

  )
}

export default App
