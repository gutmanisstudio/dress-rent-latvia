"use client";
import { useMemo, useState } from "react";
import { DRESSES } from "@/lib/data";
import { useMotionPref } from "@/lib/motion";
import { Reveal } from "@/components/primitives";
import { DressCard } from "@/components/DressCard";

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="drl-filter">
      <label className="drl-eyebrow">{label}</label>
      <div className="drl-filter__chips">
        {options.map((o) => (
          <button
            key={o}
            className={`drl-chip ${value === o ? "is-active" : ""}`}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  const motion = useMotionPref();
  const [color, setColor] = useState("Visas");
  const [length, setLength] = useState("Visas");
  const [occasion, setOccasion] = useState("Visas");
  const [sort, setSort] = useState("Jaunākās");
  const [open, setOpen] = useState(false);

  const colors = useMemo(
    () => ["Visas", ...Array.from(new Set(DRESSES.map((d) => d.color)))],
    []
  );
  const lengths = useMemo(
    () => ["Visas", ...Array.from(new Set(DRESSES.map((d) => d.length).filter(Boolean)))],
    []
  );
  const occasions = useMemo(
    () => ["Visas", ...Array.from(new Set(DRESSES.flatMap((d) => d.occasion || [])))],
    []
  );

  let filtered = DRESSES.filter((d) => {
    if (color !== "Visas" && d.color !== color) return false;
    if (length !== "Visas" && d.length !== length) return false;
    if (occasion !== "Visas" && !(d.occasion || []).includes(occasion)) return false;
    return true;
  });

  if (sort === "Cena ↑") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "Cena ↓") filtered = [...filtered].sort((a, b) => b.price - a.price);

  const activeCount = [color, length, occasion].filter((v) => v !== "Visas").length;

  return (
    <main className="drl-catalog">
      <header className="drl-catalog__head">
        <Reveal motion={motion}>
          <div className="drl-eyebrow">Kolekcija · {DRESSES.length} kleitas</div>
        </Reveal>
        <Reveal motion={motion} delay={120}>
          <h1 className="drl-catalog__title">
            <span>Visa</span>
            <em> kolekcija</em>
          </h1>
        </Reveal>
        <Reveal motion={motion} delay={240}>
          <p className="drl-catalog__sub">
            Filtrē pēc krāsas, garuma un pasākuma — vai pārlūko pilnu sarakstu.
          </p>
        </Reveal>
      </header>

      <div className="drl-filterbar">
        <button
          className={`drl-filterbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span className="drl-filterbar__burger" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span className="drl-filterbar__label">
            Filtrēt un kārtot
            {activeCount > 0 && (
              <span className="drl-filterbar__badge">{activeCount}</span>
            )}
          </span>
        </button>
        <div className="drl-filterbar__summary">
          <span>{filtered.length} rezultāti</span>
          <span className="drl-filterbar__sep">·</span>
          <span className="drl-filterbar__sort-summary">Kārtots: {sort}</span>
          {activeCount > 0 && (
            <button
              className="drl-link drl-link--sm"
              onClick={() => {
                setColor("Visas");
                setLength("Visas");
                setOccasion("Visas");
              }}
            >
              Notīrīt
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="drl-filters drl-filters--panel">
          <FilterGroup label="Krāsa" options={colors} value={color} onChange={setColor} />
          <FilterGroup label="Garums" options={lengths} value={length} onChange={setLength} />
          <FilterGroup label="Pasākums" options={occasions} value={occasion} onChange={setOccasion} />
          <div className="drl-filters__sort">
            <label className="drl-eyebrow">Kārtot</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="drl-select"
            >
              {["Jaunākās", "Cena ↑", "Cena ↓"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="drl-catalog__grid">
        {filtered.map((d, i) => (
          <DressCard key={d.id} dress={d} motion={motion} index={i} />
        ))}
        {filtered.length === 0 && (
          <div className="drl-catalog__empty">Nav rezultātu pēc šiem filtriem.</div>
        )}
      </div>
    </main>
  );
}
