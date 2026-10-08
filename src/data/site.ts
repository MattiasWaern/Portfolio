import type { TextItem } from '../types';

export const EMAIL = 'waernmattias@gmail.com';
export const LINKS = {
  github: 'https://github.com/MattiasWaern',
  linkedin: 'https://www.linkedin.com/in/mattias-waern-5905a226a/',
  email: `mailto:${EMAIL}`,
} as const;

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_TECH = ['React', 'TypeScript', 'Node.js', 'SQL', 'Tailwind CSS'];
export const STRENGTHS = ['User experience', 'Clean architecture', 'Maintainability', 'APIs', 'Responsive design', 'Problem solving', 'Team collaboration'];

export const PHILOSOPHY: TextItem[] = [
  { title: 'Build', text: 'Get a working version in front of me early. A real screen teaches more than a plan.' },
  { title: 'Test', text: 'Click through it on a phone, break the inputs, read the console. Fix what I find.' },
  { title: 'Improve', text: 'Refactor, rename, split components, and leave the code easier for the next person.' },
];
export const PROCESS: TextItem[] = [
  { title: 'Understand', text: 'Who is it for, what are the requirements, and what problem is actually being solved.' },
  { title: 'Structure', text: 'Plan components, data shapes and routes before writing much UI.' },
  { title: 'Build', text: 'Implement the responsive interface and functionality in small, working steps.' },
  { title: 'Refine', text: 'Test, debug, improve the UX, and clean up the code.' },
];
export const JOURNEY: TextItem[] = [
  { title: 'Frontend development studies', text: 'Foundations in HTML, CSS, JavaScript, then React and TypeScript.' },
  { title: 'Projects', text: 'MatteExperten, Cinema / Filmvisarna and a car rental app, each pushing into a new area.' },
  { title: 'Team-based development', text: 'Working with Git, branches and shared codebases.' },
  { title: 'LIA / internship', text: 'Learning how real teams plan, review and ship.' },
  { title: 'Continuous learning', text: 'Currently deepening React, TypeScript, SQL, backend development and fullstack architecture.' },
];
export const BRING: TextItem[] = [
  { title: 'Frontend', text: 'Responsive, accessible and maintainable interfaces.' },
  { title: 'Problem solving', text: 'I enjoy breaking complex problems into smaller, understandable pieces.' },
  { title: 'Teamwork', text: 'Comfortable with Git, branches, code reviews and shared projects.' },
  { title: 'Fullstack mindset', text: 'Interested in the whole flow from UI to API to database.' },
];
