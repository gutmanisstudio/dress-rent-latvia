"use client";
import Link from "next/link";
import { SplitReveal, ArrowSmall } from "./primitives";

export function Footer() {
  return (
    <footer className="drl-footer">
      <div className="drl-footer__top">
        <div className="drl-footer__hero">
          <SplitReveal text="Vai izvēlēta?" className="drl-footer__big" motion="medium" />
          <Link href="/sazinies" className="drl-btn drl-btn--ghost">
            <span>Pieraksties uz pielaikošanu</span>
            <ArrowSmall />
          </Link>
        </div>
      </div>
      <div className="drl-footer__grid">
        <div>
          <div className="drl-eyebrow">Studio</div>
          <p>
            Brīvības iela 00<br />Rīga, LV-1010<br />Latvija
          </p>
        </div>
        <div>
          <div className="drl-eyebrow">Sazinies</div>
          <p>
            +371 2X XXX XXX<br />hello@dressrent.lv<br />@dressrent.lv
          </p>
        </div>
        <div>
          <div className="drl-eyebrow">Darba laiks</div>
          <p>
            Pielaikošana pēc pieraksta<br />O — P · 11:00 — 19:00<br />S — Sv · 12:00 — 17:00
          </p>
        </div>
        <div>
          <div className="drl-eyebrow">Lapas</div>
          <ul className="drl-footer__links">
            <li><Link href="/">Sākums</Link></li>
            <li><Link href="/kolekcija">Kolekcija</Link></li>
            <li><Link href="/ka-tas-notiek">Kā tas notiek</Link></li>
            <li><Link href="/par-mums">Par mums</Link></li>
            <li><Link href="/sazinies">Sazinies</Link></li>
          </ul>
        </div>
      </div>
      <div className="drl-footer__bottom">
        <span>© 2026 Dress Rent Latvia · Kleitu noma Rīgā</span>
        <span className="drl-footer__monogram">DRL</span>
      </div>
    </footer>
  );
}
