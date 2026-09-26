import type { Project } from '../types/index';


const ProjectsData: Project[] = [
  {
    id: 1,
    name: 'Milkshake Review',
    description: 'A simple project to demonstrate the concept.',
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Firebase', 'Mapbox', 'OpenStreetMap'],
    image: 'Milkshake.png',
    githubLink: 'https://github.com/MattiasWaern/Milkshake-Review',
    link: 'https://mattiaswaern.github.io/Milkshake-Review/'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Another project to showcase different skills.',
    skills: ['Python', 'Django', 'PostgreSQL'],
    image: 'test.jpg',
    githubLink: '',
    link: ''
  },
];

export default ProjectsData;