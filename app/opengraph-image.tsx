import { ImageResponse } from "next/og";

export const alt = "Moiras - Acompañamiento clínico, ético y legal en decisiones de salud y cuidados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20grande-N9Fv1IqkFQuLK0Pr8GFCbbpV2WnqlT.png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "#F4F0EA",
          color: "#414143",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              color: "#864F36",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Cuidado integral
          </div>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1 }}>MOIRAS</div>
          <div style={{ fontSize: 36, lineHeight: 1.35, marginTop: 36, color: "#5a5a5c" }}>
            Acompañamiento clínico, ético y legal para decidir sobre salud y cuidados.
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          width={380}
          height={380}
          alt=""
          style={{ borderRadius: 9999, border: "6px solid #DACFC3", objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
