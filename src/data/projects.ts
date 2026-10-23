import type { Project } from "../types";
const MatteSida = new URL("../assets/MatteSida.png", import.meta.url).href;
const Milkshake = new URL("../assets/Milkshake.png", import.meta.url).href;
const MyReads = new URL("../assets/Myreads.png", import.meta.url).href;
const GoRide = new URL("../assets/GoRide.png", import.meta.url).href;
const Filmvisarna = new URL("../assets/Filmvisarna.png", import.meta.url).href;
const Portfolio = new URL("../assets/Portfolio.png", import.meta.url).href;

export const projects: Project[] = [
  {
    name: "MatteExperten",
    image: {
      src: MatteSida,
      alt: "MatteExperten",
      width: 1200,
      height: 750,
    },
    description:
      "A responsive React platform for practising Mathematics 2, built for desktop and iPad.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    githubUrl: "https://github.com/MattiasWaern/MatteSida",
  },

  {
    name: "Filmvisarna",
    image: {
      src: Filmvisarna,
      alt: "The project doesn't have frontend yet that's why there's no picture...",
      width: 1200,
      height: 750,
    },
    description:
      "A modern cinema web app for browsing films and exploring a booking flow, with a strong database foundation.",
    technologies: ["React", "TypeScript", "SQL", "REST API"],
    githubUrl: "https://github.com/MattiasWaern/GruppC-Frontend-projekt",
  },
{
    name: "Portfolio",
    image: {
      src: Portfolio,
      alt: "Picture of my Portfolio landing page",
      width: 1200,
      height: 750,
    },
    description:
      "A React + TypeScript app for showing my Portfolio.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "EMAILJS"
    ],
    githubUrl: "https://github.com/MattiasWaern/Portfolio",
  },  
  {
    name: "Car Rental Application",
    image: {
      src: GoRide,
      alt: "Bild på GoRides startsida",
      width: 1200,
      height: 750,
    },
    description:
      "A React + TypeScript app for browsing and booking rental cars, built around application architecture.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "REST API",
      "JSON Server",
    ],
    githubUrl: "https://github.com/MattiasWaern/Grupp-3-TypeScript-Examinerande-gruppuppgift",
  },

  {
    name: "Milkshake Reviewer",
    image: {
      src: Milkshake,
      alt: "Bild på Milkshake Reviewers starsida",
      width: 1200,
      height: 750,
    },
    description:
      "A React app for reviewing milkshakes, built for learing React.",
    technologies: ["React", "JavaScript", "TailWind", "Firebase", "Mapbox", "OpenStreetMap", "ReactRouter"],
    githubUrl: "https://github.com/MattiasWaern/Milkshake-Review",
  },
  {
    name: "MyReads",
    image: {
      src: MyReads,
      alt: "MyReads startsida",
      width: 1200,
      height: 750,
    },
    description:
      "A React app for trying to learn SQL",
    technologies: ["React", "JavaScript", "TailWind", "SQLite", "ReactRouter", "BCRYPT", "JTW"],
    githubUrl: "https://github.com/MattiasWaern/fullstack",
  },
];
