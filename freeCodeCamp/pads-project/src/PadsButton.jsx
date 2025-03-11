import { useState } from 'react';
export default function PadsButton(props) {
    let x = "off";
    if (props.on === true) x = "on";
    const [name , setName ] = useState(x);
    function handleClick(){
        setName(prev => prev === "on" ? "off" : "on");
    }
    return (
        <button
            onClick={handleClick}
            className={`${name} pads-button`}  // Combined class names
            style={{ backgroundColor: props.backgroundColor }}
            key={props.id}
        >
        </button>
    );
}
