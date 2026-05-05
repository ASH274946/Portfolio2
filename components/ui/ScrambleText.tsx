"use client";

import { useEffect, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*[]/<>";

function randomGlyph() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? "X";
}

export default function ScrambleText({ text, active }: { text: string; active: boolean }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const ticksPerChar = 2;
    const extraSettle = 6;
    const maxFrames = 4 + text.length * ticksPerChar + extraSettle;

    const id = window.setInterval(() => {
      frame += 1;
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
          continue;
        }
        const settleAt = 2 + i * ticksPerChar;
        if (frame >= settleAt) out += ch;
        else out += randomGlyph();
      }
      setDisplay(out);
      if (frame >= maxFrames) {
        window.clearInterval(id);
        setDisplay(text);
      }
    }, 42);

    return () => window.clearInterval(id);
  }, [active, text]);

  return <span className="inline-block min-w-0 font-mono">{active ? display : text}</span>;
}
