// Portfolio section design variants
export type HeroVariant = 'interactive-boxes' | 'spotlight' | 'shiny-text' | 'floating-shapes' | 'animated-border' | 'falling-snow';
export type AboutVariant = 'simple' | 'split' | 'modern' | 'cards';
export type ExperienceVariant = 'cards' | 'list' | 'accordion' | 'detailed' | 'timeline' | 'chain';
export type ProjectsVariant = 'grid' | 'carousel' | 'masonry' | 'featured' | 'minimal' | 'showcase';
export type SkillsVariant = 'bars' | 'tags' | 'circular' | 'categories' | 'grid' | 'minimal';
export type ContactVariant = 'simple' | 'split' | 'card' | 'floating' | 'minimal' | 'modern';

export type SkillsDisplay = 'hero' | 'separate';

export type ColorPalette = 'blue' | 'purple' | 'emerald' | 'rose' | 'amber' | 'slate' | 'cyan' | 'indigo' | 'orange' | 'teal';

// Pre-made templates
export type TemplateId = 'valentine';

export interface Template {
  id: TemplateId;
  name: string;
  description: string;
  config: Omit<SectionConfig, 'colorPalette'>;
}

export const templates: Template[] = [
  {
    id: 'valentine',
    name: '💕 Valentine',
    description: 'Romantic pink theme with floating hearts & love-inspired design',
    config: { hero: 'spotlight', about: 'split', experience: 'cards', projects: 'featured', skills: 'tags', skillsDisplay: 'separate', contact: 'floating' }
  }
];

export interface SectionConfig {
  hero: HeroVariant;
  about: AboutVariant;
  experience: ExperienceVariant;
  projects: ProjectsVariant;
  skills: SkillsVariant;
  skillsDisplay: SkillsDisplay;
  contact: ContactVariant;
  colorPalette: ColorPalette;
}

// Dynamic skills - categories are determined by the resume content
// e.g., { "Frontend": ["React", "Vue"], "Accounting": ["QuickBooks", "SAP"] }
export type SkillsGrouped = Record<string, string[]>;

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    title: string;
    company: string;
    dates: string;
    description: string;
    highlights: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    years: string;
    gpa?: string;
  }>;
  skills: SkillsGrouped;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link: string;
    github?: string;
  }>;
}

export interface PortfolioTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

export const defaultTheme: PortfolioTheme = {
  primary: '#2563eb',
  secondary: '#1e40af',
  background: '#ffffff',
  text: '#1f2937',
  accent: '#3b82f6',
};

export const defaultSectionConfig: SectionConfig = {
  hero: 'spotlight',
  about: 'split',
  experience: 'cards',
  projects: 'featured',
  skills: 'tags',
  skillsDisplay: 'separate',
  contact: 'floating',
  colorPalette: 'rose',
};
