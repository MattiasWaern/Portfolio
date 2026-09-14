import React from 'react';
import projects from '../data/ProjectsData.ts' 

interface Project {
    id: number;
    name: string;
    description: string;
    skills: string[];
    link: string;
    image: string;
}

function Projects(){

return(
     (projects as Project[]).map((project: Project) => (
        <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Technologies Used: {project.skills.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <img src={project.image} alt={project.name}/>
        </div>
    ))
)

}


export default Projects;