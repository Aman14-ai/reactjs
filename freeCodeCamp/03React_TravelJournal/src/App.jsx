import Header from "./components/Header";
import './components/index.css';
import Entry from "./components/entry";
import data from './data.js';

function Greeting() {
    const hours = new Date().getHours();
    console.log(hours);
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
    return (
        <>
            <h1 className="greeting">Good {timeOfDay}</h1>
        </>
    )
}

function Cards() {
    const entryElements = data.map((e) => {
        return (
            <Entry
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

            </div></>
    )
}
export default App