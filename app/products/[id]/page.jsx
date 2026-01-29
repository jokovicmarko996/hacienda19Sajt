"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Prestige",
    description:
      "Ova pergola je savršeno rešenje za vaš vrt ili terasu. Izrađena je od visokokvalitetnih materijala koji pružaju dugotrajnost i otpornost na vremenske uslove. Njen moderan dizajn omogućava savršeno uklapanje u svaki prostor, dok pruža zaštitu od sunca i kiše. Idealna je za opuštanje i uživanje na otvorenom.",
    price: "270$/kv",
    images: [
      "/products/1/1.avif",
      "/products/1/2.avif",
      "/products/1/3.avif",
      "/products/1/4.avif",
      "/products/1/5.avif",
      "/products/1/6.avif",
    ],
  },
  {
    id: 2,
    title: "Alpina",
    description:
      "Ova pergola kombinuje funkcionalnost i estetiku. Nudi odličnu zaštitu od vremenskih uslova, dok njen elegantan dizajn doprinosi lepoti vašeg prostora. Lako se montira i održava, što je čini idealnim izborom za svaki dom.",
    price: "285$/kv",
    images: [
      "/products/2/1.avif",
      "/products/2/2.avif",
      "/products/2/3.avif",
      "/products/2/4.avif",
      "/products/2/5.avif",
    ],
  },
  {
    id: 3,
    title: "Adria",
    description:
      "Pergola modernog dizajna koja pruža odličnu zaštitu od sunca i padavina. Kvalitetna izrada i pažljivo odabrani materijali čine je dugotrajnim rešenjem za terase i dvorišta.",
    price: "260$/kv",
    images: [
      "/products/3/1.avif",
      "/products/3/2.avif",
      "/products/3/3.avif",
      "/products/3/4.avif",
      "/products/3/5.avif",
    ],
  },
  {
    id: 4,
    title: "Edge",
    description:
      "Funkcionalna i elegantna pergola koja se lako uklapa u različite stilove eksterijera. Dizajnirana je da ponudi komfor i dodatnu vrednost prostoru za boravak na otvorenom.",
    price: "295$/kv",
    images: [
      "/products/4/1.avif",
      "/products/4/2.avif",
      "/products/4/3.avif",
      "/products/4/4.avif",
      "/products/4/5.avif",
    ],
  },
  {
    id: 5,
    title: "Riviera",
    description:
      "Praktično rešenje za zaštitu i ulepšavanje terase ili bašte. Stabilna konstrukcija, moderan izgled i dobra otpornost na vremenske uslove.",
    price: "255$/kv",
    images: [
      "/products/5/1.avif",
      "/products/5/2.avif",
      "/products/5/3.avif",
      "/products/5/4.avif",
      "/products/5/5.avif",
    ],
  },
  {
    id: 6,
    title: "Riviera Line",
    description:
      "Pergola namenjena za komforan boravak napolju tokom cele sezone. Kombinuje kvalitet, estetiku i dugotrajnost uz minimalno održavanje.",
    price: "275$/kv",
    images: [
      "/products/6/1.avif",
      "/products/6/2.avif",
      "/products/6/3.avif",
      "/products/6/4.avif",
      "/products/6/5.avif",
    ],
  },
  {
    id: 7,
    title: "Riviera Compact",
    description:
      "Savremena pergola koja doprinosi privatnosti i zaštiti od sunca. Idealan izbor za porodična okupljanja, odmor i uživanje na otvorenom.",
    price: "290$/kv",
    images: [
      "/products/7/1.avif",
      "/products/7/2.avif",
      "/products/7/3.avif",
      "/products/7/4.avif",
      "/products/7/5.avif",
    ],
  },
  {
    id: 8,
    title: "Elegance",
    description:
      "Minimalistički dizajn sa naglaskom na funkcionalnost. Pergola je pogodna za različite dimenzije prostora i omogućava prijatan ambijent na terasi.",
    price: "265$/kv",
    images: [
      "/products/8/1.avif",
      "/products/8/2.avif",
      "/products/8/3.avif",
      "/products/8/4.avif",
      "/products/8/5.avif",
    ],
  },
  {
    id: 9,
    title: "Elegance Oasis",
    description:
      "Kvalitetna pergola za terase i bašte koja nudi odličan balans između cene i performansi. Dizajnirana da traje i da izgleda premium.",
    price: "280$/kv",
    images: [
      "/products/9/1.avif",
      "/products/9/2.avif",
      "/products/9/3.avif",
      "/products/9/4.avif",
      "/products/9/5.avif",
    ],
  },
  {
    id: 10,
    title: "Sharp",
    description:
      "Robusna i pouzdana pergola koja pruža zaštitu i lep vizuelni efekat. Pogodna za privatne i komercijalne prostore.",
    price: "300$/kv",
    images: [
      "/products/10/1.avif",
      "/products/10/2.avif",
      "/products/10/3.avif",
      "/products/10/4.avif",
      "/products/10/5.avif",
    ],
  },
  {
    id: 11,
    title: "Roofline",
    description:
      "Elegantna pergola sa modernim linijama. Jednostavna za uklapanje uz postojeći objekat, uz osećaj luksuza i komfora na otvorenom.",
    price: "258$/kv",
    images: [
      "/products/11/1.avif",
      "/products/11/2.avif",
      "/products/11/3.avif",
      "/products/11/4.avif",
      "/products/11/5.avif",
    ],
  },
  {
    id: 12,
    title: "Prestige",
    description:
      "Premium izgled i stabilna konstrukcija za maksimalnu udobnost. Idealna za stvaranje senke i zaštićenog prostora za druženje i odmor.",
    price: "292$/kv",
    images: [
      "/products/1/1.avif",
      "/products/1/2.avif",
      "/products/1/3.avif",
      "/products/1/4.avif",
      "/products/1/5.avif",
      "/products/1/6.avif",
    ],
  },
];

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

const ProductPage = () => {
  const { id } = useParams();

  const product = useMemo(
    () => products.find((p) => p.id === Number.parseInt(id, 10)),
    [id]
  );

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

  if (!product) {
    return (
      <section className="min-h-[60vh] bg-black px-4 sm:px-6 lg:px-10 pt-24 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center">
            <p className="text-white/70">Proizvod nije pronađen.</p>
          </div>
        </div>
      </section>
    );
  }

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

                      {/* +N badge only (images are not darkened otherwise) */}
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
                      // active:scale-[0.98]
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
                    className="text-white/70 text-base sm:text-lg font-serif text-justify leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="h-px w-full bg-white/10" />

                  <motion.div
                    className="flex items-center justify-between gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.15,
                    }}
                  >
                    <h3 className="text-xl font-panchang text-[#4cffb3]">
                      Cena
                    </h3>

                    <motion.span
                      className="
                        inline-flex items-center rounded-xl px-3 py-1 text-sm font-semibold
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
};

export default ProductPage;
