// import {
//   FacebookIcon,
//   TwitterIcon,
//   InstagramIcon,
//   LinkedinIcon,
// } from "@/public/icons"; // Replace with your social media icons or use Heroicons

// import {
//   EnvelopeIcon,
//   HomeIcon,
//   WrenchScrewdriverIcon,
//   UserIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/outline";
// import {
//   FacebookIcon,
//   TwitterIcon,
//   InstagramIcon,
//   LinkedinIcon,
// } from "@heroicons/react/24/solid";
"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import {
//   RiFacebookFill,
//   RiTwitterFill,
//   RiInstagramFill,
//   RiLinkedinFill,
// } from "remixicon-react";

export default function FooterC() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="fixed bottom-0 min-w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-12">

    <footer className="  min-w-full bg-black backdrop-blur-md border-t  border-white/20 py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a company dedicated to providing the best service to our
              customers. Join us on our journey!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">
              Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
              />
              <button
                type="submit"
                className="bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300 border border-white/20"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-300 hover:text-white">
                <i class="ri-facebook-line"></i>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <i class="ri-twitter-x-line"></i>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <i class="ri-instagram-line"></i>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <i class="ri-linkedin-line"></i>
              </Link> */}

              <Link
                href="https://www.facebook.com/Hacijendanamestajoddrveta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook className="text-2xl" />
              </Link>

              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/hacienda_namestaj/?__d=1utm_sourceig_embed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </Link>

              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/bojan-jokovic-75a6a4310/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </Link>

              {/* KupujemProdajem Icon */}
              <Link
                href="https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors duration-300 flex-center"
              >
                <p className="text-2xl font-bold ">kp</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-green-400">
            &copy; {currentYear} Hacienda19. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
