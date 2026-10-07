import type { Project } from '../types/index';


const ProjectsData: Project[] = [
  {
    id: 1,
    name: 'Milkshake Review',
    description: 'Spara, betygsätta och jämföra milkshakes från olika ställen, se statistik över dina recensioner och visualisera alla platser på en interaktiv karta.',
    skills: ['JavaScript', 'React', 'TailWind', 'HTML', 'Firebase', 'Mapbox', 'OpenStreetMap', 'ReactRouter'],
    image: 'Milkshake.png',
    githubLink: 'https://github.com/MattiasWaern/Milkshake-Review',
    link: 'https://mattiaswaern.github.io/Milkshake-Review/'
  },
    {
    id: 2,
    name: 'Filmvisarna',
    description: 'Skapa konto, välja film, välj sittplats, välj biljett få bekräftelse i email',
    skills: ['React', 'TypeScript'],
    image: 'Myreads.png',
    githubLink: 'https://github.com/MattiasWaern/GruppC-Frontend-projekt',
    link: ''
  },  
    {
    id: 3,
    name: 'GoodReads kopia',
    description: 'Man kan skapa konto, recensera böcker, markera böcker som favorit, söka efter författare och boktitel, samt uppdatera hur långt man har läst en bok.',
    skills: ['React', 'Axios', 'SqlLite', 'TailWind', 'NodeJs', 'JWT', 'bcryptjs', 'ESLint', 'ReactRouter'],
    image: 'Myreads.png',
    githubLink: 'https://github.com/MattiasWaern/fullstack',
    link: ''
  },  
    {
    id: 4,
    name: 'MatteSida',
    description: 'Projektet låter användare skapa ett konto, lösa mattefrågor och följa sin utveckling över tid. Eftersom användardata sparas i en databas kan man logga in från olika enheter, exempelvis både dator och iPad.',
    skills: ['React', 'CSS', 'SqlLite', 'NodeJs', 'ReactRouter'],
    image: 'MatteSida.png',
    githubLink: 'https://github.com/MattiasWaern/MatteSida',
    link: 'https://matte-sida.vercel.app/'
  }, 
  {
    id: 5,
    name: 'GoRide',
    description: 'Ett webbprojekt där man bokar bilar efter datum, Välj start och slut-datum, Få upp lediga bilar, Välj bil, Boka med mail',
    skills: ['React', 'TypeScript', 'RestAPI', 'CSS'],
    image: 'GoRide.png',
    githubLink: 'https://github.com/MattiasWaern/Grupp-3-TypeScript-Examinerande-gruppuppgift',
    link: ''
  },
  {
    id: 6,
    name: 'The Selling Point',
    description: 'The Selling Point är en marketplace-applikation där användare kan Skapa konto/login Utforska annonser Köpa produkter Sälja produkter Kontakta säljare Lägga upp egna annonser Logga in som admin Projektet är utvecklat som ett skolprojekt inom kursen Javascript 3 på KYH.',
    skills: ['React', 'SqlLite', 'Strapi', 'CSS'],
    image: 'Marketplace.png',
    githubLink: 'https://github.com/MattiasWaern/Grupp-3-marketplace',
    link: ''
  },   
];

export default ProjectsData;