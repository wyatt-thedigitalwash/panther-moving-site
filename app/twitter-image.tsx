import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Panther Moving — Tampa's Trusted Moving Company";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const logoPath = join(process.cwd(), "public/assets/panther-moving-site-logo.svg");
  const logoSvg = readFileSync(logoPath, "utf-8");
  const logoBase64 = Buffer.from(logoSvg).toString("base64");
  const logoDataUrl = `data:image/svg+xml;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUrl}
          alt=""
          width={400}
          height={100}
          style={{ marginBottom: 32 }}
        />
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: 2,
            textTransform: "uppercase" as const,
            marginBottom: 12,
          }}
        >
          Panther Moving
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: 3,
            textTransform: "uppercase" as const,
          }}
        >
          Tampa&apos;s Trusted Moving Company
        </div>
      </div>
    ),
    { ...size },
  );
}
