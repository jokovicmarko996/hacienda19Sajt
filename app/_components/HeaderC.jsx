"use client";
{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg> */
}

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/logo.png";

const HeaderC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="max-w-full">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b rounded-b-lg border-white/10 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            {/* Logo */}
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              {/* <div className="text-2xl font-bold text-gray-900">Brand</div> */}
              <Image src={logo} alt="Logo Hacienda" width={60} height={60} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              <Link href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-500">
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-blue-500"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-blue-500"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-500"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div ref={menuRef} className="lg:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
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
                    strokeWidth={1.5}
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
            <div className="md:hidden mt-2">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-800 hover:text-blue-500">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-blue-500"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

// export default Navbar;

//   )
// }

export default HeaderC;
