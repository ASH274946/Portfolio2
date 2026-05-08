export interface TechEntry {
  name: string;
  slug: string | null;
}

export type ProjectTech = TechEntry;

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: ProjectTech[];
  githubUrl?: string;
  websiteUrl?: string;
}

export interface ExperienceEntry {
  logo: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  bullets: string[];
}

export const techStack: TechEntry[] = [
  { name: "Python", slug: "python" },
  { name: "Java", slug: "java" },
  { name: "Dart", slug: "dart" },
  { name: "Flutter", slug: "flutter" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vite", slug: "vite" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase", slug: "supabase" },
  { name: "SQLite", slug: "sqlite" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "Docker", slug: "docker" },
  { name: "GCP", slug: "googlecloud" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "Postman", slug: "postman" },
  { name: "Cursor", slug: "cursor" },
];

export const projects: Project[] = [
  {
    title: "Kiden Hub",
    description:
      "All-in-one productivity workspace: task management, focus tracking, and personal analytics with a Kanban board, Markdown notes, and offline-first sync to Supabase.",
    image: "/images/projects/kiden-hub.svg",
    githubUrl: "https://github.com/KiranTejz20005",
    tech: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Supabase", slug: "supabase" },
    ],
  },
  {
    title: "Fillora",
    description:
      "Mobile app to automate repetitive form filling with AI-assisted inputs, voice-to-text, multilingual support, and privacy-first local storage with biometrics and PDF export.",
    image: "/images/projects/fillora.svg",
    githubUrl: "https://github.com/KiranTejz20005",
    tech: [
      { name: "Flutter", slug: "flutter" },
      { name: "Dart", slug: "dart" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    title: "Greendot",
    description:
      "Farmer’s assistant: crop disease identification from photos, real-time market prices, smart irrigation and harvest reminders, with offline-friendly caching for rural connectivity.",
    image: "/images/projects/greendot.svg",
    githubUrl: "https://github.com/KiranTejz20005",
    tech: [
      { name: "Flutter", slug: "flutter" },
      { name: "Firebase", slug: "firebase" },
      { name: "TensorFlow", slug: "tensorflow" },
    ],
  },
  {
    title: "MailX",
    description:
      "ML-based email classification into work, personal, and spam using NLP feature extraction and tuned models so important messages surface reliably.",
    image: "/images/projects/mailx.svg",
    githubUrl: "https://github.com/KiranTejz20005",
    tech: [
      { name: "Python", slug: "python" },
      { name: "React", slug: "react" },
      { name: "n8n", slug: "n8n" },
    ],
  },
  {
    title: "FinScribe",
    description:
      "Financial report generator: structured MD&A-style reports from raw financial data via a FastAPI backend and responsive React frontend.",
    image: "/images/projects/finscribe.svg",
    githubUrl: "https://github.com/KiranTejz20005",
    tech: [
      { name: "React", slug: "react" },
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    logo: "/images/company-logos/lifemonk.svg",
    role: "Full-Stack Developer",
    company: "LifeMonk",
    location: "Hyderabad, India",
    period: "Jan 2026 – Apr 2026",
    summary:
      "Educational platform with Vite CMS admin, React Expo mobile app, and Xano backend—challenges, courses, and school-scoped data.",
    bullets: [
      "Built and debugged the platform; fixed critical school-level data isolation and course mapping with per-school templates",
      "Designed Challenges across CMS and mobile (course linking, time periods); managed 50+ Xano APIs with entitlement handling",
    ],
  },
  {
    logo: "/images/company-logos/swecha.svg",
    role: "SoAI Hybrid Intern",
    company: "Swecha",
    location: "Hyderabad, India",
    period: "2025",
    summary:
      "LLM inference in production: scalable APIs, latency optimization, and reliability under load.",
    bullets: [
      "Deployed inference pipelines from local checkpoints to APIs handling 1000+ req/min",
      "Token-level optimizations and attention caching cut latency ~40% under concurrency; monitoring and fallbacks for ~99.5% uptime",
    ],
  },
  {
    logo: "/images/company-logos/aicte.svg",
    role: "AIML Virtual Intern",
    company: "AICTE Remote",
    location: "Remote",
    period: "2023",
    summary:
      "Supervised learning on multiple datasets with full ML pipelines from preprocessing through evaluation.",
    bullets: [
      "Tuned models to 85–92% accuracy on classification tasks across five datasets",
      "Built end-to-end workflows: preprocessing, feature engineering, training, and evaluation",
    ],
  },
  {
    logo: "/images/company-logos/hcl.svg",
    role: "Networking Development Intern",
    company: "HCL Tech Bee Scholar",
    location: "Lucknow, India",
    period: "2022 – 2023",
    summary:
      "Production network diagnostics, QoS improvements, and Python automation for monitoring and logs.",
    bullets: [
      "Resolved 20+ network bottlenecks; QoS changes improved throughput ~35%",
      "Python automation for monitoring and log analysis cut troubleshooting from hours to minutes per incident",
    ],
  },
];

export const services = [
  { title: "Web Development", tagline: "Pixel-perfect websites that actually convert." },
  { title: "Custom Web Development", tagline: "No templates. No compromises. Built from scratch." },
  { title: "Full-Stack Development", tagline: "Frontend to backend. Database to deployment." },
  { title: "Next.js Development", tagline: "The React framework for production-grade apps." },
  { title: "React Development", tagline: "Component-driven UIs that users love." },
  { title: "Node.js Development", tagline: "Scalable backends built for the real world." },
  { title: "API Development", tagline: "Clean, documented, and production-ready APIs." },
  { title: "Backend Development", tagline: "The engine behind every great application." },
  { title: "Frontend Development", tagline: "Interfaces that feel as good as they look." },
  { title: "Startup MVP Development", tagline: "Ship your idea in weeks, not months." },
  { title: "SaaS Development", tagline: "Build your software-as-a-service from the ground up." },
  { title: "Web App Development", tagline: "Web applications that feel like native apps." },
  { title: "Dashboard Development", tagline: "Turn your data into decisions." },
  { title: "Automation Development", tagline: "Automate the boring stuff. Focus on what matters." },
  { title: "AI Integration", tagline: "Add intelligence to your application." },
  { title: "Performance Optimization", tagline: "Make your slow site embarrassingly fast." },
  { title: "Website Redesign", tagline: "Breathe new life into your online presence." },
  { title: "Landing Page Development", tagline: "One page. One goal. Maximum conversions." },
  { title: "E-Commerce Development", tagline: "Online stores that sell, not just display." },
  { title: "Database Design", tagline: "The foundation your data deserves." },
  { title: "Cloud Deployment", tagline: "Ship to production with confidence." },
  { title: "DevOps Setup", tagline: "Automate your development workflow." },
  { title: "Maintenance & Support", tagline: "Keep your app running, updated, and secure." },
];

export function techIconSrc(slug: string | null): string | null {
  if (!slug) return null;
  return `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`;
}
