import Image from "next/image";

export function MoirasStory() {
  return (
    <section className="bg-potter/25 py-16 lg:py-24" aria-labelledby="porque-moiras">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
            Nuestra mirada
          </p>
          <h2 id="porque-moiras" className="text-3xl font-serif font-semibold text-slate sm:text-4xl">
            ¿Por qué Moiras?
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate/75">
            <p className="font-medium text-slate">Relato breve de un concepto</p>
            <p>
              En griego antiguo, μοῖρα (moîra) significa, en su sentido más básico, parte, porción: aquello que corresponde a alguien. De allí deriva su sentido de destino, entendido no necesariamente como algo predeterminado e inmodificable, sino como la parte de existencia que toca vivir: una circunstancia, una condición, un límite.
            </p>
            <p>
              La moîra introduce así una idea de distribución y medida: a cada quien le corresponde una parte. No elegimos necesariamente las circunstancias en las que transcurre nuestra existencia, pero podemos decidir cómo habitarlas y qué hacer dentro de las posibilidades que nos ofrecen.
            </p>
            <p>
              Las Moiras, en la mitología griega, son las personificaciones del destino. Tradicionalmente son tres: Cloto, la que hila el hilo de la vida; Láquesis, la que mide y asigna la porción que corresponde; y Átropos, la que finalmente corta el hilo.
            </p>
            <p>
              En MOIRAS, esta imagen nos invita a pensar la existencia desde su singularidad, sus posibilidades y sus límites. Porque, aun cuando no todo está en nuestras manos, comprender lo que nos toca vivir puede abrir un espacio para decidir, cuidar y encontrar modos propios de transitar cada parte de nuestra historia.
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-4 rounded-full bg-cream/70" aria-hidden="true" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sin%20fondo-8jnRJIu7kK7C2r2NRYjlMkjikXFoD6.png"
            alt="Tres figuras sosteniendo círculos, ilustración que representa a las Moiras"
            width={550}
            height={432}
            className="relative h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
