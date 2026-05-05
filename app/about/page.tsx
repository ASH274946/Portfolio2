import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIconBrand } from "@/components/ui/BrandIcons";

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:px-0 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-5xl">
        From curiosity to apps that solve real problems.
      </h1>

      <div className="mb-10 flex flex-wrap gap-2">
        {["Builder", "Flutter", "React", "Backend", "Learner"].map((t) => (
          <span key={t} className="rounded-full border border-[#222] px-3 py-1 text-sm text-[#666]">
            {t}
          </span>
        ))}
      </div>

      <div className="mb-14 grid gap-6 text-sm text-[#666] sm:grid-cols-3">
        <div>
          <span className="block text-[#444]">Location</span>
          <span className="text-[#aaa]">Hyderabad, Telangana, India</span>
        </div>
        <div>
          <span className="block text-[#444]">Education</span>
          <span className="text-[#aaa]">B.Tech CSE, St. Peter&apos;s Engineering College (2023–2027)</span>
        </div>
        <div>
          <span className="block text-[#444]">Work</span>
          <Link href="/services" className="text-[#aaa] underline-offset-4 hover:underline">
            View Services →
          </Link>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-semibold text-white">How it started</h2>
      <div className="space-y-5 text-[15px] leading-relaxed text-[#777]">
        <p>
          I&apos;m a Computer Science student who enjoys moving between{" "}
          <span className="font-semibold text-[#aaa]">Flutter</span> for mobile,{" "}
          <span className="font-semibold text-[#aaa]">React</span> for web, and the messy but rewarding parts of the
          backend—APIs, data, and making things reliable under load.
        </p>
        <p>
          From internships at <span className="font-semibold text-[#aaa]">LifeMonk</span> and{" "}
          <span className="font-semibold text-[#aaa]">Swecha</span> to earlier work in networking and ML, I&apos;ve
          gravitated toward the same idea: clarity beats cleverness, and interfaces should feel effortless to use.
        </p>
        <blockquote className="my-6 border-l-2 border-[#2a2a2a] pl-4 italic text-[#666]">
          &quot;I focus on readable code and building interfaces that actually feel good to use—not just ones that
          merely work.&quot;
        </blockquote>
        <p>
          Outside class, I&apos;ve shipped projects like productivity tooling (Kiden Hub), AI-assisted mobile forms
          (Fillora), and agri-tech (Greendot), and I keep pushing on algorithms, open source, and hackathons.
        </p>
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-semibold text-white">How I work</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "User-first",
            body: "Start from the problem and the person using the product, then choose the stack—not the other way around.",
          },
          {
            title: "Readable systems",
            body: "Structure code and APIs so the next person (or future you) can reason about them quickly.",
          },
          {
            title: "Full-stack mindset",
            body: "Care about mobile UX, web UX, and backend contracts together so nothing feels bolted on.",
          },
          {
            title: "Ship and learn",
            body: "Prefer iterative delivery, real feedback, and tightening performance and polish over endless planning.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-[#1a1a1a] p-5">
            <h3 className="mb-2 font-semibold text-[#ddd]">{c.title}</h3>
            <p className="text-sm leading-relaxed text-[#666]">{c.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-semibold text-white">Beyond the code</h2>
      <div className="space-y-8 text-[15px] leading-relaxed text-[#777]">
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-[#444]">Highlights</p>
          <p>
            Top finishes in college hackathons, 90+ LeetCode/HackerRank-style problems, active open-source
            contributions, and sharing technical notes with a growing audience online.
          </p>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-[#444]">Contact</p>
          <p>
            Open to internships, collaborations, and interesting product work across mobile, web, and AI-backed
            features.
          </p>
        </div>
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-semibold text-white">Let&apos;s connect</h2>
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:kiranlanke824@gmail.com"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          <Mail className="mr-2 inline" size={14} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/kirantejalanke/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          <LinkedInIcon className="mr-2 inline" size={14} />
          LinkedIn
        </a>
        <a
          href="https://x.com/KiranTejz20005"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          <XIconBrand className="mr-2 inline" size={14} />
          X
        </a>
        <a
          href="https://github.com/KiranTejz20005"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm text-[#888] transition-all hover:border-[#444] hover:text-white"
        >
          <GithubIcon className="mr-2 inline" size={14} />
          GitHub
        </a>
      </div>
    </article>
  );
}
