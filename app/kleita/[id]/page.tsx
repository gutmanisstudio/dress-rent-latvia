"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DRESSES, type Dress } from "@/lib/data";
import { useMotionPref } from "@/lib/motion";
import { Reveal, ArrowSmall } from "@/components/primitives";
import { DressCard } from "@/components/DressCard";

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="drl-spec">
      <span className="drl-spec__label">{label}</span>
      <span className="drl-spec__value">{value}</span>
    </div>
  );
}

function InquiryForm({ dress }: { dress: Dress }) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="drl-form drl-form--sent">
        <div className="drl-form__check">✓</div>
        <div>
          <div className="drl-form__sent-title">Paldies, {name || "tev"}!</div>
          <div className="drl-form__sent-body">
            Sazināsimies 24 stundu laikā, lai apstiprinātu pielaikošanu kleitai{" "}
            <em>{dress.name}</em>.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="drl-form" onSubmit={submit}>
      <div className="drl-form__head">
        <div className="drl-eyebrow">Pieprasi pielaikošanu</div>
      </div>
      <div className="drl-form__row">
        <input
          className="drl-input"
          placeholder="Tavs vārds"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="drl-input"
          placeholder="Telefons"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <input
        type="date"
        className="drl-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit" className="drl-btn drl-btn--solid drl-btn--block">
        <span>
          Pieprasīt — €? / vakars
        </span>
        <ArrowSmall />
      </button>
    </form>
  );
}

export default function DressDetailPage() {
  const params = useParams<{ id: string }>();
  const motion = useMotionPref();
  const dress = DRESSES.find((d) => d.id === params.id) || DRESSES[0];
  const others = DRESSES.filter((d) => d.id !== dress.id && !d.placeholder).slice(0, 3);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [dress.id]);

  return (
    <main className="drl-detail">
      <nav className="drl-crumbs">
        <Link href="/">Sākums</Link>
        <span>/</span>
        <Link href="/kolekcija">Kolekcija</Link>
        <span>/</span>
        <span className="drl-crumbs__current">{dress.name}</span>
      </nav>

      <section className="drl-detail__top">
        <div className="drl-detail__gallery">
          <Reveal motion={motion} className="drl-detail__main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dress.gallery[active]} alt={dress.name} />
            <div className="drl-detail__galnum">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(dress.gallery.length).padStart(2, "0")}
            </div>
          </Reveal>
          <div className="drl-detail__thumbs">
            {dress.gallery.map((g, i) => (
              <button
                key={i}
                className={`drl-thumb ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Skats ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g} alt="" />
              </button>
            ))}
          </div>
        </div>

        <aside className="drl-detail__info">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">{dress.category}</div>
          </Reveal>
          <Reveal motion={motion} delay={80}>
            <h1 className="drl-detail__name">
              {dress.name.split(" ")[0]}
              <em> {dress.name.split(" ").slice(1).join(" ")}</em>
            </h1>
          </Reveal>
          <Reveal motion={motion} delay={160} className="drl-detail__price">
            <span>€?</span>
            <span className="drl-detail__per">/ vakars · 3 dienu noma</span>
          </Reveal>
          <Reveal motion={motion} delay={220} className="drl-detail__specs">
            <Spec label="Krāsa" value={dress.color} />
            <Spec label="Garums" value={dress.length} />
            <Spec label="Siluets" value={dress.silhouette} />
            <Spec label="Izmēri" value={dress.sizes.join(" · ")} />
            <Spec label="Piezīme" value={dress.notes} />
          </Reveal>
          <Reveal motion={motion} delay={300}>
            <p className="drl-detail__desc">{dress.description}</p>
          </Reveal>
          <Reveal motion={motion} delay={380}>
            <InquiryForm dress={dress} />
          </Reveal>
          <Reveal motion={motion} delay={460}>
            <ul className="drl-detail__bullets">
              <li><span>✦</span> Iekļauta profesionāla tīrīšana</li>
              <li><span>✦</span> Bezmaksas pielāgojumi (garums, sānu šuves)</li>
              <li><span>✦</span> Depozīts — €?, atgriežams pilnībā</li>
            </ul>
          </Reveal>
        </aside>
      </section>

      <section className="drl-detail__related">
        <div className="drl-section__head">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">Tev varētu patikt</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-section__title">
              Citi <em>silueti</em>
            </h2>
          </Reveal>
        </div>
        <div className="drl-featured__grid">
          {others.map((d, i) => (
            <DressCard key={d.id} dress={d} motion={motion} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
