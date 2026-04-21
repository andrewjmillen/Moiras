export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
            Qué Hacemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate text-balance">
            Servicios adaptados a cada necesidad
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Ofrecemos acompañamiento tanto a particulares como a instituciones,
            adaptando nuestro enfoque a cada situación específica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Particular */}
          <div className="bg-potter/40 rounded-2xl p-8 lg:p-10">
            <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-terracotta"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-slate mb-4">
              Atención Particular
            </h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              Acompañamiento personalizado para pacientes y familias que
              transitan procesos de enfermedad grave, crónica o de fin de vida.
            </p>
            <ul className="space-y-3">
              {[
                "Evaluación inicial y plan de cuidados personalizado",
                "Acompañamiento médico paliativo",
                "Soporte emocional para paciente y familia",
                "Asesoramiento legal y voluntades anticipadas",
                "Coordinación con equipos tratantes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-slate/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div className="bg-velvet/30 rounded-2xl p-8 lg:p-10">
            <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-terracotta"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-slate mb-4">
              Atención Institucional
            </h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              Servicios para instituciones de salud, seguros, obras sociales y
              empresas de medicina prepaga.
            </p>
            <ul className="space-y-3">
              {[
                "Consultoría en cuidados paliativos",
                "Capacitación a equipos de salud",
                "Protocolos de atención humanizada",
                "Interconsultas especializadas",
                "Programas de acompañamiento institucional",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-slate/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
