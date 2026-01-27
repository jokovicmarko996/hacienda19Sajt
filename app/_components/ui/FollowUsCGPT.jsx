import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FollowUsSection() {
  return (
    <section className="w-full bg-black px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f2d1f] via-[#143d2a] to-[#0f2d1f] px-8 py-20 text-center">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#4cffb3]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />

          {/* Content */}
          <h2 className="relative z-10 font-panchang text-3xl md:text-4xl lg:text-5xl text-white">
            Pratite nas na <br />
            društvenim mrežama
          </h2>

          {/* Icons */}
          <div className="relative z-10 mt-10 flex justify-center gap-8">
            <SocialIcon
              href="https://www.instagram.com/hacienda.outdoorfurniture/"
              label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/Hacijendanamestajoddrveta/"
              label="Facebook"
            >
              <FaFacebook />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/bojan-jokovic-75a6a4310/"
              label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon
              href="https://www.kupujemprodajem.com/dvoriste-i-basta/suncobrani-tende-i-paviljoni/pergola-sa-istaknutim-sredisnjim-delom-5x6m-premium-proizvod/oglas/163596190"
              label="KupujemProdajem"
            >
              <KpIcon />
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}


function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#4cffb3]/60 hover:text-[#4cffb3]"
    >
      <span className="text-2xl transition group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}

function KpIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
    >
      {/* K */}
      <path d="M6 6v20" />
      <path d="M6 16l8-10" />
      <path d="M6 16l8 10" />

      {/* P */}
      <path d="M18 6v20" />
      <path d="M18 6h6a4 4 0 010 8h-6" />
    </svg>
  );
}

