export function Resources() {
  const resources = [
    {
      title: "Qué son los cuidados paliativos",
      description:
        "Una guía introductoria sobre los cuidados paliativos, sus objetivos y cómo pueden mejorar la calidad de vida.",
      category: "Guía",
    },
    {
      title: "Derechos del paciente en Argentina",
      description:
        "Información sobre los derechos de los pacientes según la legislación argentina vigente.",
      category: "Legal",
    },
    {
      title: "Cómo hablar con la familia",
      description:
        "Orientación para facilitar conversaciones difíciles con seres queridos durante el proceso.",
      category: "Comunicación",
    },
    {
      title: "Voluntades anticipadas",
      description:
        "Todo lo que necesitás saber sobre las directivas anticipadas y cómo redactarlas.",
      category: "Legal",
    },
  ];

  return (
    <section id="recursos" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
            Recursos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate text-balance">
            Información y herramientas útiles
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Material educativo para pacientes, familias y profesionales de la
            salud.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="group bg-potter/30 rounded-xl p-6 hover:bg-potter/50 transition-colors cursor-pointer"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-terracotta/10 text-terracotta rounded-full mb-4">
                {resource.category}
              </span>
              <h3 className="text-lg font-semibold text-slate mb-2 group-hover:text-terracotta transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-slate/70 leading-relaxed">
                {resource.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate/60 text-sm">
            Próximamente más recursos y artículos
          </p>
        </div>
      </div>
    </section>
  );
}
