"use client";
import { useEffect, useRef } from "react";

interface HoneypotProps {
  onBotDetected?: () => void;
}

export default function Honeypot({ onBotDetected }: HoneypotProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleChange = () => {
      if (input.value) {
        console.warn("[honeypot] Bot detected — field was filled");
        onBotDetected?.();
      }
    };

    input.addEventListener("change", handleChange);
    return () => input.removeEventListener("change", handleChange);
  }, [onBotDetected]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      <label htmlFor="hp_website">Leave this empty</label>
      <input
        ref={inputRef}
        type="text"
        id="hp_website"
        name="hp_website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
