"use client";

import { useState } from "react";

const privateServices = [
  {
    title: "Planificación de los cuidados a futuro",
    detail:
      "Personas que desean ordenar sus deseos y preferencias. Redacción de directivas anticipadas, rechazos de tratamiento, entre otros.",
  },
  {
    title: "Acompañar procesos de enfermedad grave o crónica",
    detail:
      "Personas y/o familiares, que requieren un abordaje integral para afrontar las decisiones, cambios y necesidades que aparecen durante el proceso de enfermedad.",
  },
  {
    title: "Asesoramiento y organización de cuidados en el fin de vida",
    detail:
      "Personas que se encuentran transitando el fin de vida, con foco en el alivio del sufrimiento, la toma de decisiones, la adecuación de los cuidados, asesoramiento sucesorio (herencias, etc.) duelo y comunicación familiar de la persona y de su entorno.",
  },
];

const institutionalServices = [
  {
    title: "Interconsultas bioéticas",
    detail:
      "Interconsultas bioéticas para servicios y equipos de salud. Análisis de casos complejos, toma de decisiones compartidas y abordaje de conflictos, implementación de medidas de retiro, control de síntomas, sedación y weaning terminal, etc.",
  },
  {
    title: "Asesoramiento legal e implementación de protocolos específicos",
    detail:
      "Asesoramiento ético y legal. Derechos del paciente, adecuación del esfuerzo terapéutico, consentimiento informado y planificación anticipada de cuidados, directivas anticipadas, rechazos de tratamiento.",
  },
  {
    title: "Docencia y capacitación de equipos",
    detail:
      "Docencia y capacitación de equipos. Humanización de los cuidados, generación de redes entre servicios, resolución de cuestiones administrativas, UCIs abiertas, asesoramiento en gestión de internación domiciliaria.",
  },
];

export function WhatWeDoInteractive({
  audience = "private",
}: {
  audience?: "private" | "institutional";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const services = audience === "institutional" ? institutionalServices : privateServices;
  const movesLeft = audience === "private";

  return (
    <div
      className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:gap-20 ${
        activeIndex === null
          ? "lg:grid-cols-1"
          : "lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]"
      }`}
    >
      <div
        className={`relative flex min-h-[44rem] w-full items-center transition-all duration-[2800ms] ease-out sm:min-h-[48rem] ${
          activeIndex === null
            ? "justify-center"
            : movesLeft
              ? "justify-start lg:pl-8"
              : "justify-end lg:pr-8"
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
                onClick={() => setActiveIndex(index)}
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

      <div
        className={`min-h-48 ${activeIndex === null ? "hidden" : ""}`}
        aria-live="polite"
      >
        {activeIndex !== null && (
          <div
            className={`border-terracotta/40 pl-6 opacity-100 transition-opacity duration-500 ${
              movesLeft ? "border-l-2" : "border-r-2 pr-6 pl-0 text-right"
            }`}
          >
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
