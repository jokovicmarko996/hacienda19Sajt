"use client";

import Image from "next/image";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import { motion } from "framer-motion";

// a bit softer / more premium green than pure neon
const GREEN = "#2EE6A6";

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

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
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
      <div className="grid gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 aspect-[${image.aspectRatio}]`}
          >
            {/* clickable area */}
            <Link
              href={`/products/${image.id}`}
              className="absolute inset-0 z-[2]"
            >
              <span className="sr-only">{image.title}</span>
            </Link>

            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              priority={false}
            />

            {/* readability overlay */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/15 to-black/50" />

            {/* subtle top highlight */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-transparent to-transparent" />

            {/* green glows */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 z-[1] h-72 w-72 rounded-full blur-3xl opacity-70"
              style={{ backgroundColor: GREEN, opacity: 0.12 }}
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-28 z-[1] h-80 w-80 rounded-full blur-3xl opacity-60"
              style={{ backgroundColor: GREEN, opacity: 0.1 }}
            />

            {/* title (add green accent) */}
            <div className="absolute top-2 left-2 z-[3] rounded-md border border-white/10 bg-black/55 px-2 py-1 shadow-md backdrop-blur">
              <span
                className="font-panchang text-xs font-semibold"
                style={{
                  color: GREEN,
                  textShadow: "0 0 18px rgba(46,230,166,0.22)",
                }}
              >
                {image.title}
              </span>
            </div>

            {/* Details button (same font & size; only color + border in green) */}
            <button
              type="button"
              className="
                absolute bottom-2 right-2 z-[3]
                flex items-center gap-2 px-3 py-1
                text-xs font-amagro sm:font-amagro uppercase rounded-full shadow-md
                transition-all duration-300
                bg-black/45 text-white
                border
                hover:bg-black/55
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              style={{
                borderColor: "rgba(46,230,166,0.55)",
                boxShadow: "0 0 22px -16px rgba(46,230,166,0.7)",
              }}
            >
              <TiLocationArrow style={{ color: GREEN }} />
              <span>Detalji</span>
            </button>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className="grid grid-cols-2 gap-4 bg-black p-4 md:grid-cols-4"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {renderColumn(images_col1)}
      {renderColumn(images_col2)}
      {renderColumn(images_col3)}
      {renderColumn(images_col4)}
    </motion.div>
  );
};

export default MansoryLayout;

// import Image from "next/image";
// import React from "react";

// {
//   /* <div className="w-full aspect-[1.25] bg-gray-300"></div> */
// }
// // w-full → Makes the div take the full width of its parent.
// // aspect-[1.25] → Sets height dynamically so that height = width × 1.25.

// // Array holding image sources and aspect ratios
// const images = [
//   { src: "/hero/pergola1.png", aspectRatio: "aspect-[0.8]" },
//   { src: "/hero/pergola2.png", aspectRatio: "aspect-[1.22]" },
//   { src: "/hero/pergola3.png", aspectRatio: "aspect-[1.08]" },
//   { src: "/hero/pergola4.png", aspectRatio: "aspect-[1.02]" },
//   { src: "/hero/pergola5.png", aspectRatio: "aspect-[0.71]" },
//   { src: "/hero/pergola6.png", aspectRatio: "aspect-[1.6]" },
//   { src: "/hero/pergola1.png", aspectRatio: "aspect-[0.72]" },
//   { src: "/hero/pergola2.png", aspectRatio: "aspect-[1.31]" },
//   { src: "/hero/pergola3.png", aspectRatio: "aspect-[1.17]" },
//   { src: "/hero/pergola4.png", aspectRatio: "aspect-[1.44]" },
//   { src: "/hero/pergola5.png", aspectRatio: "aspect-[0.61]" },
//   { src: "/hero/pergola6.png", aspectRatio: "aspect-[1.57]" },
// ];

// const images_col1 = [
//   { src: "/products/pergola1.png", aspectRatio: "0.8" },
//   { src: "/products/pergola2.png", aspectRatio: "1.22" },
//   { src: "/products/pergola3.png", aspectRatio: "1.08" },
// ];

// const images_col2 = [
//   { src: "/products/pergola4.png", aspectRatio: "1.02" },
//   { src: "/products/pergola5.png", aspectRatio: "0.71" },
//   { src: "/products/pergola6.png", aspectRatio: "1.6" },
// ];

// const images_col3 = [
//   { src: "/products/pergola7.png", aspectRatio: "0.72" },
//   { src: "/products/pergola8.png", aspectRatio: "1.31" },
//   { src: "/products/pergola9.png", aspectRatio: "1.17" },
// ];

// // const images_col4 = [
// //   { src: "/products/pergola10.png", aspectRatio: "1.44" },
// //   { src: "/products/pergola11.png", aspectRatio: "0.61" },
// //   { src: "/products/pergola12.png", aspectRatio: "1.57" },
// // ];

// const images_col4 = [
//   { src: "/products/pergola10.png", aspectRatio: "1.17" },
//   { src: "/products/pergola11.png", aspectRatio: "0.72" },
//   { src: "/products/pergola12.png", aspectRatio: "1.31" },
// ];

// const MansoryLayout = () => {
//   return (
//     <>
//       {/* MANSORY GRID  */}
//       <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black p-4">
//         {/* PRVA KOLONA */}
//         <div class="grid gap-4">
//           {images_col1.map((image, index) => (
//             <div
//               key={index}
//               className={`relative w-full aspect-[${image.aspectRatio}]`}
//             >
//               <Image
//                 src={image.src}
//                 alt={`Masonry image ${index + 1}`}
//                 className="h-auto max-w-full object-cover  rounded-lg "
//                 // placeholder="blur" // Optional: Add a blur placeholder
//                 // blurDataURL={image.src} // Optional: Use the same image as a placeholder
//                 fill // Ensures the image fills the container
//               />
//             </div>
//           ))}
//         </div>

//         {/* DRUGA KOLONA */}
//         <div class="grid gap-4">
//           {images_col2.map((image, index) => (
//             <div
//               key={index}
//               className={`relative w-full aspect-[${image.aspectRatio}]`}
//             >
//               <Image
//                 src={image.src}
//                 alt={`Masonry image ${index + 1}`}
//                 className="h-auto max-w-full  rounded-lg "
//                 // placeholder="blur" // Optional: Add a blur placeholder
//                 // blurDataURL={image.src} // Optional: Use the same image as a placeholder
//                 fill // Ensures the image fills the container
//               />
//             </div>
//           ))}
//         </div>

//         {/* TRECA KOLONA */}
//         <div class="grid gap-4">
//           {images_col3.map((image, index) => (
//             <div
//               key={index}
//               className={`relative w-full aspect-[${image.aspectRatio}]`}
//             >
//               <Image
//                 src={image.src}
//                 alt={`Masonry image ${index + 1}`}
//                 className="h-auto max-w-full  rounded-lg "
//                 // placeholder="blur" // Optional: Add a blur placeholder
//                 // blurDataURL={image.src} // Optional: Use the same image as a placeholder
//                 fill // Ensures the image fills the container
//               />
//             </div>
//           ))}
//         </div>

//         {/* CETVRTA KOLONA */}
//         <div class="grid gap-4">
//           {images_col4.map((image, index) => (
//             <div
//               key={index}
//               className={`relative w-full aspect-[${image.aspectRatio}]`}
//             >
//               <Image
//                 src={image.src}
//                 alt={`Masonry image ${index + 1}`}
//                 className="h-auto max-w-full  rounded-lg "
//                 // placeholder="blur" // Optional: Add a blur placeholder
//                 // blurDataURL={image.src} // Optional: Use the same image as a placeholder
//                 fill // Ensures the image fills the container
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//     </>
//   );
// };

// export default MansoryLayout;

// {
//   /* MANSORY GRID */
// }
// <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
//   <div class="grid gap-4">
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div class="grid gap-4">
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div class="grid gap-4">
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
//         alt=""
//       />
//     </div>
//   </div>
//   <div class="grid gap-4">
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         class="h-auto max-w-full rounded-lg"
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
//         alt=""
//       />
//     </div>
//   </div>
// </div>;
