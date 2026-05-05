"use client";

import { motion } from "framer-motion";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-10 lg:px-0 md:py-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-inter mb-4 text-2xl font-semibold text-zinc-100 md:text-[28px]">Experience</h2>
      <div>
        {experience.map((e) => (
          <ExperienceItem key={`${e.company}-${e.period}`} {...e} />
        ))}
      </div>
    </motion.section>
  );
}
