// src/components/MaterialGlassCard.tsx
import React, { ReactNode } from "react";

type MaterialGlassCardProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  role?: string;
};

export default function MaterialGlassCard({
  children,
  width = 340,
  height = 180,
  style = {},
  ariaLabel,
  role = "region",
}: MaterialGlassCardProps) {
  return (
    <section
      aria-label={ariaLabel}
      role={role}
      tabIndex={0}
      style={{
        width,
        height,
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: 20,
        boxShadow: "0 4px 32px 0 #1a223f33, 0 1.5px 0 #3a506b, 0 0.5px 0 #232946",
        padding: "2rem 1.5rem",
        margin: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
        outline: "none",
        transition: "box-shadow 0.2s, border 0.2s",
        border: "1.5px solid rgba(255,255,255,0.18)",
        ...style,
      }}
      onFocus={e => (e.currentTarget.style.boxShadow = "0 0 0 3px #3a86ff88, 0 4px 32px 0 #1a223f33")}
      onBlur={e => (e.currentTarget.style.boxShadow = "0 4px 32px 0 #1a223f33, 0 1.5px 0 #3a506b, 0 0.5px 0 #232946")}
    >
      {children}
    </section>
  );
}