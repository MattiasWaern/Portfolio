import { techGroups } from '../data/tech';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeading title="Tools I build with" intro="Labels are honest self-assessments, not percentages. Hover or focus a card for how I use it." />
        {techGroups.map((g) => (
          <div key={g.category}>
            <div className="cat">{g.category}</div>
            <div className="tg">{g.items.map((i) => <TechBadge key={i.name} item={i} />)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
