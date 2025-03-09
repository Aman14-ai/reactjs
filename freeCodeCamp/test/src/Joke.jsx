import { useState } from "react";

export default function Joke(props) {

    let [isShown , setIsShown ] = useState(false);
     function toggleShown(){
        setIsShown(prev => !prev);
        /*isShown = isShown ? false : true ;
        setIsShown(isShown);*/
    }
    return (
        <>
            <h1>setup: {props.setup}</h1>
            {isShown === true && <p><strong>Punchline:</strong>{ props.punchline}</p>}
            <button onClick={ toggleShown }>Show punchline</button>
            <hr />
        </>
    )
}