import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cómo Trabajamos | Moiras",
  description:
    "Conocé cómo acompañamos decisiones de salud desde una mirada integral, humanizada e interdisciplinaria.",
};

const privateSteps = [
  {
    title: "Primer momento",
    text: "En una primera consulta, escuchamos la situación en la búsqueda de comprender el contexto clínico y familiar. Dependiendo de lo observado, realizamos una entrevista en profundidad para conocer los aspectos necesarios y poder asesorar correctamente.",
  },
  {
    title: "Análisis interdisciplinario",
    text: "Integramos las dimensiones médicas, éticas, sociales y legales para identificar prioridades, necesidades y objetivos concretos.",
  },
  {
    title: "Definición de un camino posible",
    text: "No ofrecemos respuestas cerradas, sino orientación situada y adaptada a la realidad de cada persona y/o familia.",
  },
  {
    title: "Acompañamiento",
    text: "Realizamos un seguimiento acorde a las necesidades y características de cada caso.",
  },
];

const institutionalSteps = [
  {
    title: "Primer encuentro",
    text: "Nos reunimos con integrantes del Servicio, Departamento y/o Comité de Bioética para identificar posibles conflictos y situaciones a resolver, y acordar conjuntamente el modo de abordaje.",
  },
  {
    title: "Análisis interdisciplinario",
    text: "Integramos las dimensiones clínicas, éticas, sociales y legales involucradas, considerando las particularidades del caso y el contexto institucional.",
  },
  {
    title: "Estrategia de abordaje",
    text: "Elaboramos, junto con el equipo, alternativas posibles y criterios para orientar la toma de decisiones y la posibilidad de implementar protocolos, documentos institucionales, modificaciones en historias clínicas y consideraciones relativas a la gestión y seguridad del paciente.",
  },
  {
    title: "Acompañamiento",
    text: "Ofrecemos seguimiento y acompañamiento al equipo durante el proceso, de acuerdo con las necesidades de la institución y la complejidad de cada situación.",
  },
];

function WorkProcess({
  steps,
}: {
  steps: typeof privateSteps;
}) {
  return (
    <ol className="grid gap-4 lg:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-5 rounded-2xl border border-potter/80 bg-cream/70 p-6 sm:p-8"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-terracotta/50 font-serif text-lg text-terracotta">
            {index + 1}
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-slate">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate/70">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ComoTrabajamosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-potter/30 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 font-serif text-xl text-slate/80 sm:text-2xl">
              Asesoramiento en decisiones de salud
            </p>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-terracotta">
              CÓMO TRABAJAMOS
            </p>
            <h1 className="font-serif text-4xl font-semibold text-slate text-balance sm:text-5xl">
              Integramos saberes para construir caminos posibles.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate/70">
              Buscamos ser un espacio de referencia en el abordaje integral de la salud, que promueva un cuidado humanizado desde decisiones conscientes y respetuosas de la dignidad de cada persona.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl">
                Propuesta particular
              </h2>
            </div>
            <WorkProcess steps={privateSteps} />
          </div>
        </section>

        <section className="bg-terracotta/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl">
                Propuesta institucional
              </h2>
            </div>
            <WorkProcess steps={institutionalSteps} />
          </div>
        </section>

        <section className="bg-potter/20 py-10">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
              ¿Querés conocernos mejor?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate/70">
              Estamos aquí para acompañarte. Contactanos para una consulta inicial sin compromiso.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-terracotta px-8 py-4 font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              Contactanos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
