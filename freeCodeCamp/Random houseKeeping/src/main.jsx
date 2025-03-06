import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <div className="header">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s' width={55} height={50}/>
    <h1 className='inline'>React Facts</h1></div>
  </StrictMode>)
