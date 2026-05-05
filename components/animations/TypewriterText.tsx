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
  const [animate, setAnimate] = useState(true);
  const loopedSkills = [...skills, skills[0]];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAnimate(true);
      setSkillIndex((i) => i + 1);
    }, 1700);
    return () => window.clearInterval(timer);
  }, []);

  const onSlideEnd = () => {
    if (skillIndex !== skills.length) return;
    // Jump back to the first row without transition for a seamless loop.
    setAnimate(false);
    setSkillIndex(0);
  };

  useEffect(() => {
    if (animate) return;
    const id = window.setTimeout(() => setAnimate(true), 40);
    return () => window.clearTimeout(id);
  }, [animate]);

  return (
    <div className="h-[1.5em] w-full overflow-hidden text-sm text-zinc-500 sm:text-lg">
      <div
        className={`flex flex-col ${animate ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateY(-${skillIndex * 1.5}em)` }}
        onTransitionEnd={onSlideEnd}
      >
        {loopedSkills.map((skill, idx) => (
          <span key={`${skill}-${idx}`} className="h-[1.5em] font-mono leading-[1.5em]">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
