"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { FaArrowUp } from "react-icons/fa";

const Button = ({ text, href, onClick, className }) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href; // Navigacija na zadati URL
    } else if (onClick) {
      onClick(); // Poziv funkcije ako je prosleđena
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-2 py-1 bg-green-600
         text-white text-sm font-bold rounded-md hover:bg-green-700 transition-all duration-300 ${className}`}
    >
      {text}
      <FaArrowUp className="text-white rotate-45" /> {/* Ikonica strelice */}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  href: null,
  onClick: null,
  className: "",
};

const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
];

function Navigation() {
  const pathname = usePathname();
  const controls = useAnimation(); // Kontrola animacija
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Skrolovanje na dole - sakrij navigaciju
        controls.start({
          y: "-100%",
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      } else {
        // Skrolovanje na gore - prikaži navigaciju
        controls.start({
          y: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b rounded-b-lg border-white/10 shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-gray-800">
            <p className="text-black text-lg sm:text-3xl font-panchang font-medium">
              Hacienda
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-lg font-bold font-serif ${
                  pathname === link.href
                    ? "text-primary underline decoration-2" // Active link style
                    : "text-primary" // Inactive link style
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Button */}
            <Button text="Zatraži ponudu" href="/contact" className="ml-4" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
