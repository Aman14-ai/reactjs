import Header from "./components/Header";
import './components/index.css';
import Entry from "./components/Entry.jsx";
import data from './data.js';
import { useState, useEffect } from "react";

function Greeting() {
    const hours = new Date().getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "morning";
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    }
    else {
        timeOfDay = "night";
    }

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update time every second
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <>
            <h1 className="greeting">Good {timeOfDay} , {formattedTime}</h1>
        </>
    )
}

function Cards() {
    const entryElements = data.map((e) => {
        return (
            <Entry
            key={e.id}
                img={{ src: e.img.src, alt: e.img.alt }} title={e.title} country={e.country} dates={e.dates} googleLinks={e.googleLinks} text={e.text}
            />
        )
    })
    return entryElements
}

function App() {
    

    return (
        <>
            <Header />
            <div className="whole-container">
                <Greeting />
                <Cards />
            </div>
        </>
    );
}
export default App