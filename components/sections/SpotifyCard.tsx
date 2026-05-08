"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Music, Play } from "lucide-react";

type NowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  source: "current" | "recent" | "unavailable";
};

const FALLBACK: NowPlaying = {
  isPlaying: false,
  title: "Spotify not configured",
  artist: "Add Spotify env vars to enable live now-playing",
  albumImageUrl: "",
  songUrl: "https://open.spotify.com/",
  source: "unavailable",
};

export default function SpotifyCard() {
  const [track, setTrack] = useState<NowPlaying>(FALLBACK);

  useEffect(() => {
    let mounted = true;
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify/now-playing", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as NowPlaying;
        if (mounted) setTrack(data);
      } catch {
        // keep previous UI state if request fails
      }
    };

    fetchNowPlaying();
    const id = window.setInterval(fetchNowPlaying, 20000);
    return () => {
      mounted = false;
      window.clearInterval(id);
    };
  }, []);

  const label = track.isPlaying ? "Now playing" : track.source === "recent" ? "Last played" : "Spotify";

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800/40 bg-zinc-900/30 p-3 backdrop-blur-xl sm:p-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-800/50 ring-1 ring-white/10 sm:h-14 sm:w-14">
          {track.albumImageUrl ? (
            <Image
              src={track.albumImageUrl}
              alt={`${track.title} album art`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="56px"
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-zinc-500">
              <Music size={18} />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#1DB954]" fill="currentColor" aria-hidden>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.4 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 3.6-1.261 10.981-1.02 15.301 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1DB954] sm:text-[11px]">
              {label}
            </span>
          </div>
          <p className="truncate text-sm font-medium text-zinc-100 sm:text-base">{track.title}</p>
          <p className="truncate text-xs text-zinc-500 sm:text-sm">{track.artist}</p>
        </div>
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white sm:h-9 sm:w-9"
          aria-label="Play on Spotify"
        >
          <Play size={16} className="ml-0.5 fill-current" />
        </a>
      </div>
    </div>
  );
}
