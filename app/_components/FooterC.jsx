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
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
  // { href: "/projects", label: "Projects" }, nzm da li ovo dodati jer je slicno kao produkti
  { href: "/services", label: "Usluge" },
];

export default function FooterC() {
  const pathname = usePathname();
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="fixed bottom-0 min-w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-12">

    <footer className="overflow-x-hidden  max-w-full bg-black backdrop-blur-md border-t  border-white/20 py-12 font-serif ">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <Link href="/about">
            <h3 className="text-lg font-bold mb-4 text-green-400">O nama</h3>
            <p className="text-sm text-gray-300">
              Mi smo kompanija posvećena pružanju najbolje usluge našim kupcima.
              Pridružite nam se na našem putovanju!
            </p>
          </Link>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Linkovi</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li
                  className="text-sm text-gray-300 hover:text-tertiary"
                  key={index}
                >
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Novosti</h3>
            <p className="text-sm text-gray-300 mb-4">
              Pretplatite se kako bi dobili najnovije vesti o našim proizovdima
              i ponude.
              {/* Subscribe to our newsletter to get the latest updates. */}
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Vaš email"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
              />
              {/* TO DO ->  */}
              <button
                type="submit"
                className="bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300 border border-white/20"
              >
                Pretplati se
              </button>
            </form>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">
              Zapratite nas
            </h3>
            <div className="flex space-x-4">
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
                href="https://www.instagram.com/hacienda.outdoorfurniture/"
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
                className="text-white hover:text-blue-700 transition-colors duration-300 flex-center"
              >
                <p className="text-2xl font-bold ">kp</p>
              </Link>
            </div>
          </div>
        </div>

        {/* dodat textualni logo  */}
        <Link href="/">
          <h1 className="text-2xl font-normal text-green-400 text-center pt-5 font-panchang">
            Hacienda
          </h1>
        </Link>

        {/* Bottom Footer Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-green-400">
            &copy; {currentYear} Hacienda19. Sva prava su rezervirana.
          </p>
          <p className="text-sm text-green-400">
            Sajt izradio{" "}
            <span>
              <Link
                href={`https://www.instagram.com/j_marko.26/`}
                target="_blank"
              >
                MarkoDev
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
