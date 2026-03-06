import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#FAF8F4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(184,93,42,0.25)",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#B85D2A",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
