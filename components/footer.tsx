import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate border-t border-velvet/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moiras%20logo-bTugCLEfTgpwXh5mFlteGO0yLJRnTm.jpg"
                alt="Moiras Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-xl font-serif font-semibold text-cream">
                Moiras
              </span>
            </Link>
            <p className="text-cream/60 text-sm max-w-sm leading-relaxed">
              Acompañamiento integral en procesos de final de vida y cronicidad
              avanzada, desde una perspectiva humana e interdisciplinaria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Quiénes Somos", href: "#quienes-somos" },
                { label: "Servicios", href: "#servicios" },
                { label: "Cómo Trabajamos", href: "#como-trabajamos" },
                { label: "Recursos", href: "#recursos" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/60 hover:text-terracotta transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>
                <a
                  href="mailto:contacto@moiras.com.ar"
                  className="hover:text-terracotta transition-colors"
                >
                  contacto@moiras.com.ar
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-velvet/20">
          <p className="text-center text-sm text-cream/40">
            {new Date().getFullYear()} Moiras. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
