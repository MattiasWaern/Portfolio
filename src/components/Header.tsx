import "../styles/Header.css";
import { Link } from "react-router-dom";
import FlickeringGrid from "../components/FlickeringGrid";

function Header() {
  return (
    <header>
      <FlickeringGrid
        squareSize={1}
        gridGap={4}
        flickerChance={0.2}
        color="255, 255, 255"
        maxOpacity={.2}
      />

      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="logo">Mattias<span>.</span>Waern</Link>
          </li>

          <li>
            <Link to="/">Om mig</Link>
          </li>

          <li>
            <Link to="/Project">Project</Link>
          </li>

          <li>
            <Link to="/Contact">Kontakta mig</Link>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
