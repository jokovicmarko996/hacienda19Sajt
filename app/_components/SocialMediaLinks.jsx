import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/Hacijendanamestajoddrveta/",
      icon: (
        <FaFacebook className="text-3xl text-gray-400 hover:text-green-600 transition-all duration-300" />
      ),
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/hacienda.outdoorfurniture/",
      icon: (
        <FaInstagram className="text-3xl text-gray-400 hover:text-green-600 transition-all duration-300" />
      ),
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bojan-jokovic-75a6a4310/",
      icon: (
        <FaLinkedin className="text-3xl text-gray-400 hover:text-green-600 transition-all duration-300" />
      ),
    },
    {
      platform: "KupujemProdajem",
      url: "https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190",
      icon: (
        // <FaLinkedin className="text-3xl text-gray-400 hover:text-green-600 transition-all duration-300" />

        <p className="text-2xl font-bold text-gray-400 hover:text-green-600 transition-all duration-300">
          kp
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg text-center">
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl font-panchang text-white mb-6">
        Pratite nas na društvenim mrežama
      </h3>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-8">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="hover:scale-110 transition-transform duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
