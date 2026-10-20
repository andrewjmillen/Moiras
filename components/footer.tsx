import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate border-t border-velvet/20">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="flex justify-center sm:justify-start">
            <Link href="#inicio" className="flex items-center gap-3">
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
          </div>

          <div className="flex flex-col items-center gap-2 text-center text-cream/70">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-argentina-national-football-team-flag-of-argentina-flag-miscellaneous-flag-logo-thumbnail-TNkvFMBNwkS53DAsPDRukGVxds196J.png"
              alt="Bandera de Argentina"
              width={72}
              height={72}
              className="h-14 w-14 rounded-full object-contain"
            />
            <span className="text-sm">Buenos Aires, Argentina</span>
          </div>

          <div className="flex justify-center sm:justify-end">
            <h4 className="sr-only">Contacto</h4>
            <ul className="flex items-center justify-end gap-5 text-cream/60">
              <li>
                <a
                  href="mailto:consultoriomoiras@gmail.com"
                  aria-label="Enviar email a Consultorio Moiras"
                  className="inline-flex transition-colors hover:text-terracotta"
                >
                  <svg
                    className="h-10 w-10"
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
                    className="h-10 w-10"
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

        <div className="mt-5 flex flex-col items-center justify-center gap-2 border-t border-velvet/20 pt-4 sm:flex-row sm:gap-6">
          <p className="text-center text-xs text-cream/70">
            {new Date().getFullYear()} Moiras. Todos los derechos reservados.
          </p>
          <Link
            href="/privacidad"
            className="text-xs text-cream/70 underline underline-offset-2 transition-colors hover:text-cream"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
