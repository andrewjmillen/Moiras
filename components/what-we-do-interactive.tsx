"use client";

import Image from "next/image";
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
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-potter bg-cream shadow-sm">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Que%20Hacemos%20Historia-ZSqLN6miC8TRHs1bgW5Tnhp0vNPt9E.png"
            alt="Tres círculos que representan las áreas de acompañamiento de Moiras"
            fill
            className="object-contain p-5 transition-transform duration-700"
          />
        </div>
        <p className="mt-4 text-center text-sm text-slate/60">
          Seleccioná un círculo para conocer más
        </p>
      </div>

      <div className="flex flex-col gap-5" role="list">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={service.title}
              type="button"
              role="listitem"
              aria-expanded={isActive}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`group flex w-full items-start gap-5 rounded-2xl border p-5 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                isActive
                  ? "translate-x-0 border-terracotta bg-potter/40 shadow-sm lg:translate-x-3"
                  : "border-potter/70 bg-cream hover:border-terracotta/60 hover:bg-potter/20"
              }`}
            >
              <span
                className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  isActive
                    ? "border-terracotta bg-terracotta text-cream"
                    : "border-terracotta/40 text-terracotta"
                }`}
              >
                {index + 1}
              </span>
              <span>
                <span className="block font-serif text-2xl leading-tight text-slate">
                  {service.title}
                </span>
                <span
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ${
                    isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden text-base leading-relaxed text-slate/70">
                    {service.detail}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
