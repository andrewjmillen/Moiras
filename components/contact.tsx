"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", type: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-terracotta font-medium mb-4 tracking-wide uppercase text-sm">
              Contacto
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-cream text-balance">
              Estamos para acompañarte
            </h2>
            <p className="mt-4 text-lg text-cream/70 leading-relaxed">
              Si vos o alguien de tu familia está transitando un proceso de
              enfermedad grave o de fin de vida, contactanos para una primera
              entrevista donde evaluaremos juntos el mejor abordaje.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-terracotta"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream">Email</h3>
                  <a
                    href="mailto:consultoriomoiras@gmail.com"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    consultoriomoiras@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-terracotta"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="4" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream">Instagram</h3>
                  <a
                    href="https://instagram.com/consultoriomoiras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    @consultoriomoiras
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-2xl p-8">
            <h3 className="text-xl font-serif font-semibold text-slate mb-6">
              Envianos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-potter/30 border border-potter rounded-lg text-slate placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-potter/30 border border-potter rounded-lg text-slate placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-potter/30 border border-potter rounded-lg text-slate placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                    placeholder="+54 9 11 1234-5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Tipo de consulta *
                </label>
                <select
                  id="type"
                  required
                  className="w-full px-4 py-3 bg-potter/30 border border-potter rounded-lg text-slate focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="particular">Particular / Familia</option>
                  <option value="institucion">Institución de Salud</option>
                  <option value="empresa">Empresa / Prepaga</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-potter/30 border border-potter rounded-lg text-slate placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta resize-none"
                  placeholder="Contanos brevemente tu situación..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-terracotta text-cream font-medium rounded-lg hover:bg-terracotta/90 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <p className="sr-only" role="status">
                  Muchas gracias por tu mensaje. Te contactaremos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="sr-only" role="alert">
                  No pudimos enviar el mensaje. Por favor, escribinos directamente a consultoriomoiras@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {status === "success" || status === "error" ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate/55 px-6 backdrop-blur-sm"
          role="presentation"
          onClick={() => setStatus("idle")}
        >
          <div
            className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-full border-8 border-potter bg-cream p-12 text-center shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-feedback-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
                status === "success" ? "bg-terracotta text-cream" : "bg-slate text-cream"
              }`}
              aria-hidden="true"
            >
              {status === "success" ? "✓" : "!"}
            </div>
            <h2
              id="contact-feedback-title"
              className={`font-serif font-semibold text-slate ${
                status === "success" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
              }`}
            >
              {status === "success" ? (
                <>
                  Muchas gracias por tu mensaje.
                  <span className="mt-2 block">Te contactaremos pronto.</span>
                </>
              ) : (
                <>
                  No pudimos enviar el mensaje.
                  <span className="mt-2 block">
                    Por favor, escribinos directamente a consultoriomoiras@gmail.com
                  </span>
                </>
              )}
            </h2>
            <button
              type="button"
              className="mt-6 rounded-full border border-slate/20 px-5 py-2 text-sm font-medium text-slate transition-colors hover:bg-potter/30"
              onClick={() => setStatus("idle")}
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
