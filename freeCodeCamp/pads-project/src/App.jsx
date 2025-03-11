import Pads from './pads.js';
import { useState } from 'react';
import PadsButton from './PadsButton.jsx';

export default function App() {
    const [pads, setPads] = useState(Pads);

    const buttonElements = pads.map(pad => {
        return (<PadsButton on={pad.on ? "on" : "off"} backgroundColor={pad.color} id={pad.id} />)
    })
    const [darkMode , setDarkMode] = useState(true);
    function Mode(){
        function handleClick(){
          setDarkMode(prev => !prev);
        }
        return (
          <div className="mode">
            <button className='mode-controller' onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
          </div>
        )
      }

    return (
        <main style={{backgroundColor: darkMode ? "black" : "white" , color: darkMode ? "white" : "black"}}>
            <Mode />
            <div className="pads-container">
                <div className='buttons-container'>
                    {buttonElements}
                </div>
            </div>
        </main>
    )
}
