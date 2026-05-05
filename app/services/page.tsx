import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-0 md:py-24">
      <h1 className="font-inter mb-4 text-3xl font-semibold text-zinc-100 md:text-5xl">Services</h1>
      <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
        End-to-end web development — from polished marketing sites to production-ready apps. Clear scope, fast
        iterations, and engineering you can ship with confidence.
      </p>
      <div className="mb-14 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/kirantejalanke/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/40 hover:text-zinc-100"
        >
          LinkedIn
        </a>
        <a
          href="mailto:kiranlanke824@gmail.com"
          className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/40 hover:text-zinc-100"
        >
          Email me
        </a>
      </div>

      <div className="divide-y divide-zinc-800/80 border-t border-zinc-800/80">
        {services.map((s) => (
          <div
            key={s.title}
            className="group flex cursor-default items-start justify-between gap-4 px-2 py-5 transition-colors duration-200 ease-out hover:bg-zinc-900/40"
          >
            <div>
              <h2 className="font-inter font-medium text-zinc-200">{s.title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{s.tagline}</p>
            </div>
            <span className="shrink-0 pt-1 text-zinc-700 transition-colors duration-200 ease-out group-hover:text-zinc-400">
              →
            </span>
          </div>
        ))}
      </div>

      <section className="mt-20 border-t border-white/[0.06] pt-14">
        <h2 className="font-inter mb-4 text-2xl font-semibold text-zinc-100">Let&apos;s build something great</h2>
        <p className="mb-6 text-sm text-zinc-500">Tell me what you&apos;re shipping — I&apos;ll help you get there.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/kirantejalanke/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/40 hover:text-zinc-100"
          >
            Message on LinkedIn
          </a>
          <a
            href="mailto:kiranlanke824@gmail.com"
            className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/40 hover:text-zinc-100"
          >
            Email me
          </a>
        </div>
      </section>
    </div>
  );
}
