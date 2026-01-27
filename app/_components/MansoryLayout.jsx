import Image from "next/image";
import Link from "next/link"; // Uvoz Link komponente iz Next.js
import { TiLocationArrow } from "react-icons/ti"; // Uvoz strelice iz Features.jsx

const images_col1 = [
  {
    id: 1,
    src: "/products/pergola1.png",
    aspectRatio: "0.8",
    title: "Pergola 1",
  },
  {
    id: 2,
    src: "/products/pergola2.png",
    aspectRatio: "1.22",
    title: "Pergola 2",
  },
  {
    id: 3,
    src: "/products/pergola3.png",
    aspectRatio: "1.08",
    title: "Pergola 3",
  },
];

const images_col2 = [
  {
    id: 4,
    src: "/products/pergola4.png",
    aspectRatio: "1.02",
    title: "Pergola 4",
  },
  {
    id: 5,
    src: "/products/pergola5.png",
    aspectRatio: "0.71",
    title: "Pergola 5",
  },
  {
    id: 6,
    src: "/products/pergola6.png",
    aspectRatio: "1.6",
    title: "Pergola 6",
  },
];

const images_col3 = [
  {
    id: 7,
    src: "/products/pergola7.png",
    aspectRatio: "0.72",
    title: "Pergola 7",
  },
  {
    id: 8,
    src: "/products/pergola8.png",
    aspectRatio: "1.31",
    title: "Pergola 8",
  },
  {
    id: 9,
    src: "/products/pergola9.png",
    aspectRatio: "1.17",
    title: "Pergola 9",
  },
];

const images_col4 = [
  {
    id: 10,
    src: "/products/pergola10.png",
    aspectRatio: "1.17",
    title: "Pergola 10",
  },
  {
    id: 11,
    src: "/products/pergola11.png",
    aspectRatio: "0.72",
    title: "Pergola 11",
  },
  {
    id: 12,
    src: "/products/pergola12.png",
    aspectRatio: "1.31",
    title: "Pergola 12",
  },
];

const MansoryLayout = () => {
  const renderColumn = (images) => {
    return (
      <div className="grid gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`
              group relative w-full overflow-hidden rounded-2xl
              border border-white/10 bg-black/40
              shadow-[0_0_30px_-22px_rgba(76,255,179,0.45)]
              transition
              hover:border-[#4cffb3]/45 hover:shadow-[0_0_32px_-18px_rgba(76,255,179,0.6)]
              aspect-[${image.aspectRatio}]
            `}
          >
            {/* Link za navigaciju (cela kartica) */}
            <Link href={`/products/${image.id}`} className="absolute inset-0">
              <div className="relative h-full w-full">
                {/* Slika (bez zamračivanja) */}
                <Image
                  src={image.src}
                  alt={image.title}
                  className="h-auto max-w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
              </div>
            </Link>

            {/* Naslov u gornjem levom uglu (isti fontovi kao kod tebe) */}
            <div className="absolute top-2 left-2 z-10 bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md font-panchang">
              {image.title}
            </div>

            {/* "Detalji" zeleno dugme (Link, da stvarno vodi na detalje) */}
            <Link
              href={`/products/${image.id}`}
              aria-label={`Detalji - ${image.title}`}
              className="
                absolute bottom-2 right-2 z-10
                inline-flex items-center gap-2 px-3 py-1
                bg-[#4cffb3] text-black
                text-xs font-amagro sm:font-amagro uppercase
                rounded-full shadow-md
                transition-all duration-300
                hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                active:scale-[0.98]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              <TiLocationArrow className="text-black" />
              <span>Detalji</span>
            </Link>

            {/* suptilan glow (ne utiče na sliku) */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-[#4cffb3]/0 blur-3xl transition duration-500 group-hover:bg-[#4cffb3]/10" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-black px-4 sm:px-6 lg:px-10 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-6">
          {/* green glows */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4cffb3]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {renderColumn(images_col1)}
            {renderColumn(images_col2)}
            {renderColumn(images_col3)}
            {renderColumn(images_col4)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MansoryLayout;
