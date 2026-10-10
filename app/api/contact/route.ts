import { Resend } from "resend";

const recipient = "consultoriomoiras@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const type = typeof body.type === "string" ? body.type.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return Response.json({ error: "Completá los campos obligatorios." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Ingresá un email válido." }, { status: 400 });
    }

    const resend = new Resend(process.env.Resend_Contact_Form);
    const { error } = await resend.emails.send(
      {
        from: "Moiras <onboarding@resend.dev>",
        to: [recipient],
        replyTo: email,
        subject: `Consulta de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No indicado"}\nTipo de consulta: ${type || "No indicado"}\n\nMensaje:\n${message}`,
      },
      { idempotencyKey: `contact-form/${crypto.randomUUID()}` },
    );

    if (error) {
      return Response.json({ error: "No pudimos enviar tu mensaje." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "No pudimos enviar tu mensaje." }, { status: 500 });
  }
}
