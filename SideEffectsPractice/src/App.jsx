import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
    const[show , setShow] = useState(true);
    const[width , setWidth] = useState(window.innerWidth);
    function handleClick(){
        setShow(prev => !prev);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerWidth);
            setWidth(window.innerWidth);
        },[])
    })

  return (
    <div>
        <button onClick={handleClick}>Toggle Window Tracker</button>
        {show && <h1>Window width: {width}</h1>}
    </div>
  )
}

export default App
