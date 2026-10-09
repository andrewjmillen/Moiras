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
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-terracotta">
              QUÉ HACEMOS
            </p>
              <h1 className="font-serif text-4xl font-semibold text-slate text-balance sm:text-5xl">
                Acompañamos decisiones complejas cuando más importa: cuando decidir no es fácil, cuando las respuestas no son evidentes.
              </h1>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl">
                Servicios adaptados a cada necesidad
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate/70">
                Ofrecemos acompañamiento tanto a particulares como a instituciones,
                adaptando nuestro enfoque a cada situación específica.
              </p>
            </div>
            <h3 className="mb-10 text-center font-serif text-3xl font-semibold text-slate sm:text-4xl">
              Atención a particulares
            </h3>
            <WhatWeDoInteractive />
          </div>
        </section>

        <section className="bg-terracotta/10 px-4 py-10 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl">
            Estamos para acompañarte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate/70">
            Podemos ayudarte a ordenar preguntas, anticipar decisiones y construir un plan de cuidado posible.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
