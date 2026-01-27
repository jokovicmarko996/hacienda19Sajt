"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" },
];

export default function FooterC() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const isActive = (href) => pathname === href;

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      {/* green glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-14">
        {/* frame */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-6 py-10 sm:px-10">
          {/* subtle inner overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Column 1 */}
            <div>
              <Link href="/about" className="inline-block">
                <h3 className="font-panchang text-lg text-[#4cffb3]">O nama</h3>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Mi smo kompanija posvećena pružanju najbolje usluge našim
                kupcima. Pridružite nam se na našem putovanju!
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-panchang text-lg text-[#4cffb3]">Linkovi</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors ${
                        isActive(link.href)
                          ? "text-[#4cffb3]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-panchang text-lg text-[#4cffb3]">Novosti</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Pretplatite se kako bi dobili najnovije vesti o našim
                proizvodima i ponude.
              </p>

              <form className="mt-4 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Vaš email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#4cffb3]/60 focus:ring-2 focus:ring-[#4cffb3]/20"
                />

                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                    bg-[#4cffb3] text-black
                    transition
                    hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  Pretplati se
                </button>
              </form>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-panchang text-lg text-[#4cffb3]">
                Zapratite nas
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <SocialIcon
                  href="https://www.facebook.com/Hacijendanamestajoddrveta/"
                  label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </SocialIcon>

                <SocialIcon
                  href="https://www.instagram.com/hacienda.outdoorfurniture/"
                  label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </SocialIcon>

                <SocialIcon
                  href="https://www.linkedin.com/in/bojan-jokovic-75a6a4310/"
                  label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </SocialIcon>

                <SocialIcon
                  href="https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190"
                  label="KupujemProdajem"
                >
                  <span className="text-sm font-bold tracking-wide">kp</span>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* brand + bottom */}
          <div className="relative z-10 mt-10">
            <Link href="/" className="block">
              <h1 className="text-center font-panchang text-2xl text-[#4cffb3]">
                Hacienda
              </h1>
            </Link>

            <div className="mt-6 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-white/60">
                &copy; {currentYear} Hacienda19. Sva prava su rezervirana.
              </p>

              <p className="mt-1 text-sm text-white/60">
                Sajt izradio{" "}
                <Link
                  href="https://www.instagram.com/j_marko.26/"
                  target="_blank"
                  className="text-[#4cffb3] hover:underline"
                >
                  MarkoDev
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        inline-flex h-11 w-11 items-center justify-center rounded-xl
        border border-white/10 bg-black/40 text-white/80
        transition
        hover:border-[#4cffb3]/50 hover:text-[#4cffb3] hover:shadow-[0_0_22px_-12px_#4cffb3]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
      "
    >
      {children}
    </Link>
  );
}
