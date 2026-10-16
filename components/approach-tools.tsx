const approachGroups = [
  {
    title: "Autonomía, decisiones sanitarias y planificación anticipada",
    items: [
      "Redacción personalizada de directivas anticipadas de salud, actualización y revocación.",
      "Planificación anticipada de la atención, de los cuidados, registro de deseos y preferencias.",
      "Designación de interlocutores o personas de confianza para la toma de decisiones.",
      "Organización y resguardo de documentación sanitaria relevante.",
      "Asesoramiento sobre el derecho a aceptar o rechazar tratamientos.",
      "Asesoramiento sobre consentimiento informado y revocación del mismo.",
    ],
  },
  {
    title: "Dignidad, gestión y cuidados de fin de vida",
    items: [
      "Acompañamiento en decisiones de no iniciar tratamientos desproporcionados.",
      "Asesoramiento ante la solicitud de retiro o no instauración de medidas de soporte vital, en los supuestos clínicos y jurídicos correspondientes.",
      "Acompañamiento en decisiones sobre tratamientos que prolongan el proceso de morir.",
      "Acompañamiento en decisiones de final de vida en domicilio, internación general o terapia intensiva.",
      "Elaboración de un plan individualizado de cuidados y acompañamiento.",
      "Evaluación de necesidades de cuidado de personas con enfermedades crónicas complejas.",
      "Coordinación entre profesionales, familiares e instituciones.",
      "Planificación de altas hospitalarias complejas y de cuidados para personas con dependencia funcional.",
    ],
  },
  {
    title: "Enfermedad crítica crónica, dependencia y tecnología médica",
    items: [
      "Orientación a familias de personas con ventilación mecánica prolongada.",
      "Acompañamiento en decisiones sobre traqueostomía y soporte ventilatorio.",
      "Orientación durante la internación en centros de destete de ventilación mecánica.",
      "Análisis de objetivos de cuidado en pacientes con dependencia tecnológica.",
      "Preparación de reuniones clínicas para revisar objetivos terapéuticos.",
      "Análisis del cuidado: sobrecarga y necesidades de los cuidadores, distribución de responsabilidades y orientación familiar.",
    ],
  },
  {
    title: "Aspectos legales, asesoramiento jurídico y sucesorio",
    items: [
      "Orientación inicial ante el fallecimiento de un familiar (disposiciones relativas a exequias y voluntad personal, dentro del marco legal aplicable).",
      "Asesoramiento sobre declaratoria de herederos, gestión jurídica de trámites sucesorios.",
      "Orientación sobre inventario y valuación de bienes y acuerdos entre coherederos.",
      "Acompañamiento jurídico ante conflictos sucesorios.",
      "Información sobre testamentos y sus formas legales.",
      "Organización documental para facilitar trámites futuros.",
    ],
  },
  {
    title: "Acompañamiento del duelo y después del fallecimiento",
    items: [
      "Orientación inicial a familiares después de una muerte sobre pasos administrativos pendientes.",
      "Acompañamiento para comprender decisiones clínicas tomadas durante la internación.",
      "Espacios de conversación sobre la experiencia de enfermedad crítica y final de vida.",
      "Orientación sobre trámites y documentación posteriores al fallecimiento.",
      "Articulación con profesionales de salud mental especializados en duelo.",
    ],
  },
  {
    title: "Consultoría institucional y bioética clínica",
    items: [
      "Análisis de casos clínicos complejos y capacitación sobre deliberación bioética.",
      "Asesoramiento para crear o fortalecer comités.",
      "Desarrollo de procedimientos de consulta ética.",
      "Elaboración de recomendaciones institucionales.",
      "Análisis de conflictos éticos recurrentes.",
    ],
  },
  {
    title: "Capacitación y resolución de conflictos",
    items: [
      "Desarrollo de herramientas de documentación y seguimiento: elaboración de protocolos de AET y final de vida, protocolos de directivas anticipadas y de consentimientos informados, procedimientos para decisiones de no reanimación y de reuniones con familias, revisión de políticas de atención centrada en la persona y guías institucionales de comunicación de malas noticias, en colaboración con profesionales competentes.",
      "Cursos, talleres y ateneos sobre bioética clínica aplicada: deliberación y análisis de casos, comunicación con pacientes y familias, conflictos éticos en terapia intensiva, cuidados paliativos y planificación anticipada, enfermedad crítica crónica y dependencia tecnológica, derechos del paciente y marco normativo argentino, autonomía y toma de decisiones por representación.",
      "Materiales educativos: manuales breves para familias, guías de preguntas para pacientes, cuadernillos de planificación anticipada, materiales de formación para profesionales, casos clínicos para discusión, presentaciones y materiales docentes, guías de bolsillo para equipos asistenciales y materiales de sensibilización para instituciones.",
    ],
  },
];

export function ApproachTools() {
  return (
    <section className="bg-slate/5 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
          Formas de abordaje, trámites y ejemplos
        </h2>
        <div className="space-y-4">
          {approachGroups.map((group) => (
            <details
              key={group.title}
              className="group rounded-2xl border border-slate/15 bg-cream/70 px-5 py-4 shadow-sm transition-colors open:bg-cream sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg font-semibold text-slate marker:hidden sm:text-xl">
                <span>{group.title}</span>
                <span className="shrink-0 text-2xl font-normal text-terracotta transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <ul className="mt-5 space-y-3 border-t border-slate/10 pt-5 text-base leading-relaxed text-slate/75">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-sm italic leading-relaxed text-slate/70">
          Importante: MOIRAS puede asesorar, facilitar el diálogo y ayudar a documentar decisiones. No sustituye la indicación médica ni la responsabilidad del equipo tratante. El rechazo de un tratamiento tampoco implica abandonar los cuidados destinados a aliviar el sufrimiento, según Ley 26742.
        </p>
      </div>
    </section>
  );
}
