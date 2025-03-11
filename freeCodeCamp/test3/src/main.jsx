import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Content from './Content.jsx';
import './index.css';

function Main() {
  const [count, setCount] = useState(0);
  function increment() {
    if (count < 20) { setCount(prev => prev + 1); }
  }
  function decrement() {
    if (count > 0) { setCount(prev => prev - 1); }
  }
  return (
    <>
      
      <div className="counter">
      < Content number={count} />
        <button onClick={increment} className="increment">Increment</button><br />
        <button onClick={decrement} className="decrement">Decrement</button>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
