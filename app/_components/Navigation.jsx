"use client";

import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
];

const Button = ({ text, href = null, onClick = null, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
    else if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-md
        bg-[#4cffb3] px-3 py-2 text-sm font-bold text-black
        transition-all duration-300
        hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
        active:scale-[0.98]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        ${className}`}
    >
      {text}
      <FaArrowUp className="rotate-45 text-black transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
    </button>
  );
};

const NavLink = ({ href, label, mobile = false, pathname, onNavigate }) => {
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`relative ${
        mobile ? "px-3 py-2 text-base" : "px-3 py-2 text-sm"
      } font-semibold transition-colors
        ${active ? "text-[#4cffb3]" : "text-white/80 hover:text-white"}
      `}
    >
      {label}
      <span
        className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[#4cffb3] transition-all ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
};

function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const controls = useAnimation();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 40) {
        controls.start({
          y: "-110%",
          transition: { duration: 0.35, ease: "easeInOut" },
        });
      } else {
        controls.start({
          y: 0,
          transition: { duration: 0.35, ease: "easeInOut" },
        });
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  // keep old behavior: close menu on route change AND when clicking a nav link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavigate = () => setIsOpen(false);

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      {/* outer bg + blur */}
      <div className="relative border-b border-white/10 bg-black/55 backdrop-blur-xl">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#4cffb3]/10 via-transparent to-transparent" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10" onClick={handleNavigate}>
              <p className="font-panchang text-lg sm:text-2xl text-[#4cffb3]">
                Hacienda
              </p>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  onNavigate={handleNavigate}
                />
              ))}

              <Button text="Poruči" href="/contact" className="ml-3" />
            </div>

            {/* Mobile Menu Button */}
            <div ref={menuRef} className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
                aria-expanded={isOpen}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl
                  border border-white/10 bg-black/40 text-white
                  transition
                  hover:border-[#4cffb3]/40 hover:text-[#4cffb3]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="relative block h-5 w-6">
                  {/* top line */}
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-6 rounded bg-current transition-all duration-200 ${
                      isOpen ? "top-2 rotate-45" : ""
                    }`}
                  />
                  {/* middle line */}
                  <span
                    className={`absolute left-0 top-2 h-[2px] w-6 rounded bg-current transition-all duration-200 ${
                      isOpen ? "top-2 -rotate-45" : ""
                    }`}
                  />
                  {/* bottom line */}
                  <span
                    className={`absolute right-0 top-4 h-[2px] w-6 rounded bg-current transition-all duration-200 ${
                      isOpen ? "opacity-0 " : "opacity-100 w-[65%]"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu (animated) */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pb-5 pt-2">
                  <div className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-2">
                    {links.map((link) => (
                      <NavLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        mobile
                        pathname={pathname}
                        onNavigate={handleNavigate}
                      />
                    ))}

                    <div className="px-2 pt-2">
                      <Button
                        text="Poruči"
                        href="/contact"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
