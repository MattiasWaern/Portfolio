import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


function Header() {
  return (
    <header>

     <div className="navbar">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/Projects">Projects</Link> </li>
        <li> <Link to="/Contact">Contact</Link> </li>
        <li> <Link to="/About">About</Link> </li>
        <li> <a href="" target="_blank" rel="noopener noreferrer"><FaGithub /> </a> </li>
      </ul>
     </div>

    </header>
  );
}

export default Header;