export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  url: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}
