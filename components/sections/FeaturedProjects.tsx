"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-10 lg:px-0 md:py-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-inter mb-8 text-2xl font-semibold text-zinc-100 md:text-[28px]">Featured Projects</h2>
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
