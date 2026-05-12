"use client";
import Link from "next/link";
import type { MotionLevel } from "@/lib/motion";
import { ParallaxImage, Reveal, SplitReveal, ArrowSmall } from "./primitives";

export function CTASection({ motion }: { motion: MotionLevel }) {
  return (
    <section className="drl-ctaband">
      <ParallaxImage src="/assets/silver/silver2.jpg" alt="" motion={motion} amount={60} />
      <div className="drl-ctaband__overlay"></div>
      <div className="drl-ctaband__content">
        <Reveal motion={motion}>
          <SplitReveal text="Tava kleita gaida." className="drl-ctaband__title" motion={motion} />
        </Reveal>
        <Reveal motion={motion} delay={300}>
          <p>Pielaikošana — pēc pieraksta Liepājā. Sūtām visā Latvijā ar Omniva un DPD.</p>
        </Reveal>
        <Reveal motion={motion} delay={420}>
          <div className="drl-ctaband__buttons">
            <Link href="/sazinies" className="drl-btn drl-btn--solid drl-btn--light">
              <span>Pieraksties</span>
              <ArrowSmall />
            </Link>
            <Link href="/kolekcija" className="drl-btn drl-btn--text drl-btn--text-light">
              <span>Skatīt kolekciju</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
