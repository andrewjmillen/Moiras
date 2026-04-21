import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moiras%20logo-bTugCLEfTgpwXh5mFlteGO0yLJRnTm.jpg"
        alt="Moiras - Tres figuras sosteniendo esferas"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-foreground">Moiras</h1>
      <p className="mt-4 text-lg text-muted-foreground text-center max-w-xl text-balance">
        Acompañamiento integral en procesos de final de vida y cronicidad avanzada
      </p>
    </main>
  );
}
