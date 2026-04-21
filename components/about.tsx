export function About() {
  return (
    <section id="quienes-somos" className="py-24 bg-potter/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
            Quiénes Somos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate text-balance">
            Un equipo interdisciplinario comprometido con el cuidado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate/80 leading-relaxed mb-6">
              Moiras nace de la necesidad de ofrecer un acompañamiento integral
              y humano en uno de los momentos más significativos de la vida.
              Nuestro nombre hace referencia a las Moiras de la mitología
              griega, las tres hermanas que tejían el hilo del destino.
            </p>
            <p className="text-lg text-slate/80 leading-relaxed mb-6">
              Somos un equipo de profesionales de la salud, el derecho y las
              ciencias sociales que trabajamos de manera coordinada para
              brindar contención, claridad y cuidado respetuoso a las personas
              y sus familias.
            </p>
            <p className="text-lg text-slate/80 leading-relaxed">
              Nuestro enfoque no se limita al alivio de síntomas desde el punto
              de vista farmacológico, sino que abarca también el estrés
              emocional y vincular que todo el proceso conlleva.
            </p>
          </div>

          <div className="bg-cream p-8 rounded-2xl">
            <h3 className="text-xl font-serif font-semibold text-slate mb-6">
              Nuestros valores
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Humanidad",
                  description:
                    "Cada persona es única y merece un trato digno y personalizado.",
                },
                {
                  title: "Integralidad",
                  description:
                    "Abordamos todas las dimensiones del cuidado: médica, social, legal y emocional.",
                },
                {
                  title: "Respeto",
                  description:
                    "Honramos las decisiones y deseos de cada paciente y su familia.",
                },
                {
                  title: "Calidez",
                  description:
                    "Brindamos contención y cercanía en cada etapa del proceso.",
                },
              ].map((value) => (
                <li key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-terracotta" />
                  <div>
                    <h4 className="font-semibold text-slate">{value.title}</h4>
                    <p className="text-slate/70">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
