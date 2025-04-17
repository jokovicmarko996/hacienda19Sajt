import React from "react";

const ProductsContent = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 bg-black p-4 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-panchang text-white mb-6 text-center">
          Naši proizvodi
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-gray-400 leading-relaxed">
              Naše pergole su pažljivo dizajnirane kako bi spojile
              funkcionalnost i estetiku. Svaka pergola izrađena je od
              visokokvalitetnih materijala, pružajući dugotrajnost i otpornost
              na vremenske uslove. Bez obzira na veličinu ili stil vašeg
              prostora, naše pergole su prilagodljive vašim potrebama.
            </p>
          </div>

          {/* Column 2 (Hidden on smaller screens) */}
          <div className="hidden md:block bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-gray-400 leading-relaxed">
              Nudimo širok spektar pergola, uključujući klasične, moderne i
              rustične dizajne. Naš cilj je da vaš eksterijer pretvorimo u
              prostor za uživanje i opuštanje, bilo da se radi o vašem dvorištu,
              terasi ili poslovnom prostoru. Sa našim pergolama, svaki trenutak
              na otvorenom postaje poseban.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
