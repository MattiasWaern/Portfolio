import { projects } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeading
          title="Things I've built"
          intro="Each project opens into a short case study, including what was hard and what I'd do differently."
        />
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
