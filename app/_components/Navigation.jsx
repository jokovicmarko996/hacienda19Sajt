"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/logo.png";

const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
  // { href: "/projects", label: "Projects" }, nzm da li ovo dodati jer je slicno kao produkti
  { href: "/services", label: "Usluge" },
];

function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b rounded-b-lg border-white/10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link href="/" className="text-gray-800 ">
            {/* <div className="text-2xl font-bold text-gray-900">Brand</div> */}
            <Image src={logo} alt="Logo Hacienda" width={60} height={60} />
            {/* <p className="text-black text-lg font-bold">
              Hacienda <span className="text-tertiary">.</span>
            </p> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-lg font-bold  ${
                  pathname === link.href
                    ? " text-green-400   underline decoration-2 decoration-green-400" // Active link style
                    : "text-primary hover:text-tertiary" // Inactive link style
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div ref={menuRef} className="lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              // className="text-tertiary focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // <MenuIcon className="h-6 w-6" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 ">
            <div className="flex flex-col space-y-4 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 text-sm font-medium ${
                    pathname === link.href
                      ? " text-green-400   underline decoration-2 decoration-green-400" // Active link style
                      : "text-primary hover:text-tertiary" // Inactive link style
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons Container */}
            <div className="flex w-1/2  border-t border-black  justify-between items-center py-3">
              {/* Facebook Icon */}
              <Link
                href="https://www.facebook.com/Hacijendanamestajoddrveta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook className="text-2xl" />
              </Link>

              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/hacienda_namestaj/?__d=1utm_sourceig_embed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </Link>

              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/bojan-jokovic-75a6a4310/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </Link>

              {/* KupujemProdajem Icon */}
              <Link
                href="https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors duration-300"
              >
                <p className="text-2xl font-bold">kp</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
