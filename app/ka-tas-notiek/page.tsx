"use client";
import Link from "next/link";
import { useState } from "react";
import { FAQ, PROCESS_STEPS } from "@/lib/data";
import { useMotionPref } from "@/lib/motion";
import { Reveal, ParallaxImage, ArrowSmall } from "@/components/primitives";

export default function HowPage() {
  const motion = useMotionPref();
  const [open, setOpen] = useState<number>(0);

  return (
    <main className="drl-how">
      <header className="drl-page__head">
        <Reveal motion={motion}>
          <div className="drl-eyebrow">— Kā tas notiek —</div>
        </Reveal>
        <Reveal motion={motion} delay={120}>
          <h1 className="drl-page__title">
            Vienkāršs ceļš
            <em> uz tavu vakaru.</em>
          </h1>
        </Reveal>
        <Reveal motion={motion} delay={240}>
          <p className="drl-page__sub">
            Četri soļi no izvēles līdz atgriešanai. Bez sarežģījumiem, bez slēptām maksām.
          </p>
        </Reveal>
      </header>

      <section className="drl-how__steps">
        {PROCESS_STEPS.map((s, i) => (
          <Reveal motion={motion} delay={i * 100} key={s.n} className="drl-how__step">
            <div className="drl-how__num">{s.n}</div>
            <div className="drl-how__body">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <div className="drl-how__line"></div>
          </Reveal>
        ))}
      </section>

      <section className="drl-how__detail">
        <div className="drl-how__detail-l">
          <ParallaxImage src="/assets/white/white3.jpg" alt="" motion={motion} amount={50} />
        </div>
        <div className="drl-how__detail-r">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">Pielaikošana</div>
          </Reveal>
          <Reveal motion={motion} delay={100}>
            <h2 className="drl-how__detail-title">
              Privāta tikšanās. <em>Tikai tu.</em>
            </h2>
          </Reveal>
          <Reveal motion={motion} delay={200}>
            <p>
              Studio ir privāts — uz vienu pielaikošanu rezervējam visu telpu. Vienā tikšanās reizē var pielaikot līdz 8 kleitām, ar šampanieti, mūziku un godīgu padomu.
            </p>
            <p>
              Pielaikošana ir bezmaksas un ilgst 45–60 minūtes. Rezervācijas — vismaz 24 stundas iepriekš.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={300}>
            <Link href="/sazinies" className="drl-link drl-link--lg">
              <span>Pieraksties</span>
              <ArrowSmall />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="drl-how__faq">
        <div className="drl-section__head">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">FAQ · Bieži jautājumi</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-section__title">
              Atbildes uz <em>jautājumiem.</em>
            </h2>
          </Reveal>
        </div>
        <div className="drl-faq">
          {FAQ.map((f, i) => (
            <Reveal
              motion={motion}
              delay={i * 70}
              key={i}
              className={`drl-faq__item ${open === i ? "is-open" : ""}`}
            >
              <button className="drl-faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="drl-faq__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="drl-faq__qtext">{f.q}</span>
                <span className="drl-faq__icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="drl-faq__a">
                <p>{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
