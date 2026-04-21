export function HowWeWork() {
  const approaches = [
    {
      title: "Médica",
      description:
        "Control de síntomas, manejo del dolor y coordinación con equipos tratantes. Nuestro enfoque médico prioriza la calidad de vida y el confort del paciente.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
      features: [
        "Evaluación integral de síntomas",
        "Plan de cuidados personalizado",
        "Visitas domiciliarias",
        "Comunicación con especialistas",
      ],
    },
    {
      title: "Psico-social",
      description:
        "Acompañamiento emocional para el paciente y su entorno. Trabajamos los aspectos vinculares, el duelo anticipado y la comunicación familiar.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      features: [
        "Contención emocional",
        "Facilitación de comunicación familiar",
        "Acompañamiento en duelo",
        "Grupos de apoyo",
      ],
    },
    {
      title: "Legal",
      description:
        "Asesoramiento en directivas anticipadas, derechos del paciente y aspectos legales del final de vida. Brindamos claridad en momentos de incertidumbre.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      features: [
        "Voluntades anticipadas",
        "Derechos del paciente",
        "Asesoramiento sucesorio",
        "Documentación legal",
      ],
    },
  ];

  return (
    <section id="como-trabajamos" className="py-24 bg-potter/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
            Cómo Trabajamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate text-balance">
            Un abordaje integral desde tres dimensiones
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Nuestro equipo interdisciplinario trabaja de manera coordinada para
            brindar un cuidado completo y coherente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <div key={approach.title} className="bg-cream rounded-2xl p-8">
              <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-6">
                {approach.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate mb-3">
                Dimensión {approach.title}
              </h3>
              <p className="text-slate/70 mb-6 leading-relaxed">
                {approach.description}
              </p>
              <ul className="space-y-2">
                {approach.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
