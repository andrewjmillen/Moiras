import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { contactEmail, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Política de Privacidad | Moiras",
  description:
    "Cómo Moiras trata los datos personales que recibe a través de su sitio web y cómo ejercer tus derechos según la Ley 25.326.",
  path: "/privacidad",
});

const sections = [
  {
    title: "Qué datos recolectamos",
    body: [
      "Cuando completás el formulario de contacto, recibimos tu nombre, email, teléfono (opcional), el tipo de consulta y el mensaje que escribas.",
      "Si reservás una entrevista desde nuestro calendario, los datos que ingreses son gestionados por el servicio de calendario utilizado para esa reserva.",
      "El sitio también registra métricas de uso y rendimiento de forma agregada, para mejorar su funcionamiento.",
    ],
  },
  {
    title: "Para qué los usamos",
    body: [
      "Usamos tus datos únicamente para responder tu consulta y coordinar una primera entrevista. No los usamos para publicidad ni los vendemos a terceros.",
    ],
  },
  {
    title: "Confidencialidad",
    body: [
      "Tratamos con reserva todo lo que nos cuentes. Te sugerimos no incluir en el formulario información clínica detallada: podemos conversarla con mayor cuidado durante la entrevista.",
    ],
  },
  {
    title: "Con quién se comparten",
    body: [
      "Los mensajes del formulario se envían a nuestra casilla de correo a través de un proveedor de envío de emails. El sitio se aloja en servicios de infraestructura en la nube. Estos proveedores solo procesan la información para prestarnos el servicio.",
    ],
  },
  {
    title: "Conservación",
    body: [
      "Conservamos tus datos durante el tiempo necesario para atender tu consulta y, si corresponde, para el acompañamiento posterior. Podés pedirnos que los eliminemos en cualquier momento.",
    ],
  },
  {
    title: "Tus derechos",
    body: [
      "Según la Ley 25.326 de Protección de Datos Personales, tenés derecho a acceder a tus datos, rectificarlos, actualizarlos y solicitar su supresión. Podés ejercer estos derechos escribiéndonos a ",
      "La Agencia de Acceso a la Información Pública es el órgano de control de la Ley 25.326 y atiende denuncias y reclamos relacionados con el incumplimiento de las normas de protección de datos personales.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-potter/30 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-semibold text-slate text-balance sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate/70">
              Cuidamos tu información con el mismo respeto con el que acompañamos cada situación.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-2xl font-semibold text-slate">{section.title}</h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-slate/80">
                  {section.title === "Tus derechos" ? (
                    <>
                      <p>
                        {section.body[0]}
                        <a
                          href={`mailto:${contactEmail}`}
                          className="font-medium text-terracotta-dark underline underline-offset-2"
                        >
                          {contactEmail}
                        </a>
                        .
                      </p>
                      <p>{section.body[1]}</p>
                    </>
                  ) : (
                    section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  )}
                </div>
              </div>
            ))}
            <p className="border-t border-slate/10 pt-6 text-sm text-slate/70">
              Última actualización: octubre de 2026.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
