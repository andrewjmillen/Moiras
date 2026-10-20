const faqs = [
  {
    question: "¿Qué son las directivas anticipadas?",
    answer:
      "Son declaraciones de voluntad en las que una persona capaz expresa de antemano qué tratamientos médicos acepta o rechaza, para el caso de que más adelante no pueda comunicar su decisión. Están reconocidas en la Ley 26.529 de Derechos del Paciente (modificada por la Ley 26.742) y en el Código Civil y Comercial de la Nación. Te ayudamos a reflexionar sobre ellas y a redactarlas.",
  },
  {
    question: "¿Cuáles son mis derechos como paciente?",
    answer:
      "La Ley 26.529 reconoce, entre otros, el derecho a recibir asistencia, a un trato digno y respetuoso, a la intimidad y la confidencialidad, a la autonomía de la voluntad y a la información sanitaria. La Ley 26.742 (de muerte digna) establece además el derecho a aceptar o rechazar tratamientos, sin que ello implique dejar de recibir los cuidados destinados a aliviar el sufrimiento.",
  },
  {
    question: "¿Qué son los cuidados paliativos?",
    answer:
      "Es el cuidado activo e integral de personas con enfermedades graves o que amenazan la vida, orientado a aliviar el sufrimiento físico, emocional, social y espiritual y a mejorar la calidad de vida de pacientes y familias. No se limitan al final de la vida: pueden comenzar desde el diagnóstico. En Argentina, la Ley 27.678 garantiza el acceso a estos cuidados.",
  },
  {
    question: "¿Quiénes pueden consultarnos?",
    answer:
      "Personas que quieren anticipar decisiones sobre su salud, familias que atraviesan una situación compleja, y equipos e instituciones de salud que buscan asesoramiento en bioética, protocolos o capacitación.",
  },
  {
    question: "¿Cómo es la primera entrevista?",
    answer:
      "Es un primer encuentro para escuchar tu situación y evaluar juntos el mejor abordaje. Luego el equipo analiza el caso de manera interdisciplinaria, con mirada médica, legal, social y ética, y define un camino posible para acompañarte.",
  },
  {
    question: "¿Cómo puedo comunicarme con Moiras?",
    answer:
      "Podés reservar una entrevista desde nuestro calendario, enviarnos un mensaje con el formulario de contacto, escribirnos a consultoriomoiras@gmail.com o seguirnos en Instagram como @consultoriomoiras.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate/15 bg-cream/70 px-5 py-4 shadow-sm transition-colors open:bg-cream sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg font-semibold text-slate marker:hidden sm:text-xl">
                <span>{faq.question}</span>
                <span
                  className="shrink-0 text-2xl font-normal text-terracotta-dark transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate/10 pt-4 text-base leading-relaxed text-slate/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm italic leading-relaxed text-slate/70">
          Esta información es orientativa y no reemplaza el asesoramiento sobre un caso concreto.
        </p>
      </div>
    </section>
  );
}
