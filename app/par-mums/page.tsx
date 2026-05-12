"use client";
import { useMotionPref } from "@/lib/motion";
import { Reveal, ParallaxImage } from "@/components/primitives";
import { CTASection } from "@/components/CTASection";

const NUMBERS = [
  { n: "112", label: "Siluetes kolekcijā" },
  { n: "6", label: "Gadi studio darbībā" },
  { n: "2 400+", label: "Apkalpotas klientes" },
  { n: "100%", label: "Tīrīšana iekļauta" },
];

const VALUES = [
  { n: "I", t: "Atlasīt", b: "Katra kleita iziet personīgu atlasi. Nepērkam masveidā, neturam to, kas neielas." },
  { n: "II", t: "Saudzēt", b: "Profesionāla tīrīšana ar īpašiem maigiem līdzekļiem starp katru nomu. Mazi labojumi tūlīt." },
  { n: "III", t: "Konsultēt", b: "Godīgs padoms, kas patiešām piestāv. Neviena pārdošana, nekādas spiediena." },
];

export default function AboutPage() {
  const motion = useMotionPref();

  return (
    <main className="drl-about">
      <header className="drl-page__head">
        <Reveal motion={motion}>
          <div className="drl-eyebrow">— Par mums —</div>
        </Reveal>
        <Reveal motion={motion} delay={120}>
          <h1 className="drl-page__title">
            Studio,
            <em> kas dzimst no mīlestības</em>
            <br />
            pret detaļām.
          </h1>
        </Reveal>
      </header>

      <section className="drl-about__story">
        <div className="drl-about__story-l">
          <Reveal motion={motion}>
            <p className="drl-about__lead">
              Dress Rent Latvia ir privāts kleitu studio, kas dibināts 2020. gadā Liepājā.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <p>
              Visu sākām ar vienu skapi un divpadsmit kleitām. Šodien kolekcijā ir vairāk nekā simts vakarkleitu — no eiropiešu dizaineriem, no italian ateljē, no Latvijas mākslinieces. Katra ar savu raksturu.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={220}>
            <p>
              Mūsu filozofija ir vienkārša: skaista kleita nedrīkst gulēt skapī starp izlaidumiem. Tā ir paredzēta, lai dejotu.
            </p>
          </Reveal>
        </div>
        <div className="drl-about__story-r">
          <ParallaxImage src="/assets/pink/pink1.jpg" alt="" motion={motion} amount={40} />
        </div>
      </section>

      <section className="drl-about__numbers">
        {NUMBERS.map((s, i) => (
          <Reveal motion={motion} delay={i * 100} key={s.n} className="drl-about__num">
            <div className="drl-about__num-n">{s.n}</div>
            <div className="drl-about__num-l">{s.label}</div>
          </Reveal>
        ))}
      </section>

      <section className="drl-about__triptych">
        <ParallaxImage src="/assets/silver/silver1.jpg" alt="" motion={motion} amount={30} />
        <ParallaxImage src="/assets/white/white1.jpg" alt="" motion={motion} amount={50} />
        <ParallaxImage src="/assets/black/black3.jpg" alt="" motion={motion} amount={30} />
      </section>

      <section className="drl-about__values">
        <div className="drl-section__head">
          <Reveal motion={motion}>
            <div className="drl-eyebrow">Vērtības</div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <h2 className="drl-section__title">
              Trīs <em>principi.</em>
            </h2>
          </Reveal>
        </div>
        <div className="drl-values">
          {VALUES.map((v, i) => (
            <Reveal motion={motion} delay={i * 120} key={v.n} className="drl-value">
              <div className="drl-value__roman">{v.n}</div>
              <h3>{v.t}</h3>
              <p>{v.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection motion={motion} />
    </main>
  );
}
