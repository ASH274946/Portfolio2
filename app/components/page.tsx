"use client";

import { useState, type ReactNode } from "react";
import TypewriterText from "@/components/animations/TypewriterText";
import Badge from "@/components/ui/Badge";
import { Check, ClipboardCopy } from "lucide-react";

const snippets = [
  {
    title: "Available badge",
    description: "Pulsing green dot plus muted caption.",
    code: `<div className="flex items-center gap-2 text-sm text-[#888]">
  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_0_rgba(74,222,128,0.5)]" style={{ animation: 'pulseGreen 2s ease-in-out infinite' }} />
  <span>Available for work</span>
</div>`,
    preview: (
      <div className="flex items-center gap-2 text-sm text-[#888]">
        <span
          className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_0_rgba(74,222,128,0.5)]"
          style={{ animation: "pulseGreen 2s ease-in-out infinite" }}
        />
        <span>Available for work</span>
      </div>
    ),
  },
  {
    title: "Typewriter roles",
    description: "Terminal-flavored cycling subtitle.",
    code: `<TypewriterText />`,
    preview: (
      <div className="max-w-md">
        <TypewriterText />
      </div>
    ),
  },
  {
    title: "Ghost buttons",
    description: "Outline CTAs used across hero and about.",
    code: `<button className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white">
  Resume
</button>`,
    preview: (
      <div className="flex gap-3">
        <button
          type="button"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          Resume
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          Contact
        </button>
      </div>
    ),
  },
  {
    title: "Badge",
    description: "Compact bordered chip.",
    code: `<Badge>Featured</Badge>`,
    preview: (
      <div className="flex gap-2">
        <Badge>Featured</Badge>
        <Badge>New</Badge>
      </div>
    ),
  },
];

export default function ComponentsGalleryPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-0 md:py-24">
      <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">Components</h1>
      <p className="mb-12 max-w-2xl text-[15px] leading-relaxed text-[#777]">
        A small gallery of reusable UI snippets used across this clone — previews run live alongside compact markup you can copy.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {snippets.map((s) => (
          <GalleryCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({
  title,
  description,
  preview,
  code,
}: {
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#1a1a1a]">
      <div className="flex items-start justify-between gap-3 border-b border-[#141414] p-5">
        <div>
          <h2 className="font-semibold text-[#e8e8e8]">{title}</h2>
          <p className="mt-1 text-sm text-[#555]">{description}</p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#222] px-2 py-1 text-[11px] text-[#666] transition-colors hover:border-[#333] hover:text-[#aaa]"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <ClipboardCopy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex min-h-[120px] items-center bg-[#0d0d0d] p-6">{preview}</div>
      <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-all border-t border-[#141414] p-4 font-mono text-[11px] leading-relaxed text-[#555]">
        {code}
      </pre>
    </div>
  );
}
