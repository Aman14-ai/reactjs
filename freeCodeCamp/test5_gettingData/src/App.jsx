import { useState } from "react";
export default function App() {
    const [state, setState] = useState(null);
    // getting the data and save the data in the state.
    const response = fetch('https://swapi.dev/api/people/1').then(res => res.json()).then(data => (setState(data)))
    return (
        <>
            <h1>Hello radha</h1>
            <pre>{JSON.stringify({state}, null, 2)}</pre>
        </>
    )
}