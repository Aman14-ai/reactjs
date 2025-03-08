import './components/index.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const arr = ['oil','potato','tomato'];
function List(){
    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

function App() {
    return (
        <>
            <Header />
            <Main />
            
        </>
    );
}
export default App;