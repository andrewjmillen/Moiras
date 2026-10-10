import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatWeDoInteractive } from "@/components/what-we-do-interactive";

export const metadata = {
  title: "Qué Hacemos | Moiras",
  description:
    "Acompañamos decisiones complejas con claridad, cuidado y una mirada interdisciplinaria.",
};

export default function QueHacemosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-potter/30 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 font-serif text-xl text-slate/80 sm:text-2xl">
              Asesoramiento en decisiones de salud
            </p>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-terracotta">
              QUÉ HACEMOS
            </p>
              <h1 className="font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
                Acompañamos decisiones complejas que prioricen la autonomía y dignidad.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate/80 sm:text-lg">
                Te ayudamos a diseñar tu plan de cuidado futuro, asegurando que tus decisiones y límites médicos se respeten siempre.
              </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-10 text-center font-serif text-3xl font-semibold text-slate sm:text-4xl">
              Atención a particulares
            </h3>
            <WhatWeDoInteractive audience="private" />
          </div>
        </section>

        <section className="bg-terracotta/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-10 text-center font-serif text-3xl font-semibold text-slate sm:text-4xl">
              Atención y abordaje institucional
            </h3>
            <WhatWeDoInteractive audience="institutional" />
          </div>
        </section>

        <section className="bg-potter/20 py-10 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
              ¿Querés conocernos mejor?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate/70">
              Estamos aquí para acompañarte. Contactanos para una consulta inicial sin compromiso.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-terracotta px-8 py-4 font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              Contactanos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
