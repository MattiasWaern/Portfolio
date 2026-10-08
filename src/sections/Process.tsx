import { PROCESS } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <SectionHeading title="How I approach a project" intro="Writing JSX is the smaller half of it." />
        <div className="steps">
          {PROCESS.map((s, i) => (
            <div className="st" key={s.title}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
