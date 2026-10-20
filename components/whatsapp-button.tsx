import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-slate px-5 py-3 text-sm font-medium text-cream shadow-lg transition-colors hover:bg-slate/90"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z"
        />
      </svg>
      Escribinos por WhatsApp
    </a>
  );
}
