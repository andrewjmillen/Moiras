import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate border-t border-velvet/20">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="sm:max-w-sm">
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

          <div className="flex items-center justify-end">
            <h4 className="sr-only">Contacto</h4>
            <ul className="flex items-center justify-end gap-5 text-cream/60">
              <li>
                <a
                  href="mailto:consultoriomoiras@gmail.com"
                  aria-label="Enviar email a Consultorio Moiras"
                  className="inline-flex transition-colors hover:text-terracotta"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/consultoriomoiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Consultorio Moiras"
                  className="inline-flex transition-colors hover:text-terracotta"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 border-t border-velvet/20 pt-4">
          <p className="text-center text-xs text-cream/40">
            {new Date().getFullYear()} Moiras. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
