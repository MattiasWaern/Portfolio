import type { Project } from '../types/index';


const ProjectsData: Project[] = [
  {
    id: 1,
    name: 'Milkshake Review',
    description: 'Spara, betygsätta och jämföra milkshakes från olika ställen, se statistik över dina recensioner och visualisera alla platser på en interaktiv karta.',
    skills: ['JavaScript', 'React', 'TailWind', 'HTML', 'Firebase', 'Mapbox', 'OpenStreetMap'],
    image: 'Milkshake.png',
    githubLink: 'https://github.com/MattiasWaern/Milkshake-Review',
    link: 'https://mattiaswaern.github.io/Milkshake-Review/'
  },
  {
    id: 2,
    name: 'MatteSida',
    description: 'Projektet låter användare skapa ett konto, lösa mattefrågor och följa sin utveckling över tid. Eftersom användardata sparas i en databas kan man logga in från olika enheter, exempelvis både dator och iPad.',
    skills: ['Python', 'Django', 'PostgreSQL'],
    image: 'MatteSida.png',
    githubLink: 'https://github.com/MattiasWaern/MatteSida',
    link: ''
  },
  {
    id: 3,
    name: 'GoRide',
    description: 'Ett webbprojekt där man bokar bilar efter datum, Välj start och slut-datum, Få upp lediga bilar, Välj bil, Boka med mail',
    skills: ['React', 'TypeScript', 'RestAPI', 'CSS'],
    image: 'GoRide.png',
    githubLink: 'https://github.com/MattiasWaern/Grupp-3-TypeScript-Examinerande-gruppuppgift',
    link: ''
  },
  {
    id: 4,
    name: 'The Selling Point',
    description: 'The Selling Point är en marketplace-applikation där användare kan Skapa konto/login Utforska annonser Köpa produkter Sälja produkter Kontakta säljare Lägga upp egna annonser Logga in som admin',
    skills: ['React', 'SqlLite', 'Strapi', 'CSS'],
    image: 'Marketplace.png',
    githubLink: 'https://github.com/MattiasWaern/Grupp-3-marketplace',
    link: ''
  },  
  {
    id: 5,
    name: 'GoodReads kopia',
    description: 'Man kan skapa konto, recensera böcker, markera böcker som favorit, söka efter författare och boktitel, samt uppdatera hur långt man har läst en bok.',
    skills: ['Python', 'Django', 'PostgreSQL'],
    image: 'Marketplace.png',
    githubLink: 'https://github.com/MattiasWaern/Grupp-3-marketplace',
    link: ''
  },    
];

export default ProjectsData;