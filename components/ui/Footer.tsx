"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, XIconBrand } from "@/components/ui/BrandIcons";

const QUOTES = [
  { text: "Small progress each day compounds into extraordinary outcomes.", author: "Robin Sharma" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "Consistency is what transforms average into excellence.", author: "Unknown" },
];

export default function Footer() {
  const [quoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("https://api.countapi.xyz/hit/kirantejz20005/devportfolio");
        if (!res.ok) return;
        const data = (await res.json()) as { value?: number };
        if (typeof data.value === "number") setVisitorCount(data.value);
      } catch {
        // silently keep fallback
      }
    };

    fetchCount();
  }, []);

  const visitorLabel = visitorCount ? visitorCount.toLocaleString("en-IN") : "--";
  const activeQuote = QUOTES[quoteIndex];

  return (
    <footer className="relative z-10 mt-12 border-t border-white/[0.06] py-8">
      <div className="mx-auto mb-8 grid max-w-3xl gap-4 px-6 md:grid-cols-[2fr_1fr] lg:px-0">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/35 p-5">
          <p className="text-sm leading-relaxed text-zinc-200">&quot;{activeQuote.text}&quot;</p>
          <p className="mt-2 text-xs text-zinc-500">- {activeQuote.author}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/35 p-5">
          <p className="text-sm text-zinc-300">
            You are the <span className="font-semibold text-zinc-100">{visitorLabel}</span> visitor
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-0">
        <p className="text-sm text-zinc-600">© 2026 Lanke Kiran Teja.</p>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/about" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            About
          </Link>
          <Link href="/services" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            Services
          </Link>
          <Link href="/#contact" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {[
            {
              href: "https://x.com/KiranTejz20005",
              label: "Twitter",
              render: () => <XIconBrand size={14} />,
            },
            {
              href: "mailto:kiranlanke824@gmail.com",
              label: "Email",
              render: () => <Mail size={14} strokeWidth={2} />,
            },
            {
              href: "https://github.com/KiranTejz20005",
              label: "GitHub",
              render: () => <GithubIcon size={14} />,
            },
          ].map(({ href, label, render }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-zinc-500 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-300"
            >
              {render()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
