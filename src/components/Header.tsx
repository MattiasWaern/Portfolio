import "../styles/Header.css";
import { Link } from "react-router-dom";
import FlickeringGrid from "../components/FlickeringGrid";

function Header() {
  return (
    <header>
      <FlickeringGrid
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="120, 310, 220"
        maxOpacity={0.3}
      />

      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Projects">Projects</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
