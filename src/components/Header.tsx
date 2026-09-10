import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

     <div className="navbar">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/Projects">Projects</Link> </li>
        <li> <Link to="/Contact">Contact</Link> </li>
        <li> <Link to="/About">About</Link> </li>
      </ul>
     </div>



      <h1>Header</h1>
    </header>
  );
}

export default Header;