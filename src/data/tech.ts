import type { TechGroup } from '../types';

type Raw = [string, [string, string, string, string][]][];

const raw: Raw = [
["Frontend",[["React","Comfortable","Components, hooks, routing","MatteExperten"],["TypeScript","Working knowledge · learning","Typed props and API data","Car Rental"],["JavaScript","Comfortable","Logic and DOM behaviour","MatteExperten"],["HTML","Comfortable","Semantic, accessible markup","All projects"],["CSS","Comfortable","Layouts, responsive design","MatteExperten"],["Tailwind CSS","Working knowledge","Utility-first styling","Personal projects"],["Sass","Working knowledge","Structured stylesheets","Personal projects"]]],
["Backend / Data",[["Node.js","Currently learning","Servers and tooling","Cinema"],["REST APIs","Working knowledge","Fetching, modelling endpoints","Car Rental"],["SQL","Currently learning","Schemas, relations, queries","Cinema"]]],
["Tools",[["Git","Comfortable","Branches, merges, history","Team projects"],["GitHub","Comfortable","Collaboration, reviews","Team projects"],["Vite","Comfortable","Dev server and builds","All projects"],["VS Code","Comfortable","Daily editor","All projects"]]]]

export const techGroups: TechGroup[] = raw.map(([category, items]) => ({
  category,
  items: items.map(([name, level, usage, example]) => ({ name, level, usage, example })),
}));
