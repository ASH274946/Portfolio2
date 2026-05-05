"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

function formatGitHubTooltipDate(isoDate: string) {
  const parsed = new Date(`${isoDate}T00:00:00`);
  return Number.isNaN(parsed.getTime())
    ? isoDate
    : parsed.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

export default function ContributionGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className="min-w-[760px] text-zinc-500 md:min-w-0 h-48" />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <div className="min-w-[760px] text-zinc-500 md:min-w-0">
        <GitHubCalendar
          username="KiranTejz20005"
          colorScheme="dark"
          theme={{
            dark: ["#101014", "#1d1f27", "#2a2d37", "#3d414d", "#8b90a0"],
          }}
          labels={{
            totalCount: "{{count}} contributions in {{year}}",
            legend: {
              less: "Less",
              more: "More",
            },
          }}
          tooltips={{
            activity: {
              text: (activity) =>
                `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${formatGitHubTooltipDate(activity.date)}`,
            },
          }}
          fontSize={12}
          blockMargin={4}
          blockSize={11}
        />
      </div>
    </div>
  );
}
