export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: 'Active' | 'In Progress' | 'Shipped' | 'Experiment';
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const personalInfo = {
  name: "Mark Okedoyin",
  title: "Builder & Developer",
  location: "Based on Earth",
  bio: "I build software with a focus on simplicity, performance, and clean design. Currently exploring systems, web architecture, and creating focused tools.",
  currentlyLearning: "Deepening my knowledge of distributed systems, efficient web applications, and developer tooling.",
  socials: {
    github: "https://github.com/nxemark",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@markokedoyin.com"
  }
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A minimal, lightning-fast utility designed to streamline developer workflows and command-line interactions.",
    tags: ["TypeScript", "Node.js", "CLI"],
    status: "In Progress",
    githubUrl: "https://github.com/nxemark",
    featured: true
  },
  {
    title: "Core Services Hub",
    description: "An exploratory backend microservice architecture focused on clean API design, resilience, and minimal footprint.",
    tags: ["Go", "REST API", "Docker"],
    status: "Experiment",
    githubUrl: "https://github.com/nxemark",
    featured: true
  },
  {
    title: "markokedoyin.com",
    description: "My personal corner of the web. Built with Astro and Tailwind CSS for speed, elegance, and zero-bloat delivery.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    status: "Shipped",
    liveUrl: "https://markokedoyin.com",
    githubUrl: "https://github.com/nxemark/markokedoyin",
    featured: true
  }
];
