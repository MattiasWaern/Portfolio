import { FaGithub, FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs  } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiPostgresql, SiMapbox, SiOpenstreetmap, SiReactrouter, SiEslint,  SiFirebase, SiTailwindcss, SiTypescript, SiAxios , SiStrapi, SiSqlite} from 'react-icons/si';
// import { IoLogoFirebase } from "react-icons/io5";
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
  Firebase: <SiFirebase/>,
  Mapbox: <SiMapbox/>,
  OpenStreetMap: <SiOpenstreetmap/>,
  ReactRouter: <SiReactrouter/>,
  TailWind: <SiTailwindcss/>,
  TypeScript: <SiTypescript/>,
  Strapi: <SiStrapi/>,
  SqlLite : <SiSqlite/>,
  Axios: <SiAxios/>,
  NodeJs: <FaNodeJs/>,
  ESLint: <SiEslint/>
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