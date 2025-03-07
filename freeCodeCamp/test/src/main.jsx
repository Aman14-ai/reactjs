import { StrictMode } from 'react'
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
  const jsx = {firstname: "Aman"};
  return (
    <main>
      <h1>{jsx.firstname}</h1>
    </main>
  )
}

function Jsx(){
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
function App(){
  //console.log(jokesData);
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <main>
      {jokeElements}
    </main>
  )
}
createRoot(document.getElementById('root')).render(
  <>
    {/* <Array />
    <Object/>
    <Jsx/> */}
    <App/>
  </>
)
