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
            className={`relative w-full aspect-[${image.aspectRatio}]`}
          >
            {/* Link za navigaciju */}
            <Link href={`/products/${image.id}`}>
              <div className="block relative w-full h-full">
                {/* Slika */}
                <Image
                  src={image.src}
                  alt={image.title}
                  className="h-auto max-w-full object-cover rounded-lg"
                  fill
                />
              </div>
            </Link>

            {/* Naslov u gornjem levom uglu */}
            <div className="absolute top-2 left-2 bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md font-panchang">
              {image.title}
            </div>

            {/* Dugme u donjem desnom uglu */}
            <button className="absolute bottom-2 right-2 flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-amagro sm:font-amagro uppercase rounded-full shadow-md hover:bg-gray-800 transition-all duration-300">
              <TiLocationArrow className="text-white" />
              <span>Detalji</span>
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black p-4">
      {/* Prva kolona */}
      {renderColumn(images_col1)}

      {/* Druga kolona */}
      {renderColumn(images_col2)}

      {/* Treća kolona */}
      {renderColumn(images_col3)}

      {/* Četvrta kolona */}
      {renderColumn(images_col4)}
    </div>
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
