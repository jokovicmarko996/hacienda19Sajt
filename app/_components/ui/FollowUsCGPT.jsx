"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const GREEN = "#4cffb3";

export default function FollowUsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconsWrapVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-24">
      {/* background glows (same as other pages/sections) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-8 py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={cardVariants}
        >
          {/* subtle inner overlay like in other sections */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          {/* corner accents */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#4cffb3]/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />

          <motion.h2
            className="relative z-10 font-panchang text-3xl md:text-4xl lg:text-5xl"
            style={{ color: GREEN }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Pratite nas na <br />
            društvenim mrežama
          </motion.h2>

          {/* Always single row; on very small screens allow horizontal scroll (no wrapping) */}
          <motion.div
            className="relative z-10 mt-10 flex flex-nowrap justify-center gap-4 overflow-x-auto px-2 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={iconsWrapVariants}
          >
            <SocialIcon
              href="https://www.instagram.com/hacienda.outdoorfurniture/"
              label="Instagram"
              variants={iconVariants}
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/Hacijendanamestajoddrveta/"
              label="Facebook"
              variants={iconVariants}
            >
              <FaFacebook />
            </SocialIcon>

            {/* KP before LinkedIn */}
            <SocialIcon
              href="https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190"
              label="KupujemProdajem"
              variants={iconVariants}
            >
              <KpIcon />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/bojan-jokovic-75a6a4310/"
              label="LinkedIn"
              variants={iconVariants}
            >
              <FaLinkedin />
            </SocialIcon>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children, variants }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      variants={variants}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="
        group relative flex items-center justify-center rounded-full
        border border-white/20 bg-black/35
        text-[#4cffb3]
        transition
        hover:border-[#4cffb3]/70 hover:shadow-[0_0_30px_-12px_rgba(76,255,179,0.85)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black

        shrink-0
        h-11 w-11 sm:h-14 sm:w-14
      "
    >
      <span className="text-[20px] sm:text-2xl transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>

      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100 shadow-[0_0_34px_-14px_rgba(76,255,179,0.9)]" />
    </motion.a>
  );
}

function KpIcon() {
  return (
    <span className="font-panchang text-[15px] sm:text-[18px] leading-none lowercase">
      kp
    </span>
  );
}
