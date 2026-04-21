import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { HowWeWork } from "@/components/how-we-work";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
