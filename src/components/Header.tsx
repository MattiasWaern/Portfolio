
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import FlickeringGrid from "../components/FlickeringGrid";

function Header() {
    return (
        <header>
            <FlickeringGrid
                squareSize={2}
                gridGap={6}
                flickerChance={0.3}
                color="110, 231, 183"
                maxOpacity={0.5}
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

                    <li>
                        <a
                            href="https://github.com/MattiasWaern"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;

