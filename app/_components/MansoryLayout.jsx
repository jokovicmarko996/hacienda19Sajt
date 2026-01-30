"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";

// a bit softer / more premium green than pure neon
const GREEN = "#2EE6A6";

const images_col1 = [
  {
    id: 1,
    src: "/products/1/1.avif",
    aspectRatio: "0.8",
    title: "Prestige",
  },
  {
    id: 2,
    src: "/products/2/2.avif",
    aspectRatio: "1.22",
    title: "Alpina",
  },
  {
    id: 3,
    src: "/products/3/3.avif",
    aspectRatio: "1.08",
    title: "Adria",
  },
];

const images_col2 = [
  {
    id: 4,
    src: "/products/4/2.avif",
    aspectRatio: "1.02",
    title: "Edge",
  },
  {
    id: 5,
    src: "/products/5/1.avif",
    aspectRatio: "0.71",
    title: "Riviera",
  },
  {
    id: 6,
    src: "/products/6/1.avif",
    aspectRatio: "1.6",
    title: "Riviera Line",
  },
];

const images_col3 = [
  {
    id: 7,
    src: "/products/7/1.avif",
    aspectRatio: "0.72",
    title: "Riviera Compact",
  },
  {
    id: 8,
    src: "/products/8/1.avif",
    aspectRatio: "1.31",
    title: "Elegance",
  },
  {
    id: 9,
    src: "/products/9/5.avif",
    aspectRatio: "1.17",
    title: "Elegance Oasis",
  },
];

const images_col4 = [
  {
    id: 10,
    src: "/products/10/1.avif",
    aspectRatio: "1.17",
    title: "Sharp",
  },
  {
    id: 11,
    src: "/products/11/1.avif",
    aspectRatio: "0.72",
    title: "Roofline",
  },
  {
    id: 12,
    src: "/products/1/1.avif",
    aspectRatio: "1.31",
    title: "Prestige",
  },
];

// parent staggers columns
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// each column staggers its cards
const columnVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MansoryLayout = () => {
  const renderColumn = (images) => {
    return (
      <motion.div className="grid gap-4" variants={columnVariants}>
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60"
            style={{ aspectRatio: image.aspectRatio }} // ensures height
          >
            {/* Whole card is clickable */}
            <Link
              href={`/products/${image.id}`}
              className="absolute inset-0 z-[2]"
              aria-label={`Otvori ${image.title}`}
            />

            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              priority={false}
            />

            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/15 to-black/50" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-transparent to-transparent" />

            <div className="absolute top-2 left-2 z-[3] rounded-md border border-white/10 bg-black/55 px-2 py-1 shadow-md backdrop-blur">
              <span
                className="font-panchang text-xs font-semibold"
                style={{
                  color: GREEN,
                  textShadow: "0 0 18px rgba(46, 230, 166, 0.22)",
                }}
              >
                {image.title}
              </span>
            </div>

            {/* Details navigates too */}
            <Link
              href={`/products/${image.id}`}
              className="
                absolute bottom-2 right-2 z-[3]
                inline-flex items-center gap-2 px-3 py-1
                text-xs font-amagro sm:font-amagro uppercase rounded-full shadow-md
                transition-all duration-300
                bg-black/45 text-white border
                hover:bg-black/55
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              style={{
                borderColor: "rgba(46,230,166,0.55)",
                boxShadow: "0 0 22px -16px rgba(46,230,166,0.7)",
              }}
              aria-label={`Detalji za ${image.title}`}
            >
              <TiLocationArrow style={{ color: GREEN }} />
              <span>Detalji</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <motion.div
      className="w-full grid grid-cols-2 gap-4 bg-black p-4 md:grid-cols-4"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {renderColumn(images_col1)}
      {renderColumn(images_col2)}
      {renderColumn(images_col3)}
      {renderColumn(images_col4)}
    </motion.div>
  );
};

export default MansoryLayout;
