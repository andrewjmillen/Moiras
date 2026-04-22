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
              Acompañamiento Integral
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate leading-tight text-balance">
              Cuidado humano en los procesos de final de vida
            </h1>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              Brindamos acompañamiento integral en los procesos de final de vida
              y cronicidad avanzada, desde una perspectiva interdisciplinaria
              que contempla lo médico, lo social, lo legal y lo humano.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream font-medium rounded-lg hover:bg-terracotta/90 transition-colors"
              >
                Contactanos
              </Link>
              <Link
                href="#quienes-somos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate/20 text-slate font-medium rounded-lg hover:border-terracotta hover:text-terracotta transition-colors"
              >
                Conocé más
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] relative overflow-hidden rounded-full border-4 border-terracotta/30 bg-[#f5f2ed]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20grande-N9Fv1IqkFQuLK0Pr8GFCbbpV2WnqlT.png"
                alt="Moiras - Las tres Moiras sosteniendo el hilo de la vida"
                fill
                className="object-contain scale-150"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
