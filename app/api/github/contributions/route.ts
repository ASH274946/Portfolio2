import { NextRequest, NextResponse } from "next/server";

const USERNAME = "KiranTejz20005";

function formatISODate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function fallbackSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="780" height="126" viewBox="0 0 780 126">
  <rect width="100%" height="100%" fill="#0b0b0b"/>
  <text x="16" y="72" fill="#a1a1aa" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="16">
    GitHub contribution graph unavailable
  </text>
</svg>`;
}

export async function GET(req: NextRequest) {
  const now = new Date();
  const oneYearAgo = new Date(now);
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  const from = req.nextUrl.searchParams.get("from") ?? formatISODate(oneYearAgo);
  const to = req.nextUrl.searchParams.get("to") ?? formatISODate(now);

  const ghUrl = `https://github.com/users/${USERNAME}/contributions?from=${from}&to=${to}`;

  try {
    const res = await fetch(ghUrl, {
      cache: "no-store",
      headers: {
        "User-Agent": "DevPortfolio-ContributionsProxy",
        Accept: "image/svg+xml,text/html;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      return new NextResponse(fallbackSvg(), {
        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    const svg = await res.text();
    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse(fallbackSvg(), {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}
