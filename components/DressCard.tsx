"use client";
import Link from "next/link";
import { useState } from "react";
import type { Dress } from "@/lib/data";
import type { MotionLevel } from "@/lib/motion";
import { Reveal, Placeholder, ArrowSmall } from "./primitives";

export function DressCard({
  dress,
  motion,
  index = 0,
}: {
  dress: Dress;
  motion: MotionLevel;
  index?: number;
}) {
  const [hover, setHover] = useState(false);
  const placeholder = dress.placeholder;

  const content = (
    <>
      {placeholder ? (
        <Placeholder label="Drīzumā" color="#C9A678" />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dress.cover} alt={dress.name} loading="lazy" />
          {dress.gallery[1] && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              className="drl-card__hover"
              src={dress.gallery[1]}
              alt=""
              loading="lazy"
              style={{ opacity: hover ? 1 : 0 }}
            />
          )}
        </>
      )}
      <div className="drl-card__chip">
        {placeholder ? "Drīzumā" : "Skatīt"}
        <ArrowSmall />
      </div>
    </>
  );

  return (
    <Reveal motion={motion} delay={index * 60} as="article" className="drl-card">
      {placeholder ? (
        <div className="drl-card__media" aria-label={dress.name}>
          {content}
        </div>
      ) : (
        <Link
          href={`/kleita/${dress.id}`}
          className="drl-card__media"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label={dress.name}
        >
          {content}
        </Link>
      )}
      <div className="drl-card__meta">
        <div className="drl-card__row">
          <span className="drl-card__name">{dress.name}</span>
          <span className="drl-card__price">
            €{dress.price}
            <span className="drl-card__per">/vakars</span>
          </span>
        </div>
        <div className="drl-card__row drl-card__row--sub">
          <span>{dress.silhouette}</span>
          <span>{dress.color}</span>
        </div>
      </div>
    </Reveal>
  );
}
