"use client";
import Link from "next/link";
import { useMotionPref } from "@/lib/motion";
import { COPY, DRESSES, MARQUEE_WORDS, PROCESS_STEPS } from "@/lib/data";
import {
  Reveal,
  SplitReveal,
  Marquee,
  ParallaxImage,
  ArrowSmall,
} from "@/components/primitives";
import { DressCard } from "@/components/DressCard";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  const motion = useMotionPref();
  const featured = DRESSES.filter((d) => !d.placeholder).slice(0, 4);
  const introParts = COPY.introLine.split("—");

  return (
    <main className="drl-home">
      {/* Hero */}
      <section className="drl-hero">
        <div className="drl-hero__media">
          <ParallaxImage
            src="/assets/black/1.jpg"
            alt="Vakara kleita ar sequīniem"
            motion={motion}
            amount={50}
            objectPosition="center top"
          />
          <div className="drl-hero__scrim"></div>
        </div>

        <div className="drl-hero__content">
          <div className="drl-hero__top">
            <div className="drl-hero__eyebrow">
              <span className="drl-dot"></span>
              <span>{COPY.heroEyebrow}</span>
            </div>
            <div className="drl-hero__index">N° 01 / Pavasaris</div>
          </div>

          <div className="drl-hero__main">
            <h1 className="drl-hero__title">
              <span className="drl-hero__line">
                <SplitReveal text={COPY.heroLine1} motion={motion} delay={150} />
              </span>
              <span className="drl-hero__line drl-hero__line--italic">
                <SplitReveal text={COPY.heroLine2} motion={motion} delay={350} />
              </span>
              <span className="drl-hero__line">
                <SplitReveal text={COPY.heroLine3} motion={motion} delay={550} />
              </span>
            </h1>

            <Reveal motion={motion} delay={900}>
              <p className="drl-hero__sub">{COPY.heroSub}</p>
            </Reveal>

            <Reveal motion={motion} delay={1050}>
              <div className="drl-hero__cta">
                <Link href="/kolekcija" className="drl-btn drl-btn--solid drl-btn--light">
                  <span>{COPY.heroCTA}</span>
                  <ArrowSmall />
                </Link>
                <Link href="/sazinies" className="drl-btn drl-btn--text drl-btn--text-light">
                  <span>{COPY.heroCTA2}</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="drl-hero__foot">
            <div className="drl-hero__meta">
              <div className="drl-hero__meta-item">
                <div className="drl-eyebrow drl-eyebrow--light">Šī sezona</div>
                <div className="drl-hero__meta-text">Velvet · Spalvas · Sequīni</div>
              </div>
              <div className="drl-hero__meta-item">
                <div className="drl-eyebrow drl-eyebrow--light">Kolekcijā</div>
                <div className="drl-hero__meta-text">112 siluetes</div>
              </div>
            </div>
            <div className="drl-hero__scroll">
              <span>Ritini</span>
              <span className="drl-hero__scroll-line"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee words={MARQUEE_WORDS} motion={motion} />

      {/* Intro */}
      <section className="drl-intro">
        <div className="drl-intro__inner">
          <Reveal motion={motion}>
            <div className="drl-eyebrow drl-eyebrow--center">— Studio —</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-intro__big">
              <span className="drl-intro__italic">{introParts[0]}</span>
              {introParts[1] && <em className="drl-intro__em">{introParts[1]}</em>}
            </h2>
          </Reveal>
          <Reveal motion={motion} delay={250}>
            <p className="drl-intro__body">{COPY.introBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="drl-featured">
        <div className="drl-section__head">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">Šī sezona · Izvēlētās</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-section__title">
              Siluetes,
              <em> kas saglabājas atmiņā</em>
            </h2>
          </Reveal>
          <Reveal motion={motion} delay={240} className="drl-section__action">
            <Link href="/kolekcija" className="drl-link">
              <span>Visa kolekcija</span>
              <ArrowSmall />
            </Link>
          </Reveal>
        </div>
        <div className="drl-featured__grid">
          {featured.map((d, i) => (
            <DressCard key={d.id} dress={d} motion={motion} index={i} />
          ))}
        </div>
      </section>

      {/* Diptych */}
      <section className="drl-diptych">
        <div className="drl-diptych__l">
          <ParallaxImage src="/assets/black/6.jpg" alt="" motion={motion} amount={50} />
        </div>
        <div className="drl-diptych__c">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">Filozofija</div>
          </Reveal>
          <Reveal motion={motion} delay={100}>
            <h3 className="drl-diptych__title">
              Nomāt nozīmē <em>izvēlēties</em> ar prātu —
              <br />
              nēsāt ar sirdi.
            </h3>
          </Reveal>
          <Reveal motion={motion} delay={220}>
            <p className="drl-diptych__body">
              Mode, kas tiek valkāta vienu vakaru, nedrīkst gulēt skapī gadu desmitiem. Mēs ļaujam dārgām kleitām atrast vairākus īpašnieces, vairākus īpašus mirkļus, vairākus stāstus.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={340}>
            <Link href="/par-mums" className="drl-link drl-link--lg">
              <span>Mūsu stāsts</span>
              <ArrowSmall />
            </Link>
          </Reveal>
        </div>
        <div className="drl-diptych__r">
          <ParallaxImage src="/assets/silver/2.jpg" alt="" motion={motion} amount={50} />
        </div>
      </section>

      {/* Process */}
      <section className="drl-process">
        <div className="drl-section__head drl-section__head--dark">
          <Reveal motion={motion}>
            <div className="drl-eyebrow drl-eyebrow--light">Process · Četri soļi</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-section__title drl-section__title--light">
              No izvēles līdz <em>vakaram.</em>
            </h2>
          </Reveal>
        </div>
        <div className="drl-process__grid">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal motion={motion} delay={i * 120} key={s.n} className="drl-process__step">
              <div className="drl-process__num">{s.n}</div>
              <div className="drl-process__title">{s.title}</div>
              <div className="drl-process__body">{s.body}</div>
            </Reveal>
          ))}
        </div>
        <Reveal motion={motion} delay={500} className="drl-process__cta">
          <Link href="/ka-tas-notiek" className="drl-btn drl-btn--solid drl-btn--light">
            <span>Detalizēti par procesu</span>
            <ArrowSmall />
          </Link>
        </Reveal>
      </section>

      <CTASection motion={motion} />
    </main>
  );
}
