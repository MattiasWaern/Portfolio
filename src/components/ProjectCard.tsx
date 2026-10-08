import { useState } from 'react';
import type { Project } from '../types';
import { LINKS } from '../data/site';
import { Button } from './Button';

const Bullets = ({ items }: { items: string[] }) => <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const caseId = `case-${index}`;
  const c = project.caseStudy;
  return (
    <article className="proj" aria-labelledby={`project-${index}`}>
      <div className="ph">
        <div className="pv" aria-hidden="true">
          <i className="g" style={{ width: '40%' }} /><i style={{ width: '70%' }} />
          <div className="blk"><i /><i /><i /></div>
          <i style={{ width: '55%' }} /><i className="g" style={{ width: '25%' }} />
        </div>
        <div className="pb">
          <h3 id={`project-${index}`}>{project.name}</h3>
          <p className="mu">{project.description}</p>
          <div className="chips" style={{ margin: '0 0 1rem' }}>
            {project.technologies.map((t) => <span className="chip" key={t}>{t}</span>)}
          </div>
          <div className="sp">
            <div><h4>Problem</h4><p>{project.problem}</p></div>
            <div><h4>Solution</h4><p>{project.solution}</p></div>
            <div><h4>What I learned</h4><p>{project.learned}</p></div>
          </div>
          <div className="pa">
            <Button variant="primary" aria-expanded={open} aria-controls={caseId} onClick={() => setOpen((o) => !o)}>
              {open ? 'Hide case study' : 'Read case study'}
            </Button>
            <Button href={LINKS.github} external>GitHub</Button>
          </div>
        </div>
      </div>
      <div className={`case${open ? ' open' : ''}`} id={caseId}>
        <h4>Overview</h4><p>{c.overview}</p>
        <h4>The challenge</h4><p>{c.challenge}</p>
        <h4>My approach</h4><p>{c.approach}</p>
        <h4>Technical decisions</h4><Bullets items={c.decisions} />
        <h4>Difficult parts</h4><Bullets items={c.difficulties} />
        <h4>What I learned</h4><p>{c.learned}</p>
      </div>
    </article>
  );
}
