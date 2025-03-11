import Header from "./Header";
import Body from "./Body.jsx";
import { useState } from "react";

function App() {
    const [ username , setUsername ] = useState("Radha");

    // main - concept : understanding data flows in only one direction in react from parent to child.
    // if any children need state then it is better to define that to only children 
    // if siblings need children then it is better to define state in just upper state in tree.
    function handleClick(){
        setUsername(prev => prev = prev == "Aman" ? "Radha" : "Aman");
    }

    return (
        <>
            <Header name={username}/>
            <Body name={username}/>
            <button onClick={handleClick}>Change Username</button>
        </>
    )
}
export default App;