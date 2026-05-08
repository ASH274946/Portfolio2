import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { deviconSrc } from "@/lib/devicon";
import { techIconSrc, type ProjectTech } from "@/lib/data";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: ProjectTech[];
  githubUrl?: string;
  websiteUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  githubUrl,
  websiteUrl,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-800/80 bg-black/20 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-900/20">
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={image.endsWith(".svg")}
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-inter text-base font-semibold text-zinc-100">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-500 transition-colors duration-200 ease-out hover:text-zinc-300"
              >
                <GithubIcon size={13} className="inline" /> View on GitHub
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-500 transition-colors duration-200 ease-out hover:text-zinc-300"
              >
                <ExternalLink size={13} /> Visit Website
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-zinc-500">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => {
            const dev = deviconSrc(t.name);
            const si = techIconSrc(t.slug);
            return (
              <div
                key={t.name}
                className="flex items-center gap-1.5 rounded-md border border-zinc-800/80 px-2 py-1 transition-colors duration-200 ease-out hover:border-zinc-700/80"
              >
                {dev ? (
                  <Image
                    src={dev}
                    alt=""
                    width={12}
                    height={12}
                    className="object-contain opacity-90"
                    unoptimized
                  />
                ) : si ? (
                  <Image
                    src={si}
                    alt=""
                    width={12}
                    height={12}
                    className="object-contain opacity-90"
                    unoptimized
                  />
                ) : (
                  <Layers className="text-zinc-600" size={12} strokeWidth={1.5} />
                )}
                <span className="text-[11px] text-zinc-500">{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
