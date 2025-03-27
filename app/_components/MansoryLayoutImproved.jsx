import Image from "next/image";
import React, { useState, useEffect } from "react";

const MansoryLayoutImproved = ({ images }) => {
  const [columns, setColumns] = useState(4); // Default to 4 columns

  console.log("Mansory layout improved kod");

  // Update columns based on viewport size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(2); // 2 columns for small screens
      } else {
        setColumns(4); // 4 columns for larger screens
      }
    };

    // Initial check
    updateColumns();

    // Add event listener for window resize
    window.addEventListener("resize", updateColumns);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Split images into columns
  const columnImages = Array.from({ length: columns }, (_, colIndex) =>
    images.filter((_, index) => index % columns === colIndex)
  );

  console.log("columnImages", columnImages);
  

  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {columnImages.map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className={`relative w-full aspect-[${image.aspectRatio}]`}
            >
              <Image
                src={image.src}
                alt={`Masonry image ${imgIndex + 1}`}
                className="h-auto max-w-full  rounded-lg "
                // placeholder="blur" // Optional: Add a blur placeholder
                // blurDataURL={image.src} // Optional: Use the same image as a placeholder
                fill // Ensures the image fills the container
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MansoryLayoutImproved;
