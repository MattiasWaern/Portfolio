import { PHILOSOPHY, STRENGTHS } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeading title="More than just writing code." />
        <div className="two">
          <div>
            <p>I like understanding the whole product, not only the isolated component I'm building. Who uses it, what data sits behind it, and what happens when something goes wrong.</p>
            <p className="mu">I'm early in my career, and I'd rather be clear about that than pretend otherwise. What I can show is projects I've finished, code you can read, and a habit of asking why something is built the way it is.</p>
            <ul className="pts">{STRENGTHS.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="phil" aria-label="Developer philosophy">
            {PHILOSOPHY.map((p) => <div key={p.title}><h3>{p.title}</h3><p className="mu">{p.text}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
