"use client";

import { useState } from "react";

const services = [
  {
    title: "Pensar y planificar los cuidados a futuro",
    detail:
      "Conversamos sobre valores, preferencias y escenarios posibles para que las decisiones futuras reflejen lo que cada persona considera importante.",
  },
  {
    title: "Acompañar procesos de enfermedad grave o crónica",
    detail:
      "Ofrecemos orientación interdisciplinaria para comprender el proceso, ordenar alternativas y acompañar a la persona y a su entorno cercano.",
  },
  {
    title: "Asesoramiento y organización de cuidados en el fin de vida",
    detail:
      "Ayudamos a coordinar apoyos, aliviar incertidumbres y construir una red de cuidado respetuosa para esta etapa.",
  },
];

export function WhatWeDoInteractive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
      <div className="relative flex min-h-[44rem] w-full max-w-[30rem] items-center justify-center sm:min-h-[48rem]">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-potter/30" aria-hidden="true" />
        <div className="relative flex w-full flex-col items-center -space-y-20 sm:-space-y-24">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={service.title}
                type="button"
                aria-expanded={isActive}
                aria-label={`${service.title}. ${isActive ? "Ocultar detalle" : "Mostrar detalle"}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`relative z-10 flex aspect-square w-72 flex-col items-center justify-center rounded-full border-2 px-12 text-center transition-all duration-500 ease-out focus-visible:z-30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/30 sm:w-80 lg:w-[21rem] ${
                  isActive
                    ? "z-20 scale-110 border-terracotta bg-potter shadow-xl"
                    : "border-potter bg-cream/95 hover:z-20 hover:scale-105 hover:border-terracotta/70"
                }`}
              >
                <span className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl leading-tight text-slate sm:text-[1.7rem]">
                  {service.title}
                </span>
                <span
                  className={`grid w-full transition-[grid-template-rows,opacity,margin] duration-500 ${
                    isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden text-sm leading-relaxed text-slate/70">
                    {service.detail}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden max-w-sm lg:block" aria-live="polite">
        {activeIndex === null ? (
          <p className="text-lg leading-relaxed text-slate/60">
            Seleccioná un círculo para ampliar la propuesta y conocer más sobre cómo podemos acompañarte.
          </p>
        ) : (
          <div className="border-l-2 border-terracotta/40 pl-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-terracotta">
              {String(activeIndex + 1).padStart(2, "0")} · Más información
            </p>
            <p className="font-serif text-2xl leading-tight text-slate">
              {services[activeIndex].title}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate/70">
              {services[activeIndex].detail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
