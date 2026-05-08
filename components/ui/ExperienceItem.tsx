import Image from "next/image";

interface Props {
  logo: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  bullets: string[];
}

export default function ExperienceItem({
  logo,
  role,
  company,
  location,
  period,
  summary,
  bullets,
}: Props) {
  return (
    <div className="flex gap-4 border-b border-zinc-800/60 py-6 transition-colors duration-200 ease-out last:border-0 hover:border-zinc-700/80">
      <div className="shrink-0">
        <Image
          src={logo}
          alt={company}
          width={40}
          height={40}
          className="rounded-lg border border-zinc-800 object-cover transition-transform duration-200 hover:scale-[1.02]"
          unoptimized={logo.endsWith(".svg")}
        />
      </div>
      <div className="flex-1">
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-inter text-base font-semibold text-zinc-100">{role}</h3>
            <p className="text-sm text-zinc-500">
              {company}
              <span className="text-zinc-600">•</span>
              {location}
            </p>
          </div>
          <span className="shrink-0 text-xs tabular-nums text-zinc-600">{period}</span>
        </div>
        {summary ? <p className="mt-3 text-sm leading-relaxed text-zinc-500">{summary}</p> : null}
        <ul className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-zinc-500">
              <span className="shrink-0 font-medium text-zinc-700">-</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
