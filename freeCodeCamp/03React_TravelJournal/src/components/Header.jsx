
import globe from "./globe.svg";
function Header(){
    return (
        <header>
           <img className='header-icon' src={globe}alt="header-icon" />
            <h1>myTravelJournal</h1>
        </header>
    );
}
export default Header;