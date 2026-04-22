import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const teamMembers = [
  {
    name: "Ignacio Maglio",
    role: "Abogado",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maglio-8fKbVxZ1LMDsXUjhwGIa5jdzeoDHFC.png",
    bio: "Abogado. Procurador (UBA). Diplomado en Salud Pública. Docente Universitario. Vicepresidente RedBioética UNESCO. Asesor Dirección Médica Htal. Fco. Javier Muñiz. Coordinador Comités de Bioética Sanatorios Finochietto y Otamendi. Miembro Comisiones Directivas de la Asociación Argentina de Salud Pública (AASAP), Sociedad Argentina de Vacunología y Epidemiologia (SAVE). Asesor Jurídico de la Sociedad Argentina de Infectología (SADI), de la Sociedad Argentina de Reumatología (SAR), de la Sociedad Argentina de Diabetología.",
  },
  {
    name: "Débora Lema",
    role: "Lic. Trabajo Social",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lema-25sGaMc97e2DDsRD94yeRZrw5rAJni.jpg",
    bio: "Lic. Trabajo Social, Magíster en Cuidados Paliativos, Especialista en políticas del cuidado con perspectiva de género, Diplomada en Bioética. Jefa de Sección Servicio Social, integrante del equipo de Cuidados Paliativos y Coordinadora del Comité de Gestión de Calidad del Hospital C. B. Udaondo. Integrante de la Comisión Asesora de Pallium Latinoamérica, desempeñando funciones de asistencia, docencia e investigación. Miembro de la Comisión Directiva de la AAMYCP (Asociación Argentina de Medicina y Cuidados Paliativos) y secretaria del Comité de Bioética de SATI (Sociedad Argentina de Terapia Intensiva). Co-Directora del Centro de estudios y Observatorio de Bioética de la Universidad ISALUD.",
  },
  {
    name: "Analía Occhiuzzi",
    role: "Médica",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Occhiuzzi-9UqwT62u15C3CWOPFNnadglJ3nMiEZ.jpeg",
    bio: "Doctoranda en Ciencias Humanas por la UNSAM, Magíster en Bioética por FLACSO y egresada de la Facultad de Medicina de la UBA. Diplomada en Medicina Crítica. Integrante del Comité de Bioética de la SATI (Sociedad Argentina de Terapia Intensiva) y del Hospital Nacional Alejandro Posadas. Titular de guardia e integrante del equipo de Cuidados Paliativos del Hospital DF Santojanni. Co-Directora del Centro de estudios y Observatorio de Bioética de la Universidad ISALUD. Docente universitaria y de posgrado. Autora de capítulos de libros y artículos en revistas nacionales e internacionales.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-potter/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
                Quiénes Somos
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-slate text-balance">
                Un equipo interdisciplinario comprometido con el cuidado
              </h1>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed max-w-2xl mx-auto">
                Somos profesionales de la salud, el derecho y las ciencias
                sociales que trabajamos de manera coordinada para brindar
                contención, claridad y cuidado respetuoso.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-16 items-center`}
                >
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                      <div className="absolute inset-0 bg-potter rounded-full border-4 border-terracotta/30" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full p-1"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate mb-2">
                      {member.name}
                    </h2>
                    <p className="text-terracotta font-medium text-lg mb-6">
                      {member.role}
                    </p>
                    <p className="text-slate/70 leading-relaxed text-lg">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate mb-8 text-balance">
                Nuestra Misión
              </h2>
              <p className="text-lg text-slate/70 leading-relaxed mb-6">
                Moiras nace de la necesidad de ofrecer un acompañamiento
                integral y humano en uno de los momentos más significativos de
                la vida. Nuestro nombre hace referencia a las Moiras de la
                mitología griega, las tres hermanas que tejían el hilo del
                destino.
              </p>
              <p className="text-lg text-slate/70 leading-relaxed">
                Nuestro enfoque no se limita al alivio de síntomas desde el
                punto de vista farmacológico, sino que abarca también el estrés
                emocional y vincular que todo el proceso conlleva.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-terracotta/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate mb-6 text-balance">
              ¿Querés conocernos mejor?
            </h2>
            <p className="text-lg text-slate/70 mb-8 max-w-2xl mx-auto">
              Estamos aquí para acompañarte. Contactanos para una consulta
              inicial sin compromiso.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream font-medium rounded-lg hover:bg-terracotta/90 transition-colors"
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
