import type { Project } from "../types";
import { Button } from "./Button";


export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {

  return (
    <article className="proj" aria-labelledby={`project-${index}`}>
      <div className="ph">
        <div className="pv">
          <img src={project.image.src} alt={project.image.alt}
              width={project.image.width} height={project.image.height}
              loading="lazy" decoding="async" />
        </div>
        <div className="pb">
          <h3 id={`project-${index}`}>{project.name}</h3>
          <p className="mu">{project.description}</p>
          <div className="chips" style={{ margin: "0 0 1rem" }}>
            {project.technologies.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="sp">
          </div>
          <div className="pa">
            <Button href={project.githubUrl} external>
              GitHub
            </Button>
            <Button href={project.livePreview} external>
              Live preview
            </Button>            
          </div>
        </div>
      </div>
    </article>
  );
}
