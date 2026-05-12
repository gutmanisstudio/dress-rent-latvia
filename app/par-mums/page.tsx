"use client";
import { useMotionPref } from "@/lib/motion";
import { Reveal, ParallaxImage } from "@/components/primitives";
import { CTASection } from "@/components/CTASection";

const NUMBERS = [
  { n: "1/1", label: "Katra kleita unikāla" },
  { n: "XS–M", label: "Pieejamie izmēri" },
  { n: "LV", label: "Sūtām visā Latvijā" },
  { n: "Liepāja", label: "Saņemšana studijā" },
];

const VALUES = [
  { n: "I", t: "Atlasīt", b: "Katra kleita iziet personīgu atlasi un pārveidi. Vienā eksemplārā — unikāla tikai Tev." },
  { n: "II", t: "Saudzēt", b: "Profesionāla tīrīšana ar maigiem līdzekļiem starp katru nomu. Mazi labojumi tūlīt." },
  { n: "III", t: "Konsultēt", b: "Godīgs padoms, kas patiešām piestāv. Nekādas pārdošanas, nekāda spiediena." },
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
            Studija,
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
              Dress Rent Latvia ir privāta kleitu studija Liepājā. Katra kleita kolekcijā ir vienā eksemplārā — šūta, pāršūta un rūpīgi izvēlēta.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <p>
              Es pati pārveidoju un pilnveidoju katru kleitu ar savu radošo redzējumu — lai Tu justos īpaša, sievišķīga un pārliecināta. Pieejamie izmēri: XS līdz M. Kleitas svētkiem, pasākumiem un fotosesijām.
            </p>
          </Reveal>
          <Reveal motion={motion} delay={220}>
            <p>
              Mūsu filozofija ir vienkārša: skaista kleita nedrīkst gulēt skapī. Tā ir paredzēta, lai dejotu — un tad atrastu nākamo īpašnieci.
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
