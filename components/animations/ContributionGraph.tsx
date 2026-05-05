"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GithubStats = {
  ok: boolean;
  username: string;
  followers: number;
  repos: number;
  stars: number;
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
    <div className="flex w-max max-w-full flex-col gap-2">
      <div className="max-w-full overflow-x-auto overflow-y-hidden pb-2">
        <a
          href="https://github.com/KiranTejz20005"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-max"
        >
          <Image
            src="https://ghchart.rshah.org/6b7280/KiranTejz20005"
            alt="GitHub contribution graph for KiranTejz20005"
            width={780}
            height={126}
            className="max-w-none rounded-md border border-zinc-800/60 bg-black/20 p-2 grayscale"
            unoptimized
          />
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-600">
        <span>
          Followers <span className="text-zinc-400">{stats?.followers ?? "--"}</span>
        </span>
        <span>
          Repositories <span className="text-zinc-400">{stats?.repos ?? "--"}</span>
        </span>
        <span>
          Stars <span className="text-zinc-400">{stats?.stars ?? "--"}</span>
        </span>
      </div>
    </div>
  );
}
