"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { DRLLogomark } from "./primitives";

export function Nav({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`drl-nav ${scrolled ? "is-scrolled" : ""} ${
        isHome ? "is-over-dark" : ""
      }`}
    >
      <div className="drl-nav__inner">
        <Link href="/" className="drl-nav__brand" aria-label="Dress Rent Latvia">
          <DRLLogomark />
          <span className="drl-nav__brand-text">
            <span className="drl-nav__brand-1">Dress Rent</span>
            <span className="drl-nav__brand-2">Latvia</span>
          </span>
        </Link>
        <nav className="drl-nav__links">
          {NAV.map((n) => {
            const active =
              n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.id}
                href={n.href}
                className={`drl-nav__link ${active ? "is-active" : ""}`}
              >
                <span>{n.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="drl-nav__actions">
          <a className="drl-nav__phone" href="tel:+37120000000">
            +371 2X XXX XXX
          </a>
          <button
            className="drl-nav__menu"
            onClick={onOpenMenu}
            aria-label="Izvēlne"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
