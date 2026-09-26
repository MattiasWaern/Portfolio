import ProjectsData from '../data/ProjectsData';
import { SkillIcon } from './SkillIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../../styles/Projects.css';

function ProjectCard({ project }: { project: (typeof ProjectsData)[number] }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`project-card reveal ${visible ? 'is-visible' : ''}`}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        decoding="async"
      />

      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <div className="project-skills">
        {project.skills.map(skill => (
          <SkillIcon key={skill} skill={skill} />
        ))}
      </div>

      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      ) : (
        <span className="project-link-disabled">Kommer snart</span>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="projects">
      {ProjectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;