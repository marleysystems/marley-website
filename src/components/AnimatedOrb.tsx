"use client";

export function AnimatedOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle warm tint at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(184,93,42,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Sandy warm glow — left */}
      <div
        className="absolute top-[5%] left-[10%] w-[500px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,181,160,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "pulse 10s ease-in-out infinite",
        }}
      />
      {/* Terracotta accent — right */}
      <div
        className="absolute top-[8%] right-[8%] w-[380px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,93,42,0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "pulse 13s ease-in-out infinite reverse",
        }}
      />
      {/* Bottom fade to page bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, #FAF8F4)",
        }}
      />
    </div>
  );
}
