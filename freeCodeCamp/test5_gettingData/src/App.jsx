import { useState, useEffect } from "react";

export default function App() {
    const [state, setState] = useState(null);
    const [getNewCharacter, setNewCharacter] = useState(1);
    // getting the data and save the data in the state.
    //const response = fetch('https://swapi.dev/api/people/1').then(res => res.json()).then(data => (setState(data)));
    // note in this case you are calling setState while fetching leaading to rerenders of the page and you stuck in infinite loop. solution is useEffect.
    //console.log("rendered!")
    // sideEffects -- useEffects
    function getNewChar() {
        setNewCharacter(prev => prev + 1);
    }
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${getNewCharacter}`).then(res => res.json()).then(data => setState(data));
    }, [getNewCharacter]);
    // if any value if the dependency changed leads to run the useEffect function again. in this case [] is compared to [] and found no change .
    // Given the same props or state, the component will render the same ui also known as pure functions in react.

    console.log("Rendered!" + Math.random());//first it will ran than useEffect
    return (
        <>
            <center>
                <h1>Hello radha</h1>
                <div className="getNewCharacter">
                    <h2>Get new Character</h2>
                    <button onClick={getNewChar} className="newChar">Click</button>
                </div>
                <pre>{JSON.stringify({ state }, null, 2)}</pre>
            </center>
        </>
    )
}