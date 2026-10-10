import type { TextItem } from '../types';

export const EMAIL = 'waernmattias@gmail.com';
export const LINKS = {
  github: 'https://github.com/MattiasWaern',
  linkedin: 'https://www.linkedin.com/in/mattias-waern-5905a226a/',
  email: `mailto:${EMAIL}`,
} as const;

export const NAV_LINKS = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_TECH = ['React', 'TypeScript', 'Node.js', 'SQL', 'Tailwind CSS'];
export const STRENGTHS = ['User experience', 'Clean architecture', 'Maintainability', 'APIs', 'Responsive design', 'Problem solving', 'Team collaboration'];

export const JOURNEY: TextItem[] = [
  { title: 'Gymnasium Studies', text: 'Foundations in HTML, CSS, JavaScript.' },
  { title: 'Frontend development studies', text: 'Expanded my understanding of JavaScript, React, TypeScript & backend development' },
  { title: 'Creating solo projects during my studies', text: 'MatteExperten, Milkshake Reviews, each pushing into a new area.' },
  { title: 'Later went on to create Team-based development', text: 'Working with Git and shared codebases.' },
  { title: 'LIA / internship', text: 'Learning how real teams plan, review and ship.' },
  { title: 'Continuous learning', text: 'Currently deepening React, TypeScript, SQL, backend development and fullstack architecture.' },
];
export const BRING: TextItem[] = [
  { title: 'Frontend', text: 'Responsive, accessible and maintainable interfaces.' },
  { title: 'Problem solving', text: 'I enjoy breaking complex problems into smaller, understandable pieces.' },
  { title: 'Teamwork', text: 'Comfortable with Git, branches, code reviews and shared projects.' },
  { title: 'Fullstack mindset', text: 'Interested in the whole flow from UI to API to database.' },
];
