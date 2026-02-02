"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const GREEN = "#4cffb3";
const INITIAL_THUMBS = 6;

// --- animations
const pageWrap = {
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

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.99, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function ProductClient({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllThumbs, setShowAllThumbs] = useState(false);

  const handlePrevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const totalImages = product.images.length;
  const visibleCount = showAllThumbs
    ? totalImages
    : Math.min(INITIAL_THUMBS, totalImages);
  const hiddenCount = totalImages - visibleCount;
  const visibleImages = product.images.slice(0, visibleCount);

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 sm:px-6 lg:px-10 pt-24 pb-14">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={pageWrap}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-6"
          variants={fadeUp}
        >
          {/* subtle inner overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Gallery */}
            <motion.div className="lg:col-span-7" variants={cardIn}>
              <motion.div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.45)]
                "
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={product.images[currentImageIndex]}
                      className="absolute inset-0"
                      initial={{
                        opacity: 0,
                        scale: 1.015,
                        filter: "blur(10px)",
                      }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.99, filter: "blur(10px)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* title chip */}
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-xl border border-white/10 bg-black/45 px-3 py-1 text-sm font-panchang text-white/85 backdrop-blur-md">
                    {product.title}
                  </span>
                </div>

                {/* nav buttons */}
                <motion.button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Prethodna slika"
                  className="
                    absolute left-3 top-1/2 -translate-y-1/2
                    inline-flex h-11 w-11 items-center justify-center rounded-xl
                    border border-white/10 bg-black/45 text-white/85 backdrop-blur-md
                    transition
                    hover:border-[#4cffb3]/50 hover:text-[#4cffb3] hover:shadow-[0_0_22px_-12px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  <span className="text-lg font-bold">&lt;</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Sledeća slika"
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    inline-flex h-11 w-11 items-center justify-center rounded-xl
                    border border-white/10 bg-black/45 text-white/85 backdrop-blur-md
                    transition
                    hover:border-[#4cffb3]/50 hover:text-[#4cffb3] hover:shadow-[0_0_22px_-12px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  <span className="text-lg font-bold">&gt;</span>
                </motion.button>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#4cffb3]/0 blur-3xl transition duration-500 group-hover:bg-[#4cffb3]/10" />
              </motion.div>

              {/* Thumbnails */}
              <motion.div
                className="mt-4 grid grid-cols-3 gap-3 sm:gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {visibleImages.map((image, index) => {
                  const active = index === currentImageIndex;
                  const isLastVisibleWithMore =
                    !showAllThumbs &&
                    index === visibleCount - 1 &&
                    hiddenCount > 0;

                  return (
                    <motion.button
                      key={`${image}-${index}-${
                        showAllThumbs ? "all" : "init"
                      }`}
                      type="button"
                      onClick={() => {
                        if (isLastVisibleWithMore) setShowAllThumbs(true);
                        else setCurrentImageIndex(index);
                      }}
                      aria-label={
                        isLastVisibleWithMore
                          ? `Prikaži još ${hiddenCount} slika`
                          : `Odaberi sliku ${index + 1}`
                      }
                      variants={{
                        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: { duration: 0.45, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.985 }}
                      className={`
                        group relative overflow-hidden rounded-2xl border bg-black/40
                        transition
                        ${
                          active
                            ? "border-[#4cffb3]/60 shadow-[0_0_26px_-15px_rgba(76,255,179,0.75)]"
                            : "border-white/10 hover:border-[#4cffb3]/45 hover:shadow-[0_0_22px_-14px_rgba(76,255,179,0.6)]"
                        }
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                      `}
                    >
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`${product.title} - Slika ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 33vw, 20vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      {isLastVisibleWithMore && (
                        <div className="absolute inset-0 grid place-items-center bg-black/55">
                          <span
                            className="rounded-xl bg-[#4cffb3] px-3 py-1 text-sm font-semibold text-black shadow-[0_0_26px_-14px_rgba(76,255,179,0.75)]"
                            style={{ boxShadow: `0 0 26px -14px ${GREEN}` }}
                          >
                            +{hiddenCount}
                          </span>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {!showAllThumbs && totalImages > INITIAL_THUMBS && (
                <motion.div className="mt-3 flex justify-end" variants={fadeUp}>
                  <motion.button
                    type="button"
                    onClick={() => setShowAllThumbs(true)}
                    whileTap={{ scale: 0.98 }}
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md
                      bg-[#4cffb3] px-3 py-2 text-sm font-bold text-black
                      transition-all duration-300
                      hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                  >
                    Prikaži sve slike
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div className="lg:col-span-5" variants={cardIn}>
              <motion.div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40 p-5 sm:p-6
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
                "
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

                <div className="relative z-10 space-y-4">
                  <motion.h1
                    className="text-2xl sm:text-3xl font-panchang text-white"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    {product.title}
                  </motion.h1>

                  <div className="h-px w-full bg-white/10" />

                  <motion.h2
                    className="text-xl font-panchang text-[#4cffb3]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.05,
                    }}
                  >
                    Opis
                  </motion.h2>

                  <motion.p
                    className="text-white/70 text-base sm:text-lg font-serif text-justify leading-relaxed whitespace-pre-line"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="h-px w-full bg-white/10" />

                  <motion.div
                    className="space-y-4 sm:space-y-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.15,
                    }}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-panchang text-[#4cffb3]">
                        Cena
                      </h3>

                      <motion.span
                        className="
                          inline-flex w-fit items-center justify-center
                          rounded-xl px-3 py-1 text-sm font-semibold
                          bg-[#4cffb3] text-black
                          shadow-[0_0_26px_-14px_rgba(76,255,179,0.75)]
                        "
                        style={{ boxShadow: `0 0 26px -14px ${GREEN}` }}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {product.price}
                      </motion.span>
                    </div>

                    <div className="pt-1 sm:pt-2">
                      <Link
                        href="/contact"
                        aria-label={`Poruči ${product.title}`}
                        className="block"
                      >
                        <motion.button
                          type="button"
                          whileHover={{ y: -1, scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="
                            w-full inline-flex items-center justify-center gap-2
                            rounded-xl px-4 py-3
                            bg-black/30 text-[#4cffb3]
                            border border-[#4cffb3]/60
                            font-panchang text-sm sm:text-base
                            transition-all duration-300
                            hover:bg-black/45 hover:border-[#4cffb3]
                            hover:shadow-[0_0_26px_-14px_rgba(76,255,179,0.55)]
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                          "
                        >
                          Poruči
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
