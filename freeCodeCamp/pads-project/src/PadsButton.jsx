import { useState } from 'react';
export default function PadsButton(props) {
    // let x = "off";

    // if (props.on === true) x = "on";
    // const [name , setName ] = useState(x);
    // function handleClick(){
    //     setName(prev => prev === "on" ? "off" : "on");
    // }
    // this is not very optimal way to do it we have not control on all buttons as a whoel and using state in branch is not recommendedd instead use it in parent . 
    let x = props.on ? "on" : "off"
    return (
        <button
            onClick={() => props.toggle(props.id)}
            className={`${x} pads-button`}  // Combined class names
            style={{ backgroundColor: props.backgroundColor }}
            key={props.id}
        >
        </button>
    );
}
