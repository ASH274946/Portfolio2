"use client";

import Image from "next/image";
import { Layers } from "lucide-react";
import { deviconSrc } from "@/lib/devicon";
import { techIconSrc } from "@/lib/data";

interface Props {
  name: string;
  slug: string | null;
  size?: number;
}

export default function TechIcon({ name, slug, size = 28 }: Props) {
  const dev = deviconSrc(name);
  const si = techIconSrc(slug);

  return (
    <div className="group flex cursor-default flex-col items-center">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/60 transition-all duration-200 ease-out group-hover:scale-[1.04] group-hover:border-zinc-700/80 group-hover:bg-zinc-800/70"
        title={name}
      >
        {dev ? (
          <Image
            src={dev}
            alt=""
            width={size}
            height={size}
            className="object-contain opacity-90 transition-opacity duration-200 ease-out group-hover:opacity-100"
            unoptimized
          />
        ) : si ? (
          <Image
            src={si}
            alt=""
            width={size}
            height={size}
            className="object-contain opacity-90 transition-opacity duration-200 ease-out group-hover:opacity-100"
            unoptimized
          />
        ) : (
          <Layers className="text-zinc-600 transition-colors duration-200 group-hover:text-zinc-400" size={size - 6} strokeWidth={1.5} />
        )}
      </div>
    </div>
  );
}
