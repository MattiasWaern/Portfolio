import { projects } from '../data/projects';
import { LINKS } from '../data/site';
import { Button } from '../components/Button';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';

const slug = (name: string) => name.split(' /')[0].replace(/ /g, '-').toLowerCase();

export function Code() {
  return (
    <section id="code">
      <div className="wrap">
        <SectionHeading title="Don't just take my word for it." />
        <div className="repos">
          {projects.map((project) => (
            <ExternalLink className="repo" href={project.githubUrl} key={project.name}>
              <b>{slug(project.name)}<span aria-hidden="true">↗</span></b>
              <p>{project.description}</p>
              <span className="mono">{project.technologies.slice(0, 3).join(' · ')}</span>
            </ExternalLink>
          ))}
        </div>
        <Button href={LINKS.github} external>Browse my GitHub</Button>
      </div>
    </section>
  );
}
