export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: ProjectCategory;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export enum ProjectCategory {
  WEB = "Web Development",
  MOBILE = "Mobile Development",
  API = "API Development",
  DESKTOP = "Desktop Application",
  AI_ML = "AI/ML",
  GAME = "Game Development",
  OTHER = "Other",
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 1-10 scale
  icon?: string;
}

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  MOBILE = "Mobile",
  DEVOPS = "DevOps",
  DESIGN = "Design",
  OTHER = "Other",
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  isCurrentPosition: boolean;
  skills: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
