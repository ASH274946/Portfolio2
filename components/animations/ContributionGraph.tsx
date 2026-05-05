"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GithubStats = {
  ok: boolean;
  username: string;
  followers: number;
  repos: number;
  stars: number;
  contributions: number | null;
  periodLabel: string;
  fromDate: string;
  toDate: string;
};

export default function ContributionGraph() {
  const [stats, setStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/github/stats", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as GithubStats;
        if (mounted && data.ok) setStats(data);
      } catch {
        // keep previous UI state on request failure
      }
    };

    fetchStats();
    const id = window.setInterval(fetchStats, 60000);
    return () => {
      mounted = false;
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <div className="w-full overflow-x-auto overflow-y-hidden pb-2">
        <a
          href="https://github.com/KiranTejz20005"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-[760px] md:min-w-0 md:w-full"
        >
          <Image
            src={`/api/github/contributions?from=${stats?.fromDate ?? "2025-01-01"}&to=${stats?.toDate ?? "2026-01-01"}`}
            alt="GitHub contribution graph for KiranTejz20005"
            width={780}
            height={126}
            className="h-auto w-[760px] max-w-none rounded-md border border-zinc-800/60 bg-black/20 p-2 grayscale md:w-full md:max-w-full"
            unoptimized
          />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[11px] text-zinc-600">
        <span>
          <span className="font-semibold text-zinc-300">{stats?.contributions?.toLocaleString("en-IN") ?? "--"}</span>{" "}
          contributions in {stats?.periodLabel ?? "last year"}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span>Less</span>
          {["#18181b", "#27272a", "#3f3f46", "#52525b", "#a1a1aa"].map((c) => (
            <span key={c} className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
