import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { Terminal } from '../components/Terminal';
import { terminalCommands } from '../data/TerminalCommands';
import "../styles/StartSida.css";

function HomePage() {

  return (
    <>
        <Header/>

        <main>
          <Terminal commands={terminalCommands} />
            <Projects/>
        </main>

        <Footer/> 
    </>
  )
}

export default HomePage;