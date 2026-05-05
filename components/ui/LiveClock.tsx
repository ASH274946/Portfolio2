"use client";

import { useState, useEffect } from "react";

export default function LiveClock({
  timezone = "Asia/Kolkata",
  className = "",
}: {
  timezone?: string;
  className?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: timezone,
      });
      setTime(t);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span className={`font-mono text-sm tabular-nums text-zinc-300 ${className}`}>{time}</span>;
}
