import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marley — Private AI for Regulated Industries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(184,93,42,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#1C1814",
            letterSpacing: "-0.5px",
            marginBottom: 48,
          }}
        >
          Marley
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 500,
            color: "#1C1814",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          AI That Understands the Law.
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 24,
            color: "#5C5650",
            maxWidth: 600,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Private, secure, and built for regulated industries.
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          {["UK Data Residency", "GDPR Compliant", "Regulatory Ready"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(184,93,42,0.15)",
                  background: "rgba(242,236,227,0.8)",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#4A7A4E",
                  }}
                />
                <span style={{ fontSize: 14, color: "#5C5650" }}>{badge}</span>
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
