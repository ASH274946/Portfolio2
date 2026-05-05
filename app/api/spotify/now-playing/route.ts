import { NextResponse } from "next/server";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

type SpotifyTrack = {
  name: string;
  external_urls?: { spotify?: string };
  album?: { images?: Array<{ url: string }> };
  artists?: Array<{ name: string }>;
};

function missingConfig() {
  return NextResponse.json({
    isPlaying: false,
    title: "Spotify not configured",
    artist: "Add Spotify env vars to enable live now-playing",
    albumImageUrl: "",
    songUrl: "https://open.spotify.com/",
    source: "unavailable",
  });
}

function toPayload(track: SpotifyTrack, isPlaying: boolean, source: "current" | "recent") {
  return {
    isPlaying,
    title: track.name ?? "Unknown track",
    artist: track.artists?.map((a) => a.name).join(", ") ?? "Unknown artist",
    albumImageUrl: track.album?.images?.[0]?.url ?? "",
    songUrl: track.external_urls?.spotify ?? "https://open.spotify.com/",
    source,
  };
}

async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const tokenRes = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${encoded}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });
  if (!tokenRes.ok) throw new Error("Failed Spotify token refresh");
  const tokenJson = (await tokenRes.json()) as { access_token?: string };
  return tokenJson.access_token;
}

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return missingConfig();

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);
    if (!accessToken) return missingConfig();

    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (nowPlayingRes.status === 200) {
      const data = (await nowPlayingRes.json()) as { item?: SpotifyTrack; is_playing?: boolean };
      if (data.item) {
        return NextResponse.json(toPayload(data.item, Boolean(data.is_playing), "current"), {
          headers: { "Cache-Control": "no-store" },
        });
      }
    }

    const recentRes = await fetch(RECENT_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!recentRes.ok) return missingConfig();
    const recentJson = (await recentRes.json()) as { items?: Array<{ track?: SpotifyTrack }> };
    const recentTrack = recentJson.items?.[0]?.track;
    if (!recentTrack) return missingConfig();

    return NextResponse.json(toPayload(recentTrack, false, "recent"), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return missingConfig();
  }
}
