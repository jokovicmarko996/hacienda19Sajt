"use client";
import { useParams } from "next/navigation"; // Koristimo useParams za dinamičke parametre
import Image from "next/image";
import { useState } from "react"; // Dodajemo state za navigaciju kroz slike

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
    ],
  },
];

const ProductPage = () => {
  const params = useParams(); // Dohvatanje dinamičkih parametara iz URL-a
  const { id } = params;

  // Pronađi proizvod na osnovu ID-a
  const product = products.find((p) => p.id === parseInt(id));

  // State za praćenje trenutne slike
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funkcije za navigaciju kroz slike
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }

  return (
    <div className="p-4 mt-[calc(60px+10px)]">
      {/* Glavna slika sa naslovom */}
      <div className="relative w-full h-96 mb-4">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="object-cover rounded-lg"
          layout="fill"
        />
        {/* Naslov u donjem desnom uglu */}
        <div className="absolute bottom-2 right-2 bg-white/80 text-black text-sm font-panchang px-3 py-1 rounded-md shadow-md">
          {product.title}
        </div>
        {/* Dugmad za navigaciju */}
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white/20 text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none"
        >
          <span className="text-lg font-bold">&lt;</span>
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white/20 text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none"
        >
          <span className="text-lg font-bold">&gt;</span>
        </button>
      </div>

      {/* Male slike */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {product.images.slice(1).map((image, index) => (
          <div key={index} className="relative w-full h-40">
            <Image
              src={image}
              alt={`${product.title} - Slika ${index + 1}`}
              className="object-cover rounded-lg"
              layout="fill"
            />
          </div>
        ))}
      </div>

      {/* Detalji o proizvodu */}
      <div className="bg-gray-700 text-gray-300 p-6 rounded-lg space-y-4">
        {/* Naslov */}
        <h3 className="text-2xl font-panchang text-white">{product.title}</h3>

        {/* Opis */}
        <h3 className="text-2xl font-panchang text-green-400">Opis</h3>
        <p className="text-gray-300 text-lg font-serif text-justify">
          {product.description}
        </p>

        {/* Cena */}
        <h3 className="text-2xl font-panchang text-green-400">
          Cena: {product.price}
        </h3>
      </div>
    </div>
  );
};

export default ProductPage;
