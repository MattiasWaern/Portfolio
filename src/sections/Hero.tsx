import { HERO_TECH } from '../data/site';
import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { SystemDiagram } from '../components/SystemDiagram';

const headline = ['I build interfaces', 'that feel as good', 'as they work.'];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hg">
        <div>
          <span className="mono">Frontend developer · fullstack in progress · Sweden</span>
          <h1>
            {headline.map((line, i) => (
              <span className="reveal-w" key={line}><span style={{ animationDelay: `${i * 0.12}s` }}>{line}</span></span>
            ))}
          </h1>
          <p className="lead">I'm Mattias, a frontend developer focused on React and TypeScript, with a growing interest in fullstack development. I like understanding how the pieces fit together, from interface to API to database.</p>
          <p className="status"><span className="dot" aria-hidden="true" />Available for frontend and fullstack opportunities</p>
          <div className="row">
            <Button variant="primary" href="#projects">View my work</Button>
            <Button href="#contact">Contact me</Button>
          </div>
          <SocialLinks />
          <div className="chips" aria-label="Main technologies">{HERO_TECH.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        </div>
        <SystemDiagram />
      </div>
    </section>
  );
}
