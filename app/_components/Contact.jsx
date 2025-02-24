import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center my-16">
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center my-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Have questions? We&apos;re here to help. Get in touch with us today!
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Store Location
            </h2>
            <p className="mt-2 text-gray-600">123 Pergola Street</p>
            <p className="text-gray-600">Belgrade, Serbia</p>
            <p className="text-gray-600">Phone: +381 11 123 4567</p>
            <p className="text-gray-600">Email: info@pergolastore.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://facebook.com/pergolastore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com/pergolastore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Instagram
              </Link>
              <Link
                href="https://twitter.com/pergolastore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <form className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
