import type { ReactNode } from 'react';

export interface Project {
    id: number;
    name: string;
    description: string;
    skills: ReactNode[];
    link: string;
    image: string;
}


export interface TerminalCommand{
    cmd: string;
    response: string;
}