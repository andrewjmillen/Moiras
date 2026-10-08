"use client";

import { useState } from "react";

const services = [
  {
    title: "Pensar y planificar los cuidados a futuro",
    detail:
      "Personas que desean ordenar sus deseos y preferencias. Redacción de directivas anticipadas, rechazos de tratamiento, entre otros.",
  },
  {
    title: "Acompañar procesos de enfermedad grave o crónica",
    detail:
      "Personas y/o familiares, que requieren un abordaje integral para afrontar las decisiones, cambios y necesidades que aparecen durante el proceso de enfermedad.",
  },
  {
    title: "Asesoramiento clínico- ético- legal y organización de cuidados en el fin de vida",
    detail:
      "Personas que se encuentran transitando el fin de vida, con foco en el alivio del sufrimiento, la toma de decisiones, la adecuación de los cuidados, asesoramiento sucesorio (herencias, etc.) duelo y comunicación familiar de la persona y de su entorno.",
  },
];

export function WhatWeDoInteractive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-20">
      <div
        className={`relative flex min-h-[44rem] w-full items-center transition-all duration-700 ease-out sm:min-h-[48rem] ${
          activeIndex === null ? "justify-center" : "justify-end"
        }`}
      >
        <div className="relative flex w-full max-w-[30rem] flex-col items-center -space-y-20 sm:-space-y-24">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={service.title}
                type="button"
                aria-expanded={isActive}
                aria-label={`${service.title}. ${isActive ? "Ocultar detalle" : "Mostrar detalle"}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`relative flex aspect-square w-72 flex-col items-center justify-center rounded-full border-2 px-12 text-center transition-all duration-700 ease-out focus-visible:z-30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/30 sm:w-80 lg:w-[21rem] ${
                  isActive
                    ? "z-20 scale-110 border-terracotta bg-potter shadow-xl"
                    : "z-10 border-potter bg-cream/95 hover:z-20 hover:scale-105 hover:border-terracotta/70"
                }`}
              >
                <span className="font-serif text-2xl leading-tight text-slate sm:text-[1.7rem]">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-48" aria-live="polite">
        {activeIndex !== null && (
          <div className="border-l-2 border-terracotta/40 pl-6 opacity-100 transition-opacity duration-500">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-terracotta">
              Más información
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
