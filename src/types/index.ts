export interface Layer {
  name: string;
  subtitle: string;
  description: string;
}
export interface TechItem {
  name: string;
}
export interface TechGroup {
  category: string;
  items: TechItem[];
}
export interface TextItem {
  title: string;
  text: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: { src: string; alt: string; width: number; height: number };
  githubUrl: string;
  livePreview: string;
}
