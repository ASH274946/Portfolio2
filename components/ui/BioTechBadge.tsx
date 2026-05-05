import Image from "next/image";
import { techIconSrc } from "@/lib/data";
import { deviconSrc } from "@/lib/devicon";

const variants: Record<string, { wrap: string; label: string }> = {
  TypeScript: {
    wrap: "bg-blue-500/10 text-blue-400",
    label: "text-blue-400",
  },
  React: {
    wrap: "bg-cyan-500/10 text-cyan-400",
    label: "text-cyan-400",
  },
  "Next.js": {
    wrap: "bg-white/10 text-white",
    label: "text-white",
  },
  "Tailwind CSS": {
    wrap: "bg-[#00abc0]/10 text-[#00bed7]",
    label: "text-[#00bed7]",
  },
  Flutter: {
    wrap: "bg-sky-500/10 text-sky-400",
    label: "text-sky-400",
  },
  "Node.js": {
    wrap: "bg-green-500/10 text-green-400",
    label: "text-green-400",
  },
  FastAPI: {
    wrap: "bg-emerald-500/10 text-emerald-400",
    label: "text-emerald-400",
  },
};

const defaultVariant = { wrap: "bg-zinc-500/10 text-zinc-400", label: "text-zinc-400" };

interface Props {
  name: string;
  href: string;
  slug: string;
}

export default function BioTechBadge({ name, href, slug }: Props) {
  const v = variants[name] ?? defaultVariant;
  const colorful = deviconSrc(name) ?? techIconSrc(slug);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-5 cursor-pointer items-center gap-1 overflow-visible rounded border border-dashed px-1.5 transition-all duration-200 ease-in-out hover:opacity-80 sm:h-7 sm:gap-1.5 sm:px-2 ${v.wrap}`}
      style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}
    >
      {colorful ? (
        <Image
          src={colorful}
          alt=""
          width={14}
          height={14}
          className="h-3 w-3 object-contain select-none sm:h-3.5 sm:w-3.5"
          unoptimized
        />
      ) : null}
      <span className={`text-[11px] sm:text-sm ${v.label}`}>{name}</span>
    </a>
  );
}
