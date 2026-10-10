import { projects } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeading
          title="Things I've built"
          intro="Each project was either developed solo or as part of a group project in school"
        />
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
