const helpItems = [
  {
    title: "Anticipar decisiones y expresar tu voluntad",
    description:
      "Redacción de directivas anticipadas, preferencias sobre tratamientos y planificación de decisiones sanitarias.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path strokeLinecap="round" d="M9 3.5V2h6v1.5M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Afrontar situaciones de salud complejas",
    description:
      "Orientación ante enfermedades graves, decisiones sobre tratamientos y situaciones de final de vida.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5S4 16 4 9.5A4.5 4.5 0 018.5 5c1.4 0 2.7.65 3.5 1.7A4.5 4.5 0 0115.5 5 4.5 4.5 0 0120 9.5c0 6.5-8 11-8 11z" />
        <path strokeLinecap="round" d="M8 11h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
  {
    title: "Organizar los cuidados y abordar cuestiones jurídicas",
    description:
      "Asesoramiento sobre necesidades de cuidado, derechos en salud y cuestiones legales vinculadas a cada situación.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path strokeLinecap="round" d="M3.5 18c.5-3 2-4.5 4.5-4.5S12 15 12.5 18M11.5 18c.5-3 2-4.5 4.5-4.5s4 1.5 4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Asesorar a instituciones y equipos de salud",
    description:
      "Consultoría en bioética, elaboración de protocolos y capacitación profesional.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V6l6-2v16M10 20V8l6-2v14M16 20V4l4 2v14M2 20h20" />
      </svg>
    ),
  },
];

export function HelpSection() {
  return (
    <section id="ayuda" className="bg-potter/20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl">
          ¿En qué podemos ayudarte?
        </h2>
        <div className="mt-8 divide-y divide-slate/10 border-y border-slate/10">
          {helpItems.map((item) => (
            <article key={item.title} className="flex gap-5 py-7 sm:gap-7 sm:py-8">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center text-slate">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-slate sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate/80 sm:text-lg">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
