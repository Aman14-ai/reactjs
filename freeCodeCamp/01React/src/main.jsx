import ReactDOM from 'react-dom/client';
import { createRoot  } from 'react-dom/client'
import { createElement } from 'react';


// const root = createRoot(document.getElementById('root'));
// root.render(<h1>Hello React!</h1>)

ReactDOM.createRoot(document.getElementById('toor')).render(
    <>
        <h1>Hello React from the world of ReactDOM!</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>More Information</li>
        </ul>
    </>

);

const reactElement = createElement('h1',null , "Radhe Radhe"); // very hard to write html in this way.
const reactElement2  = <h1><span>I am inside span of reactElement2</span></h1>//jsx element required
console.log(reactElement);

createRoot(document.getElementById('root')).render( reactElement2 );


// const h1 = document.createElement('h1');
// h1.textContent = "This is imperative coding.!";
// document.getElementById('root').appendChild(h1);
// if here is a very big content then it is very hard to write in this way.
// so we use react to make it easy to write html content.
// React.createElement() is a function that takes three arguments: the type of element you want to create, the properties you want to give it, and the children of the element.
// React.createElement() returns a React element, which is a lightweight description of what to render.
// React.createElement() does not create a DOM element. It returns a plain JavaScript object called a React element, which describes what you want to render.