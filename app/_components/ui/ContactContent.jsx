"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const GREEN = "#4cffb3";

const ContactContent = () => {
  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const colsWrap = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, y: 16, scale: 0.985, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handlePhoneClick = () => {
    track("contact_click", {
      type: "phone",
      value: "+381652670616",
    });
  };

  const handleEmailClick = () => {
    track("contact_click", {
      type: "email",
      value: "Hacienda.office2019@gmail.com",
    });
  };

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const isValid = useMemo(() => {
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [name, email, message]);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setError("");

    track("contact_click", { type: "message_submit" });

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Molimo popunite sva polja.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setStatus("error");
      setError("Unesite ispravnu email adresu.");
      return;
    }

    try {
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website: "", // ✅ honeypot stays empty for real users
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Neuspešno slanje poruke.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      track("contact_message_sent");
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Došlo je do greške. Pokušajte ponovo.");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

      <motion.div
        className="container relative mx-auto max-w-6xl px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2
          className="mb-10 text-center text-2xl font-panchang md:text-5xl"
          style={{ color: GREEN }}
          variants={fadeUp}
        >
          Kontaktirajte nas
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={colsWrap}
        >
          {/* Column 1: Contact Information */}
          <motion.div
            variants={card}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              relative overflow-hidden rounded-3xl
              border border-white/10 bg-black/60 p-6
              shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />

            <div className="relative z-10">
              <h3
                className="mb-4 text-xl font-panchang"
                style={{ color: GREEN }}
              >
                Telefon
              </h3>

              <p className="text-lg leading-relaxed text-white/70">
                <a
                  href="tel:+381652670616"
                  onClick={handlePhoneClick}
                  className="
                    underline-offset-4 transition
                    hover:text-[#4cffb3]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  +381 65 267 0616
                </a>
              </p>

              <h3
                className="mb-4 mt-6 text-xl font-panchang"
                style={{ color: GREEN }}
              >
                Email
              </h3>

              <p className="text-lg leading-relaxed text-white/70">
                <Link
                  href="mailto:Hacienda.office2019@gmail.com"
                  onClick={handleEmailClick}
                  className="
                    underline-offset-4 transition
                    hover:text-[#4cffb3]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  Hacienda.office2019@gmail.com
                </Link>
              </p>

              <h3
                className="mb-4 mt-6 text-xl font-panchang"
                style={{ color: GREEN }}
              >
                Naša adresa
              </h3>

              <p className="text-lg leading-relaxed text-white/70">
                PR Hacienda 2019 <br />
                19320 Kladovo
              </p>
            </div>
          </motion.div>

          {/* Column 2: Contact Form */}
          <motion.div
            variants={card}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              relative overflow-hidden rounded-3xl
              border border-white/10 bg-black/60 p-6
              shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#4cffb3]/10 blur-3xl" />

            <div className="relative z-10">
              <h3
                className="mb-4 text-xl font-panchang"
                style={{ color: GREEN }}
              >
                Pošaljite poruku
              </h3>

              <form className="space-y-4" onSubmit={handleMessageSubmit}>
                {/* ✅ Honeypot (hidden). Bots may fill it; humans won't. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-lg text-white/70"
                  >
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="
                      w-full rounded-xl border border-white/10 bg-black/40 p-3
                      text-white/85 placeholder:text-white/35
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                    placeholder="Unesite vaše ime"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-lg text-white/70"
                  >
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="
                      w-full rounded-xl border border-white/10 bg-black/40 p-3
                      text-white/85 placeholder:text-white/35
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                    placeholder="Unesite vašu email adresu"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-lg text-white/70"
                  >
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="
                      w-full rounded-xl border border-white/10 bg-black/40 p-3
                      text-white/85 placeholder:text-white/35
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                    placeholder="Unesite vašu poruku"
                  />
                </div>

                {status === "success" ? (
                  <p className="text-sm text-[#4cffb3]">
                    Poruka je poslata. Javićemo se uskoro.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={!isValid || status === "sending"}
                  className="
                    w-full rounded-xl bg-[#4cffb3] py-3 font-bold text-black
                    transition-all duration-300
                    hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  {status === "sending" ? "Slanje..." : "Pošalji"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactContent;
