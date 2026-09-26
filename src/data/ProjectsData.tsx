import { FaGithub } from "react-icons/fa";
import type { Project } from '../types/index';

const ProjectsData = [
    {
        id: 1,
        name: "Project 1",
        description: "A simple project to demonstrate the concept.",
        skills: ["JavaScript", "React", "CSS", "HTML", <FaGithub/>, <FaGithub/>, <FaGithub/>],
        image: "project1.png",
        link: ""
    },

    {
        id: 2,
        name: "Project 2",
        description: "Another project to showcase different skills.",
        skills: ["Python", "Django", "PostgreSQL"],
        image: "project2.png",
        link: ""
    }
]



export default ProjectsData;