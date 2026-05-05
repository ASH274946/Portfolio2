import { NextResponse } from "next/server";

const USERNAME = "KiranTejz20005";

type User = {
  followers?: number;
  public_repos?: number;
};

type Repo = {
  stargazers_count?: number;
};

function parseContributionsFromHtml(html: string): number | null {
  const m = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
  if (!m?.[1]) return null;
  const n = Number.parseInt(m[1].replaceAll(",", ""), 10);
  return Number.isFinite(n) ? n : null;
}

export async function GET() {
  try {
    const [userRes, reposRes, profileRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { cache: "no-store" }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { cache: "no-store" }),
      fetch(`https://github.com/${USERNAME}`, { cache: "no-store" }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const user = (await userRes.json()) as User;
    const repos = (await reposRes.json()) as Repo[];
    const profileHtml = profileRes.ok ? await profileRes.text() : "";
    const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);
    const contributions = parseContributionsFromHtml(profileHtml);
    const now = new Date();
    const periodLabel = `${now.getFullYear() - 1}-${String(now.getFullYear()).slice(-2)}`;

    return NextResponse.json(
      {
        ok: true,
        username: USERNAME,
        followers: user.followers ?? 0,
        repos: user.public_repos ?? 0,
        stars,
        contributions,
        periodLabel,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
