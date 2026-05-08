"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrambleText from "@/components/ui/ScrambleText";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [brandHover, setBrandHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/6 bg-black/50 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6 lg:px-0">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-zinc-300 transition-colors hover:text-zinc-100"
          onMouseEnter={() => setBrandHover(true)}
          onMouseLeave={() => setBrandHover(false)}
          onFocus={() => setBrandHover(true)}
          onBlur={() => setBrandHover(false)}
        >
          <span className="text-zinc-500">~/</span>
          <span className="inline md:hidden">
            <ScrambleText text="kiran" active={brandHover} />
          </span>
          <span className="hidden md:inline">
            <ScrambleText text="kirantejalanke" active={brandHover} />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 pr-1 md:gap-6 md:pr-3">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-xs transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-current after:transition-all md:text-sm ${
                    active
                      ? "text-zinc-200 after:w-full"
                      : "text-zinc-400 after:w-0 hover:text-zinc-200 md:hover:after:w-full"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
