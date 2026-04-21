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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data
    const whatsappMessage = encodeURIComponent(
      `Hola, mi nombre es ${formData.name}. ${formData.message}`
    );
    window.open(`https://wa.me/5491100000000?text=${whatsappMessage}`, "_blank");
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
                    href="mailto:contacto@moiras.com.ar"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    contacto@moiras.com.ar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-terracotta"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream">WhatsApp</h3>
                  <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    +54 9 11 0000-0000
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
                className="w-full px-8 py-4 bg-terracotta text-cream font-medium rounded-lg hover:bg-terracotta/90 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
