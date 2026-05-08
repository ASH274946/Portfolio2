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
    <div className="group flex h-8 w-8 cursor-default items-center justify-center" title={name}>
      <div className="transition-transform duration-200 ease-out group-hover:scale-[1.05]">
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
