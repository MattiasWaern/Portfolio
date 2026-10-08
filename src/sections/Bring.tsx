import { BRING } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function Bring() {
  return (
    <section id="bring">
      <div className="wrap">
        <SectionHeading title="What I can bring to a team" />
        <div className="bring" style={{ marginTop: '2.5rem' }}>
          {BRING.map((b) => <div key={b.title}><h3>{b.title}</h3><p>{b.text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
