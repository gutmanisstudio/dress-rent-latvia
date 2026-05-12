"use client";
import React, {
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import type { MotionLevel } from "@/lib/motion";

// ──────────────────────────────────────────────────────────────────────────
// Reveal
// ──────────────────────────────────────────────────────────────────────────
type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  motion?: MotionLevel;
  style?: CSSProperties;
};
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className = "",
  motion = "medium",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (motion === "off") {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motion]);

  const dur = motion === "heavy" ? 1100 : motion === "subtle" ? 600 : 850;
  const yOff = motion === "heavy" ? y * 1.6 : motion === "subtle" ? y * 0.5 : y;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: `translate3d(0, ${shown ? 0 : yOff}px, 0)`,
        transition: `opacity ${dur}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform ${dur}ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// SplitReveal
// ──────────────────────────────────────────────────────────────────────────
export function SplitReveal({
  text,
  className = "",
  motion = "medium",
  delay = 0,
  lineHeight = 0.95,
}: {
  text: string;
  className?: string;
  motion?: MotionLevel;
  delay?: number;
  lineHeight?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (motion === "off") {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motion]);

  const words = text.split(" ");
  const dur = motion === "heavy" ? 1200 : motion === "subtle" ? 700 : 900;
  const stagger = motion === "heavy" ? 90 : motion === "subtle" ? 40 : 65;

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", lineHeight }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            marginRight: "0.28em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: `translateY(${shown ? 0 : "108%"})`,
              transition: `transform ${dur}ms cubic-bezier(.2,.8,.2,1) ${
                delay + i * stagger
              }ms`,
              willChange: "transform",
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Marquee
// ──────────────────────────────────────────────────────────────────────────
export function Marquee({
  words,
  speed = 40,
  motion = "medium",
}: {
  words: string[];
  speed?: number;
  motion?: MotionLevel;
}) {
  const items = [...words, ...words, ...words];
  const duration =
    motion === "heavy" ? speed * 0.8 : motion === "subtle" ? speed * 1.6 : speed;
  return (
    <div className="drl-marquee-wrap">
      <div className="drl-marquee" aria-hidden="true">
        <div
          className="drl-marquee__track"
          style={{ animationDuration: `${duration}s` }}
        >
          {items.map((w, i) => (
            <span key={i} className="drl-marquee__item">
              <span>{w}</span>
              <span className="drl-marquee__dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// ParallaxImage
// ──────────────────────────────────────────────────────────────────────────
export function ParallaxImage({
  src,
  alt = "",
  amount = 60,
  className = "",
  style = {},
  motion = "medium",
  objectPosition = "center",
  offsetX = 0,
  offsetY = 0,
  scale = 1.12,
}: {
  src: string;
  alt?: string;
  amount?: number;
  className?: string;
  style?: CSSProperties;
  motion?: MotionLevel;
  objectPosition?: string;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (motion === "off" || motion === "subtle") {
      img.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${scale})`;
      return;
    }
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const factor = motion === "heavy" ? amount : amount * 0.55;

    const update = () => {
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      const y = Math.max(-1.2, Math.min(1.2, progress)) * factor;
      img.style.transform = `translate3d(${offsetX}px, ${offsetY - y}px, 0) scale(${scale})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [amount, motion, offsetX, offsetY, scale]);

  return (
    <div ref={wrapRef} className={`drl-parallax ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imgRef} src={src} alt={alt} loading="lazy" style={{ objectPosition }} />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Placeholder
// ──────────────────────────────────────────────────────────────────────────
export function Placeholder({
  label = "Drīzumā",
  color = "#C9A678",
  ratio = "3 / 4",
}: {
  label?: string;
  color?: string;
  ratio?: string;
}) {
  const id = `p-${color.replace("#", "")}`;
  return (
    <div className="drl-placeholder" style={{ aspectRatio: ratio }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern
            id={id}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke={color} strokeWidth="1.2" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${id})`} opacity="0.5" />
      </svg>
      <span className="drl-placeholder__label">{label}</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Arrows + Logomark
// ──────────────────────────────────────────────────────────────────────────
export function ArrowSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7 L12 7 M8 3 L12 7 L8 11"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLarge() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M3 11 L19 11 M13 5 L19 11 L13 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DRLLogomark({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4 L16 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="9" r="2" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M16 11 L5 19 L27 19 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <path d="M9 19 L13 28 M23 19 L19 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
