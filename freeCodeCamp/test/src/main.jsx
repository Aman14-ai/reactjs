import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import jokesData from './JokesData.js';
import Joke from './Joke.jsx';

function Array() {
  const ninjaTurtles = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'];
  return (
    <main>
      {ninjaTurtles.map((turtle, index) => (

        <h1>{index + 1}. {turtle}</h1>

      ))}
    </main>
  )
}

function Object() {
  const jsx = { firstname: "Aman" };
  return (
    <main>
      <h1>{jsx.firstname}</h1>
    </main>
  )
}

function Jsx() {
  const ninjaTurtles = [
    <h1>Leonardo</h1>,
    <h2>Donatello</h2>,
    <h3>Raphael</h3>,
    <h4>Michelangelo</h4>,
    <h5>Choudhary Ji</h5>,
    <h6>Aman Choudhary Ji</h6>
  ];
  return (
    <main>
      {ninjaTurtles}
    </main>
  )
}
function App() {
  //console.log(jokesData);
  const jokeElements = jokesData.map((joke, index) => {
    return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />
  });

  const [darkMode , setDarkMode] = useState(false);
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
    <main style={{ backgroundColor:darkMode ?"black": "white", color: darkMode?"white": "black"}}>
      <Mode />
      {jokeElements}
    </main>
  )
}

function Practice() {
  const [value, setValue] = useState(['a']);
  console.log(value)
  return (value.length == 0 && <p>You have 0 unread message</p> || value.length === 1 && <h1>You have 1 unread meassage.</h1> || <h1>You have {value.length} unread messages.</h1>);
  
}

createRoot(document.getElementById('root')).render(
  <>
    {/* <Array />
    <Object/>
    <Jsx/> */}
    <App />
    
  </>
)
