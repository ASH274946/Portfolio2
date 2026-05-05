"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { LinkedInIcon, XIconBrand } from "@/components/ui/BrandIcons";

type ContactCard = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon | "x" | "linkedin";
};

function CardGlyph({ icon }: { icon: ContactCard["icon"] }) {
  if (icon === "x") return <XIconBrand size={18} className="text-zinc-400" />;
  if (icon === "linkedin") return <LinkedInIcon size={18} className="text-zinc-400" />;
  const I = icon;
  return <I size={18} strokeWidth={1.5} className="text-zinc-400" />;
}

const cards: ContactCard[] = [
  {
    title: "kiranlanke824@gmail.com",
    subtitle: "Quick inquiries & collaborations",
    href: "mailto:kiranlanke824@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    subtitle: "Experience, projects, and updates",
    href: "https://www.linkedin.com/in/kirantejalanke/",
    icon: "linkedin",
  },
  {
    title: "Connect on X",
    subtitle: "Follow for updates & insights",
    href: "https://x.com/KiranTejz20005",
    icon: "x",
  },
];

const cardClass =
  "group block cursor-pointer rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-sm transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-900/45 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.65)]";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h2 className="font-inter mb-10 text-center text-2xl font-semibold text-zinc-100 md:text-[28px]">
        Let&apos;s Work Together
      </h2>

      <h3 className="mb-2 text-lg font-semibold text-zinc-200">Get in Touch</h3>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
        Choose your preferred method to connect and let&apos;s discuss your project.
      </p>
      <div className="grid gap-4 md:grid-cols-3 md:gap-3 lg:gap-4">
        {cards.map(({ title, subtitle, href, icon }) => (
          <a
            key={title}
            href={href}
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className={cardClass}
          >
            <div className="mb-3 flex items-center gap-2 text-zinc-500 transition-colors duration-200 ease-out group-hover:text-zinc-300">
              <CardGlyph icon={icon} />
            </div>
            <p className="font-inter font-medium text-zinc-200">{title}</p>
            <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-zinc-600">
        Response within 24 hours • Available for hire
      </p>

      <h3 className="mb-2 mt-14 text-lg font-semibold text-zinc-200">Send a Message</h3>
      <p className="mb-4 text-sm text-zinc-500">
        Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.
      </p>
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/25 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-zinc-700/80">
        <ContactForm />
      </div>
    </motion.section>
  );
}
