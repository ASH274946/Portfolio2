import { NextResponse } from "next/server";

const USERNAME = "KiranTejz20005";

type User = {
  followers?: number;
  public_repos?: number;
};

type Repo = {
  stargazers_count?: number;
};

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { cache: "no-store" }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { cache: "no-store" }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const user = (await userRes.json()) as User;
    const repos = (await reposRes.json()) as Repo[];
    const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);

    return NextResponse.json(
      {
        ok: true,
        username: USERNAME,
        followers: user.followers ?? 0,
        repos: user.public_repos ?? 0,
        stars,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
