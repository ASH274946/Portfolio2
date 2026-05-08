"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { deviconSrc } from "@/lib/devicon";
import { techIconSrc } from "@/lib/data";

interface Props {
  name: string;
  slug: string | null;
  size?: number;
}

export default function TechIcon({ name, slug, size = 28 }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const dev = deviconSrc(name);
  const si = techIconSrc(slug);

  return (
    <div 
      className="group relative flex h-8 w-8 cursor-default items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none absolute -top-10 z-50 flex flex-col items-center"
          >
            <div className="rounded-md bg-zinc-800 px-2.5 py-1 text-[12px] font-medium text-zinc-100 shadow-xl border border-zinc-700/50 whitespace-nowrap">
              {name}
            </div>
            {/* Tooltip Arrow */}
            <div className="h-1.5 w-1.5 rotate-45 bg-zinc-800 border-r border-b border-zinc-700/50 -mt-[4px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="transition-transform duration-200 ease-out group-hover:scale-110">
        {dev ? (
          <Image
            src={dev}
            alt=""
            width={size}
            height={size}
            className="object-contain opacity-100 saturate-[1.1] transition-all duration-200 ease-out group-hover:saturate-[1.4] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            unoptimized
          />
        ) : si ? (
          <Image
            src={si}
            alt=""
            width={size}
            height={size}
            className="object-contain opacity-100 saturate-[1.1] transition-all duration-200 ease-out group-hover:saturate-[1.4] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            unoptimized
          />
        ) : (
          <Layers className="text-zinc-600 transition-colors duration-200 group-hover:text-zinc-400" size={size - 6} strokeWidth={1.5} />
        )}
      </div>
    </div>
  );
}
