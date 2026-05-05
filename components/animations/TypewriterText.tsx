"use client";

import { useState, useEffect } from "react";

const skills = [
  "React Developer",
  "Flutter Developer",
  "Node.js + FastAPI",
  "Full-Stack Builder",
  "Problem Solver",
];

export default function TypewriterText() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSkillIndex((i) => (i + 1) % skills.length);
    }, 1700);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="h-[1.5em] w-full overflow-hidden text-sm text-zinc-500 sm:text-lg">
      <div
        className="flex flex-col transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${skillIndex * 1.5}em)` }}
      >
        {skills.map((skill) => (
          <span key={skill} className="h-[1.5em] font-mono leading-[1.5em]">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
