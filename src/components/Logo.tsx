// src/components/Logo.tsx
import React from "react";

export default function Logo() {
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: "2.2rem",
        color: "#00fff7",
        textShadow: "0 0 12px #00fff7, 0 0 32px #7f00ff",
        letterSpacing: "0.1em",
        marginBottom: "2rem",
        userSelect: "none",
      }}
    >
      <span style={{ color: "#7f00ff" }}>CYBER</span>
      <span style={{ color: "#00fff7" }}>SaaS</span>
    </div>
  );
}