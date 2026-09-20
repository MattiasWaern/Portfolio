import "../styles/AboutMe.css"
import { useScrollReveal } from "../hooks/useScrollReveal";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const technology = [
  <FaGithub/>, <FaHtml5/>, <FaReact/>, <IoLogoJavascript/>
]


function AboutMe() {
  const intro = useScrollReveal<HTMLDivElement>();
  const info = useScrollReveal<HTMLDivElement>();
  const aboutMe = useScrollReveal<HTMLDivElement>();
  const kompetens = useScrollReveal<HTMLDivElement>();

  return (
    <div className="AboutMeContainer">
      <section
        ref={intro.ref}
        className={`introduction reveal ${intro.visible ? 'is-visible' : ''}`}
      >
        <h1>Mattias Waern</h1>
        <h1>bygger galet bra saker</h1>
        <h1>Bäst i branchen</h1>

        <p>
          Har programmerat i snart 3 år, bor i Norrtälje, pluggar just nu till att bli
          Frontend Utvecklare med långsikt att bli Fullstack Utvecklare
        </p>
      </section>

      <section
        ref={info.ref}
        className={`info reveal ${info.visible ? 'is-visible' : ''}`}
      >
        <span>2 år</span> <p>- I programmering</p>
        <span>Stockholm</span> <p>Hybrid - Distans</p>
        <span>Tillgänglig</span> <p>- När som helst</p>
      </section>

      <section
      ref={aboutMe.ref}
      className={`aboutMe reveal ${aboutMe.visible ? 'is-visible' : ''}`}
      >
        <h1>Om Mig</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quas voluptatibus optio modi, sed rem debitis nostrum ipsa, nesciunt mollitia inventore architecto similique repellat, officia labore enim quasi perspiciatis?</p>
      </section>

       <section
      ref={kompetens.ref}
      className={`kompetenser reveal ${kompetens.visible ? 'is-visible' : ''}`}
      >
        <h1>Kompetens</h1>
        <p>{technology}</p>
      </section>

    </div>
  );
}

export default AboutMe;