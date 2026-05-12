"use client";
import { useState } from "react";
import { useMotionPref } from "@/lib/motion";
import { Reveal, ArrowLarge } from "@/components/primitives";

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const filled = value && value.length > 0;
  return (
    <label className={`drl-field ${focus || filled ? "is-active" : ""}`}>
      <span className="drl-field__label">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          className="drl-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          rows={4}
        />
      ) : (
        <input
          type={type}
          className="drl-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          required={required}
        />
      )}
      <span className="drl-field__line"></span>
    </label>
  );
}

export default function ContactPage() {
  const motion = useMotionPref();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="drl-contact">
      <header className="drl-page__head">
        <Reveal motion={motion}>
          <div className="drl-eyebrow">— Sazinies —</div>
        </Reveal>
        <Reveal motion={motion} delay={120}>
          <h1 className="drl-page__title">
            Pieraksties uz
            <em> pielaikošanu.</em>
          </h1>
        </Reveal>
        <Reveal motion={motion} delay={240}>
          <p className="drl-page__sub">
            Atstāj ziņu un mēs sazināsimies 24 stundu laikā, lai apstiprinātu tikšanos studio.
          </p>
        </Reveal>
      </header>

      <section className="drl-contact__body">
        <div className="drl-contact__form">
          {sent ? (
            <div className="drl-form drl-form--sent drl-form--big">
              <div className="drl-form__check drl-form__check--big">✓</div>
              <div>
                <div className="drl-form__sent-title">Paldies, {name || "tev"}!</div>
                <div className="drl-form__sent-body">
                  Sazināsimies 24 stundu laikā uz {phone || email || "norādīto kontaktu"}.
                </div>
              </div>
            </div>
          ) : (
            <form className="drl-form drl-form--big" onSubmit={submit}>
              <div className="drl-form__row">
                <Field label="Vārds" value={name} onChange={setName} required />
                <Field label="Telefons" value={phone} onChange={setPhone} required />
              </div>
              <div className="drl-form__row">
                <Field label="E-pasts" value={email} onChange={setEmail} type="email" required />
                <Field label="Vēlamais datums" value={date} onChange={setDate} type="date" />
              </div>
              <Field
                label="Ziņa (kāds pasākums, kuras kleitas interesē)"
                value={message}
                onChange={setMessage}
                textarea
              />
              <button type="submit" className="drl-btn drl-btn--solid drl-btn--block drl-btn--lg">
                <span>Nosūtīt pieprasījumu</span>
                <ArrowLarge />
              </button>
            </form>
          )}
        </div>

        <aside className="drl-contact__side">
          <Reveal motion={motion}>
            <div className="drl-contact__block">
              <div className="drl-eyebrow">Studio</div>
              <p>
                Brīvības iela 00<br />Rīga, LV-1010<br />Latvija
              </p>
            </div>
          </Reveal>
          <Reveal motion={motion} delay={120}>
            <div className="drl-contact__block">
              <div className="drl-eyebrow">Tieši</div>
              <p>
                <a href="tel:+37120000000">+371 2X XXX XXX</a>
                <br />
                <a href="mailto:hello@dressrent.lv">hello@dressrent.lv</a>
                <br />
                <a href="#">@dressrent.lv</a>
              </p>
            </div>
          </Reveal>
          <Reveal motion={motion} delay={240}>
            <div className="drl-contact__block">
              <div className="drl-eyebrow">Darba laiks</div>
              <p>
                O — P · 11:00 — 19:00<br />S — Sv · 12:00 — 17:00<br />Pielaikošana — tikai pēc pieraksta
              </p>
            </div>
          </Reveal>
        </aside>
      </section>
    </main>
  );
}
