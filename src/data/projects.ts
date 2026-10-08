import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "MatteExperten",
    description:
      "A responsive React platform for practising Mathematics 2, built for desktop and iPad.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    problem:
      "Students need focused practice that works on a tablet and doesn't overwhelm them.",
    solution:
      "Exercises grouped by category, with progress-oriented feedback and touch-friendly layouts.",
    learned:
      "Designing for one-handed tablet use changed my layout decisions more than any framework choice.",
    caseStudy: {
      overview:
        "A practice site for Mathematics 2 with interactive exercises across different categories.",
      challenge:
        "Make practice feel structured and quick to start, on both desktop and iPad.",
      approach:
        "Split the content into categories, build reusable exercise components, and keep the interface simple enough that the maths is the focus.",
      decisions: [
        "Exercise logic separated from presentation so new categories are easy to add.",
        "Responsive layout designed for iPad as a first-class target.",
        "Vite for a fast feedback loop.",
      ],
      difficulties: [
        "Keeping exercise state predictable while users move between categories.",
        "Making touch targets and spacing work across screen sizes.",
      ],
      learned:
        "I'd add TypeScript from the start next time, so exercise data has a clear shape.",
    },
  },
  {
    name: "Cinema / Filmvisarna",
    description:
      "A modern cinema web app for browsing films and exploring a booking flow, with a strong database foundation.",
    technologies: ["React", "TypeScript", "SQL", "REST API"],
    problem:
      "Films, screenings and bookings are tightly related data that must stay consistent.",
    solution:
      "A relational model for films, screenings and bookings, exposed through a REST API to a typed React UI.",
    learned:
      "Time spent on the data model made the UI and API far easier to write.",
    caseStudy: {
      overview:
        "A cinema application where users browse movies and screenings, with the structure for booking.",
      challenge:
        "Model events and bookings so the interface never shows data that contradicts the database.",
      approach:
        "Start from the database relationships, define the API around them, then build the UI on typed responses.",
      decisions: [
        "Relational tables for movies, screenings and bookings.",
        "REST endpoints that mirror the data model.",
        "TypeScript types for API responses used in React components.",
      ],
      difficulties: [
        "Getting relationships and queries right.",
        "Keeping frontend types aligned with what the API returns.",
      ],
      learned:
        "Data modelling is a skill of its own, and the one I'm investing in next.",
    },
  },
  {
    name: "Car Rental Application",
    description:
      "A React + TypeScript app for browsing and booking rental cars, built around application architecture.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "REST API",
      "JSON Server",
    ],
    problem:
      "A booking app must stop users from reserving a car that is already taken.",
    solution:
      "Dynamic routes, a generic typed API layer, and date overlap validation on bookings.",
    learned:
      "A generic API helper removed a lot of duplicated fetch code and made types do real work.",
    caseStudy: {
      overview:
        "A rental app for browsing cars and booking them for chosen dates.",
      challenge:
        "Handle booking state and prevent overlapping reservations while keeping components reusable.",
      approach:
        "Use React Router for dynamic car pages, one generic typed API layer, and shared components across lists and detail views.",
      decisions: [
        "Generic API handling typed per resource.",
        "Dynamic routes for car detail and booking.",
        "Date overlap validation before a booking is saved.",
        "JSON Server as a stand-in REST backend.",
      ],
      difficulties: [
        "Date overlap logic and its edge cases.",
        "Keeping booking state consistent across routes.",
      ],
      learned:
        "This project taught me to design the data flow first; the components followed naturally.",
    },
  },
];
