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
  },

  {
    name: "Filmvisarna",
    image: {
      src: Filmvisarna,
      alt: "MatteExperten på iPad med övningar i kategorin algebra",
      width: 1200,
      height: 750,
    },
    description:
      "A modern cinema web app for browsing films and exploring a booking flow, with a strong database foundation.",
    technologies: ["React", "TypeScript", "SQL", "REST API"],
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
      "A React + TypeScript app for browsing and booking rental cars, built around application architecture.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "REST API",
      "JSON Server",
    ],
    
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
      "A React app for reviewing milkshakes, built for learing React.",
    technologies: ["React", "JavaScript", "TailWind", "Firebase", "Mapbox", "OpenStreetMap", "ReactRouter"],
  },
];
