import Image from "next/image";
import React from "react";

const AboutContent = () => {
  return (
    <section>
      {/* <AboutPageTextAnimation /> */}

      <section>
        {/* ovde dodaj animaciju text */}
        {/* Pergole koje oblikuju prostor i doživljaj */}
      </section>

      <section className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Row 1: Text Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              O nama
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Welcome to Hacienda! We are dedicated to providing the best
              services and products to our customers. Our mission is to create
              innovative solutions that make your life easier and more
              enjoyable.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With years of experience and a passion for excellence, we strive
              to exceed your expectations in every way possible.
            </p>
            <button className="px-6 py-3 bg-green-400 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
              Pogledaj više
            </button>
          </div>

          {/* Row 1: Image Column */}
          <div className="relative">
            <Image
              src="/removedbackground/pergolaModal2.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
              width={300}
              height={300}
            />
          </div>

          {/* Row 2: Full-Width Content */}
          <div className="col-span-1 md:col-span-2 bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Hacienda, we aim to bridge the gap between innovation and
              practicality. Our team is committed to delivering high-quality
              products and services that empower our customers to achieve their
              goals.
            </p>
          </div>

          {/* Row 3: Two Columns */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white">Our Vision</h4>
            <p className="text-lg text-gray-400 leading-relaxed">
              To be a leader in our industry by fostering creativity,
              innovation, and customer satisfaction.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/removedbackground/pergolaModal3.png"
              alt="Our Vision"
              className="rounded-lg shadow-lg w-full h-auto"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* TO DO => KAO U ZENTRY-U SLIKA KOJA SE RASIRI NA EKRAN I IZNAD NJE NEKI TEXT => ISPOD NEKE ANIMACIJE  */}
    </section>
  );
};

export default AboutContent;
