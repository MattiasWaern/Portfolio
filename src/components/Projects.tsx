import React from 'react';
import type { ReactNode } from 'react';
import projects from '../data/ProjectsData.tsx'
import "../styles/Projects.css"; 

interface Project {
    id: number;
    name: string;
    description: string;
    skills: ReactNode[];
    link: string;
    image: string;
}

function Projects(){

return (
        <>
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <h2>{project.name}</h2>

                    <p>{project.description}</p>

                    <div className="project-skills">
                        {project.skills.map((skill, index) => (
                            <span key={index}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>

                    <img
                        src={project.image}
                        alt={project.name}
                    />
                </div>
            ))}
        </>
    );

}


export default Projects;