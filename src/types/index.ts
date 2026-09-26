export interface Project {
    id: number;
    name: string;
    description: string;
    skills: string[];
    githubLink: string;
    link: string;
    image: string;
}


export interface TerminalCommand{
    cmd: string;
    response: string;
}