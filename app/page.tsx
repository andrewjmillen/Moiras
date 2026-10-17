import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { HowWeWork } from "@/components/how-we-work";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Moiras | Acompañamiento en Procesos de Final de Vida y Cuidados Paliativos en Argentina",
  description:
    "Equipo interdisciplinario especializado en cuidados paliativos, bioética y asesoramiento en decisiones de fin de vida. Brindamos contención médica, legal, social y emocional.",
};


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
