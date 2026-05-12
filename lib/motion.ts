"use client";
import { useEffect, useState } from "react";

export type MotionLevel = "off" | "subtle" | "medium" | "heavy";

export function useMotionPref(): MotionLevel {
  const [m, setM] = useState<MotionLevel>("medium");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setM(mq.matches ? "off" : "medium");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return m;
}
