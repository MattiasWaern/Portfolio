import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import "../styles/StartSida.css";

function HomePage() {

  return (
    <>
        <Header/>

        <main>
            <Projects/>
        </main>

        <Footer/> 
    </>
  )
}

export default HomePage;