import React from "react";

const ContactContent = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-panchang text-white mb-8 text-center">
          Kontaktirajte nas
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Naša adresa</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Hacienda d.o.o. <br />
              Ulica Pere Perića 123 <br />
              11000 Beograd, Srbija
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-4">Telefon</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              +381 11 123 4567
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-4">Email</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              info@hacienda.rs
            </p>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Pošaljite poruku
            </h3>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-400 mb-2"
                >
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Unesite vaše ime"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-400 mb-2"
                >
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Unesite vašu email adresu"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-400 mb-2"
                >
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Unesite vašu poruku"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
              >
                Pošalji
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
