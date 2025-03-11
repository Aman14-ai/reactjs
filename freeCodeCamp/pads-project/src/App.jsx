import Pads from './pads.js';
import { useState } from 'react';
import PadsButton from './PadsButton.jsx';

export default function App() {
  const [pads, setPads] = useState(Pads);

  function toggle(id) {
    console.log("clicked" + id)
    console.log(pads.on)
    setPads(prevPads =>
      prevPads.map(pad =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    );
  }
  function closeAllPads(){
    setPads(prevPads => 
      prevPads.map(pad => ({...pad , on: false}))
    );
  }
  function openAllPads(){
    setPads(prevPads => 
      prevPads.map(pad => ({...pad , on: true}))
    );
  }

  const buttonElements = pads.map(pad => {
    return (<PadsButton key={pad.id} toggle={toggle} on={pad.on} backgroundColor={pad.color} id={pad.id} />)
  })

  const [darkMode, setDarkMode] = useState(true);
  function Mode() {
    function handleClick() {
      setDarkMode(prev => !prev);
    }
    return (
      <div className="mode">
        <button className='mode-controller' onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      </div>
    )
  }


  return (
    <main style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black" }}>
      <Mode />
      <div className="pads-container">
        <div className='buttons-container'>
          {buttonElements}
        </div>
      </div>
      <div className="closeAll">
        <button onClick={closeAllPads} className='close-all-pads'>Close All Pads</button>
        <button onClick={openAllPads} className='close-all-pads'>Open All Pads</button>
      </div>
    </main>
  )
}
