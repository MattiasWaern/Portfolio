import "../styles/AboutMe.css"
import { useScrollReveal } from "../hooks/useScrollReveal";

function AboutMe() {
  const intro = useScrollReveal<HTMLDivElement>();
  const info = useScrollReveal<HTMLDivElement>();
  const aboutMe = useScrollReveal<HTMLDivElement>();

  return (
    <main>
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
        <span>5 år</span> <p>- I programmering</p>
        <span>Stockholm</span> <p>Hybrid - Distans</p>
      </section>

      <section
      ref={aboutMe.ref}
      className={`aboutMe ${aboutMe.visible ? 'is-visible' : ''}`}
      >
        <h1>Om Mig</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quas voluptatibus optio modi, sed rem debitis nostrum ipsa, nesciunt mollitia inventore architecto similique repellat, officia labore enim quasi perspiciatis?</p>
      </section>
    </main>
  );
}

export default AboutMe;