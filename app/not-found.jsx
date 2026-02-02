import Link from "next/link";

export const metadata = {
  title: "Stranica nije pronađena | Hacienda Premium Pergole",
  description:
    "Stranica koju tražiš ne postoji ili je promenjena. Vrati se na početnu, pogledaj proizvode ili nas kontaktiraj.",
  robots: { index: false, follow: true },
};

const GREEN = "#4cffb3";

export default function NotFound() {
  const baseBtn =
    "w-full inline-flex items-center justify-center rounded-full px-7 py-3.5 " +
    "font-panchang text-sm sm:text-base " +
    "transition-all duration-200 " +
    "hover:-translate-y-0.5 active:translate-y-0 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black px-4 pt-24 pb-16 sm:px-6 lg:px-10">
      {/* background effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-3xl">
        <div
          className="relative overflow-hidden rounded-3xl border bg-black/60 p-6 text-center sm:p-10"
          style={{ borderColor: `${GREEN}40` }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

          <div className="relative z-10">
            <p
              className="mx-auto inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${GREEN}1a`,
                color: GREEN,
                border: `1px solid ${GREEN}33`,
              }}
            >
              404 — Stranica nije pronađena
            </p>

            <h1 className="mt-5 font-panchang text-3xl text-white sm:text-4xl">
              Ne možemo da pronađemo traženu stranicu.
            </h1>

            <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-white/70 sm:text-lg">
              Link je možda pogrešan, stranica je obrisana ili je promenila
              adresu. Izaberi jednu od opcija ispod.
            </p>

            {/* ✅ Buttons stacked + different styles + no arrows */}
            <div className="mx-auto mt-7 grid w-full max-w-sm gap-3">
              <Link
                href="/"
                className={`${baseBtn} text-black hover:brightness-110 active:brightness-95`}
                style={{
                  backgroundColor: GREEN,
                  boxShadow: `0 16px 44px -22px ${GREEN}cc`,
                }}
                aria-label="Vrati se na početnu stranicu"
              >
                Nazad na početnu
              </Link>

              <Link
                href="/products"
                className={`${baseBtn} border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#4cffb3]/40`}
                aria-label="Pogledaj sve proizvode"
              >
                Pogledaj proizvode
              </Link>

              <Link
                href="/contact"
                className={`${baseBtn} border border-[#4cffb3]/55 bg-black/30 text-[#4cffb3] hover:border-[#4cffb3] hover:bg-black/45`}
                aria-label="Kontaktiraj nas"
              >
                Kontakt
              </Link>
            </div>

            <div className="mt-7 h-px w-full bg-white/10" />

            <p className="mt-5 text-sm text-white/50">
              Ako si došao preko linka sa sajta, pošalji nam poruku da ispravimo
              grešku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
