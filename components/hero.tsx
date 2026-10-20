import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moiras%20colors1-XLtnaTD82stkpcMlAPxrTOCNdDb6hU.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
              Cuidado Integral
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate leading-tight text-balance">
              Acompañamiento clínico, ético y legal para decidir sobre salud y cuidados a lo largo de la vida.
            </h1>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              <strong className="font-semibold text-slate">
                Cada vida, sus circunstancias. Cada decisión, su importancia.
              </strong>
              <span className="my-6 block">
                Ofrecemos asesoramiento interdisciplinario para anticipar decisiones, ejercer derechos y abordar situaciones complejas relacionadas con la salud y los cuidados.
              </span>
              Para personas, familias y equipos de salud.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream font-medium rounded-lg hover:bg-terracotta/90 transition-colors"
              >
                Contactanos
              </Link>
              <a
                href="https://calendar.app.google/vhVL6J277Zmc8qSQ9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-terracotta text-terracotta font-medium rounded-lg hover:bg-terracotta hover:text-cream transition-colors"
              >
                Solicitar Entrevista
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] relative overflow-hidden rounded-full border-4 border-terracotta/30 bg-[#f5f2ed]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20grande-N9Fv1IqkFQuLK0Pr8GFCbbpV2WnqlT.png"
                alt="Moiras - Las tres Moiras sosteniendo el hilo de la vida"
                fill
                className="object-cover scale-[1.16] -translate-x-[3%] -translate-y-[3%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
