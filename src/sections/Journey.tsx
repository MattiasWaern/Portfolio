import { JOURNEY } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <SectionHeading title="My development journey" intro="No dates or employers are listed here yet; they can be added as they are confirmed." />
        <ol className="tl">
          {JOURNEY.map((j) => <li key={j.title}><h3>{j.title}</h3><p>{j.text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
