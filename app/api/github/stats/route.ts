import { NextResponse } from "next/server";

const USERNAME = "KiranTejz20005";

type User = {
  followers?: number;
  public_repos?: number;
};

type Repo = {
  stargazers_count?: number;
};

function formatISODate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function parseContributionSum(svg: string): number | null {
  const matches = [...svg.matchAll(/data-count="(\d+)"/g)];
  if (!matches.length) return null;
  const sum = matches.reduce((acc, m) => acc + Number.parseInt(m[1] ?? "0", 10), 0);
  return Number.isFinite(sum) ? sum : null;
}

export async function GET() {
  try {
    const to = new Date();
    const from = new Date(to);
    from.setFullYear(to.getFullYear() - 1);

    const fromDate = formatISODate(from);
    const toDate = formatISODate(to);

    const [userRes, reposRes, profileRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        cache: "no-store",
        headers: { "User-Agent": "DevPortfolio-GitHubStats" },
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, {
        cache: "no-store",
        headers: { "User-Agent": "DevPortfolio-GitHubStats" },
      }),
      fetch(
        `https://github.com/users/${USERNAME}/contributions?from=${fromDate}&to=${toDate}`,
        {
          cache: "no-store",
          headers: {
            "User-Agent": "DevPortfolio-GitHubStats",
            Accept: "image/svg+xml,text/html;q=0.9,*/*;q=0.8",
          },
        },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const user = (await userRes.json()) as User;
    const repos = (await reposRes.json()) as Repo[];
    const contributionSvg = profileRes.ok ? await profileRes.text() : "";
    const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);
    const contributions = parseContributionSum(contributionSvg);
    const periodLabel = `${from.getFullYear()}-${String(to.getFullYear()).slice(-2)}`;

    return NextResponse.json(
      {
        ok: true,
        username: USERNAME,
        followers: user.followers ?? 0,
        repos: user.public_repos ?? 0,
        stars,
        contributions,
        periodLabel,
        fromDate,
        toDate,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
