export interface Layer { name: string; subtitle: string; description: string }
export interface TechItem { name: string; level: string; usage: string; example: string }
export interface TechGroup { category: string; items: TechItem[] }
export interface TextItem { title: string; text: string }
export interface CaseStudy {
  overview: string;
  challenge: string;
  approach: string;
  decisions: string[];
  difficulties: string[];
  learned: string;
}
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  learned: string;
  caseStudy: CaseStudy;
}
