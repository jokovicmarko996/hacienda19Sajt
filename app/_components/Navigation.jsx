"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
/* The following plugin is a Club GSAP perk */
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
gsap.registerPlugin(ScrollTrigger);
const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
  { href: "/services", label: "Usluge" },
];

function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useGSAP(() => {
    const nav = navRef.current;

    // GSAP ScrollTrigger to hide/show navigation smoothly
    ScrollTrigger.create({
      trigger: document.body, // Trigger on the entire page
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === -1) {
          // Scrolling up: Show the navigation
          gsap.to(nav, {
            y: 0,
            duration: 0.4, // Smooth transition duration
            // ease: "power4.inOut", // Smooth easing
            ease: "expo.inOut", // Smooth easing
          });
        } else {
          // Scrolling down: Hide the navigation
          gsap.to(nav, {
            y: "-100%",
            duration: 0.4, // Smooth transition duration
            ease: "expo.inOut", // Smooth easing
            // ease: "power4.inOut", // Smooth easing
          });
        }
      },
    });
  }, []);

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
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b rounded-b-lg border-white/10 shadow-md transition-transform"
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
                className={`px-3 py-2 text-lg font-bold font-stardom ${
                  pathname === link.href
                    ? "text-primary  " // Active link style
                    : "text-primary " // Inactive link style
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div ref={menuRef} className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
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
          <div className="lg:hidden mt-2">
            <div className="flex flex-col space-y-4 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  // className={`px-3 py-1 text-sm font-bold font-bodoni ${
                  //   pathname === link.href
                  //     ? "text-white underline decoration-2 decoration-green-400" // Active link style
                  //     : "text-primary hover:text-tertiary" // Inactive link style
                  // }`}
                  className={`px-3 py-1 text-sm font-bold font-stardom ${
                    // className={`px-3 py-1 text-sm font-bold font-panchanglight ${
                    pathname === link.href
                      ? "text-white " // Active link style
                      : "text-primary " // Inactive link style
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
