import React from "react";

const ProductsContent = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Products
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our wide range of high-quality products designed to meet your
          needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Product 1
            </h3>
            <p className="text-gray-600">
              A brief description of Product 1. Highlight its features and
              benefits.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Product 2
            </h3>
            <p className="text-gray-600">
              A brief description of Product 2. Highlight its features and
              benefits.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Product 3
            </h3>
            <p className="text-gray-600">
              A brief description of Product 3. Highlight its features and
              benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsContent;
