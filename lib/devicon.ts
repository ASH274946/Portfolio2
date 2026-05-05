/** Devicon paths under devicons/devicon icons folder (no .svg). */
export const DEVICON_ICON: Partial<Record<string, string>> = {
  TypeScript: "typescript/typescript-original",
  JavaScript: "javascript/javascript-original",
  Python: "python/python-original",
  Java: "java/java-original",
  Dart: "dart/dart-original",
  Flutter: "flutter/flutter-original",
  "Node.js": "nodejs/nodejs-original",
  React: "react/react-original",
  "Next.js": "nextjs/nextjs-line",
  "Tailwind CSS": "tailwindcss/tailwindcss-plain",
  Express: "express/express-original",
  "Express.js": "express/express-original",
  FastAPI: "fastapi/fastapi-original",
  Vite: "vitejs/vitejs-original",
  PostgreSQL: "postgresql/postgresql-original",
  Firebase: "firebase/firebase-plain",
  Supabase: "supabase/supabase-original",
  SQLite: "sqlite/sqlite-original",
  TensorFlow: "tensorflow/tensorflow-original",
  Docker: "docker/docker-original",
  GCP: "googlecloud/googlecloud-original",
  Git: "git/git-original",
  GitHub: "github/github-original",
  MongoDB: "mongodb/mongodb-original",
  MySQL: "mysql/mysql-original",
  Figma: "figma/figma-original",
  Postman: "postman/postman-original",
  Nginx: "nginx/nginx-original",
};

const LOCAL_ICON: Partial<Record<string, string>> = {
  Cursor: "/images/skills/cursor.svg",
  n8n: "/images/skills/n8n.svg",
};

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export function deviconSrc(name: string): string | null {
  const local = LOCAL_ICON[name];
  if (local) return local;
  const path = DEVICON_ICON[name];
  if (!path) return null;
  return `${DEVICON_BASE}/${path}.svg`;
}
