"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Mail,
  MapPin,
  Globe,
  Clock,
  User,
  FileText,
} from "lucide-react";
import { GithubIcon, XIconBrand } from "@/components/ui/BrandIcons";
import TypewriterText from "@/components/animations/TypewriterText";
import ContributionGraph from "@/components/animations/ContributionGraph";
import BioTechBadge from "@/components/ui/BioTechBadge";
import LiveClock from "@/components/ui/LiveClock";
import SpotifyCard from "@/components/sections/SpotifyCard";

const AVATAR_IMG =
  "https://ui-avatars.com/api/?name=Kiran+Teja&background=27272a&color=e4e4e7&size=128&rounded=true";

function MetaIconShell({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#292929] bg-zinc-800/50 md:h-[1.6rem] md:w-[1.6rem]">
      {children}
    </span>
  );
}

function SocialButton({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="group/tooltip relative inline-flex">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={label}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/50 text-[#c7c7c7] transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-300"
      >
        {children}
      </a>
      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-4 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-100 ease-out group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100">
        {label}
        <div className="absolute left-1/2 top-full -mt-px -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-zinc-800" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mb-0 min-h-screen pb-8 pt-24 md:pt-32">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-0">
        <div className="mb-6 flex flex-row items-start gap-3.5 md:mb-8 md:gap-4">
          <Image
            src={AVATAR_IMG}
            alt="Lanke Kiran Teja"
            width={64}
            height={64}
            className="h-14 w-14 shrink-0 rounded-xl border border-zinc-800 object-cover sm:h-16 sm:w-16"
            priority
          />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 md:gap-1">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
              <h1 className="font-inter text-2xl font-semibold tracking-normal text-[#f0f0f0] sm:text-3xl md:text-4xl">
                Lanke Kiran Teja
              </h1>
              <div className="hidden items-center gap-1.5 rounded-full border border-zinc-700/50 bg-zinc-800/50 px-2 py-1 md:flex">
                <div className="h-2 w-2 shrink-0 rounded-full bg-green-700" />
                <span className="font-inter text-xs text-zinc-400">Available for work</span>
              </div>
            </div>
            <TypewriterText />
          </div>
        </div>

        <div className="mb-5 md:mb-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <Code2 className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <span className="text-xs text-[#b2b2b2] md:text-sm">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <MapPin className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <span className="text-xs text-[#b2b2b2] md:text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <Mail className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <a
                  href="mailto:kiranlanke824@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#b2b2b2] transition-all ease-in-out hover:underline md:text-sm"
                >
                  kiranlanke824@gmail.com
                </a>
              </div>
            </div>

            <div className="hidden space-y-1.5 md:block">
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <Clock className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <LiveClock />
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <Globe className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <a
                  href="https://www.linkedin.com/in/kirantejalanke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#b2b2b2] transition-all ease-in-out hover:underline md:text-sm"
                >
                  linkedin.com/in/kirantejalanke
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <MetaIconShell>
                  <User className="text-zinc-400" size={14} strokeWidth={1.5} />
                </MetaIconShell>
                <span className="text-xs text-[#b2b2b2] md:text-sm">B.Tech CSM @ St. Peter&apos;s Engineering College</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 md:mb-8">
          <p className="text-[0.76rem] leading-[2.3] text-[#b2b2b2] sm:text-[15px] sm:leading-[2.3]">
            I&apos;m a Computer Science student who loves building apps that solve real problems—comfortable with{" "}
            <BioTechBadge name="Flutter" slug="flutter" href="https://flutter.dev/" />
            {" "}for mobile,{" "}
            <BioTechBadge name="React" slug="react" href="https://react.dev/" />
            {" "}for web, and{" "}
            <BioTechBadge name="Node.js" slug="nodedotjs" href="https://nodejs.org/" />
            {" "}/{" "}
            <BioTechBadge name="FastAPI" slug="fastapi" href="https://fastapi.tiangolo.com/" />
            {" "}on the backend. I focus on readable code and interfaces that feel good to use.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2 text-[#c7c7c7] transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-200 sm:px-3.5"
            >
              <FileText width={16} height={16} strokeWidth={1.5} />
              <span className="text-[13px] font-light tracking-wide">Resume</span>
            </a>
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2 text-[#c7c7c7] transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-200 sm:px-3.5"
            >
              <Mail width={16} height={16} strokeWidth={1.5} />
              <span className="text-[13px] font-light tracking-wide">Contact</span>
            </Link>
          </div>

          <div className="mx-1 hidden h-5 w-px shrink-0 bg-zinc-800 sm:block" />

          <div className="flex flex-wrap items-center gap-2">
            <SocialButton href="https://x.com/KiranTejz20005" label="X (Twitter)" external>
              <XIconBrand size={18} />
            </SocialButton>
            <SocialButton href="https://github.com/KiranTejz20005" label="GitHub" external>
              <GithubIcon size={18} />
            </SocialButton>
            <SocialButton href="mailto:kiranlanke824@gmail.com" label="Email" external>
              <Mail width={18} height={18} strokeWidth={2} />
            </SocialButton>
          </div>
        </div>

        <div className="mt-6 duration-300 sm:mt-8">
          <SpotifyCard />
        </div>

        <div className="mt-8 md:mt-10">
          <ContributionGraph />
        </div>
      </div>
    </section>
  );
}
