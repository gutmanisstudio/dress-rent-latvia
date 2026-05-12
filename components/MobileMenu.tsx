"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV } from "@/lib/data";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`drl-mmenu ${open ? "is-open" : ""}`}>
      <div className="drl-mmenu__top">
        <span className="drl-mmenu__brand">Dress Rent Latvia</span>
        <button
          className="drl-mmenu__close"
          onClick={onClose}
          aria-label="Aizvērt"
        >
          ✕
        </button>
      </div>
      <nav className="drl-mmenu__nav">
        {NAV.map((n, i) => {
          const active =
            n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
          return (
            <Link
              key={n.id}
              href={n.href}
              className={`drl-mmenu__link ${active ? "is-active" : ""}`}
              onClick={onClose}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="drl-mmenu__num">0{i + 1}</span>
              <span className="drl-mmenu__label">{n.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="drl-mmenu__foot">
        <div>
          <div className="drl-eyebrow">Studio</div>
          <div>Brīvības iela 00, Rīga</div>
        </div>
        <div>
          <div className="drl-eyebrow">Sazinies</div>
          <div>+371 2X XXX XXX</div>
          <div>hello@dressrent.lv</div>
        </div>
      </div>
    </div>
  );
}
