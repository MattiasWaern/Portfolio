import { projects } from '../data/projects';
import { LINKS } from '../data/site';
import { Button } from '../components/Button';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';

/** Repo names are derived from project names; replace with real repositories. */
const slug = (name: string) => name.split(' /')[0].replace(/ /g, '-').toLowerCase();

export function Code() {
  return (
    <section id="code">
      <div className="wrap">
        <SectionHeading title="Don't just take my word for it." />
        <p>I believe good frontend work should be understandable in the code as well as visible in the browser.</p>
        <div className="repos">
          {projects.map((p) => (
            <ExternalLink className="repo" href={LINKS.github} key={p.name}>
              <b>{slug(p.name)}<span aria-hidden="true">↗</span></b>
              <p>{p.description}</p>
              <span className="mono">{p.technologies.slice(0, 3).join(' · ')}</span>
            </ExternalLink>
          ))}
        </div>
        <Button href={LINKS.github} external>Browse my GitHub</Button>
      </div>
    </section>
  );
}
