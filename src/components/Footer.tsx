import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer () {
    return(
        <footer className="footer">
            <h1>Footer</h1>

        <li>
            <a
              href="https://github.com/MattiasWaern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
        </li>
        </footer>
    )
}

export default Footer;