import Image from "next/image";
import React from "react";

{
  /* <div className="w-full aspect-[1.25] bg-gray-300"></div> */
}
// w-full → Makes the div take the full width of its parent.
// aspect-[1.25] → Sets height dynamically so that height = width × 1.25.

const MansoryLayout = () => {
  return (
    <>
      {/* MANSORY GRID */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* MANSORY GRID  */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* PRVA KOLONA */}
        <div class="grid gap-4">
          <div className="w-full aspect-[0.8] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.22] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.08] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
        </div>

        {/* DRUGA KOLONA */}
        <div class="grid gap-4">
          <div className="w-full aspect-[1.02] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[0.71] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.6] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
        </div>

        {/* TRECA KOLONA */}
        <div class="grid gap-4">
          <div className="w-full aspect-[0.72] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.31] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.17] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
        </div>

        {/* CETVRTA KOLONA */}
        <div class="grid gap-4">
          <div className="w-full aspect-[1.44] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[0.61] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
          <div className="w-full aspect-[1.57] relative ">
            <Image
              className="h-auto max-w-full  rounded-lg"
              fill
              src="/hero/pergola1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MansoryLayout;
