import { FaGithub, FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiPostgresql } from 'react-icons/si';
import type { ReactNode } from 'react';

const ICONS: Record<string, ReactNode> = {
  GitHub: <FaGithub />,
  React: <FaReact />,
  Python: <FaPython />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  Django: <SiDjango />,
  PostgreSQL: <SiPostgresql />,
};

interface Props {
  skill: string;
}

export function SkillIcon({ skill }: Props) {
  const icon = ICONS[skill];

  return (
    <span className="skill-pill">
      {icon && <span className="skill-pill-icon">{icon}</span>}
      {skill}
    </span>
  );
}