"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    title: "Pergola 1",
    description:
      "Ova pergola je savršeno rešenje za vaš vrt ili terasu. Izrađena je od visokokvalitetnih materijala koji pružaju dugotrajnost i otpornost na vremenske uslove. Njen moderan dizajn omogućava savršeno uklapanje u svaki prostor, dok pruža zaštitu od sunca i kiše. Idealna je za opuštanje i uživanje na otvorenom.",
    price: "1,200$/kv",
    images: [
      "/products/pergola1.png",
      "/products/pergola1.png",
      "/products/pergola2.png",
      "/products/pergola3.png",
      // dodaj još slika po potrebi...
    ],
  },
  {
    id: 2,
    title: "Pergola 2",
    description:
      "Ova pergola kombinuje funkcionalnost i estetiku. Nudi odličnu zaštitu od vremenskih uslova, dok njen elegantan dizajn doprinosi lepoti vašeg prostora. Lako se montira i održava, što je čini idealnim izborom za svaki dom.",
    price: "1,500$/kv",
    images: [
      "/products/pergola2.png",
      "/products/pergola1.png",
      "/products/pergola2.png",
      "/products/pergola3.png",
      // dodaj još slika po potrebi...
    ],
  },
];

const GREEN = "#4cffb3";
const INITIAL_THUMBS = 6;

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

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-6">
          {/* subtle inner overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.45)]
                "
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* title chip */}
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-xl border border-white/10 bg-black/45 px-3 py-1 text-sm font-panchang text-white/85 backdrop-blur-md">
                    {product.title}
                  </span>
                </div>

                {/* nav buttons */}
                <button
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
                </button>

                <button
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
                </button>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#4cffb3]/0 blur-3xl transition duration-500 group-hover:bg-[#4cffb3]/10" />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {visibleImages.map((image, index) => {
                  const active = index === currentImageIndex;
                  const isLastVisibleWithMore =
                    !showAllThumbs &&
                    index === visibleCount - 1 &&
                    hiddenCount > 0;

                  return (
                    <button
                      key={`${image}-${index}`}
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
                    </button>
                  );
                })}
              </div>

              {!showAllThumbs && totalImages > INITIAL_THUMBS && (
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowAllThumbs(true)}
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md
                      bg-[#4cffb3] px-3 py-2 text-sm font-bold text-black
                      transition-all duration-300
                      hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                      active:scale-[0.98]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                  >
                    Prikaži sve slike
                  </button>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40 p-5 sm:p-6
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl sm:text-3xl font-panchang text-white">
                    {product.title}
                  </h1>

                  <div className="h-px w-full bg-white/10" />

                  <h2 className="text-xl font-panchang text-[#4cffb3]">Opis</h2>
                  <p className="text-white/70 text-base sm:text-lg font-serif text-justify leading-relaxed">
                    {product.description}
                  </p>

                  <div className="h-px w-full bg-white/10" />

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-panchang text-[#4cffb3]">
                      Cena
                    </h3>

                    <span
                      className="
                        inline-flex items-center rounded-xl px-3 py-1 text-sm font-semibold
                        bg-[#4cffb3] text-black
                        shadow-[0_0_26px_-14px_rgba(76,255,179,0.75)]
                      "
                      style={{ boxShadow: `0 0 26px -14px ${GREEN}` }}
                    >
                      {product.price}
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
