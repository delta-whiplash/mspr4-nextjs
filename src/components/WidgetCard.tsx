// src/components/WidgetCard.tsx
import React, { ReactNode } from "react";
import MaterialGlassCard from "./MaterialGlassCard";

type WidgetCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  accent?: string;
  children?: ReactNode;
};

export default function WidgetCard({
  title,
  value,
  icon,
  accent = "#3a86ff",
  children,
}: WidgetCardProps) {
  return (
    <MaterialGlassCard ariaLabel={title} style={{ minWidth: 220, minHeight: 120, borderLeft: `6px solid ${accent}` }}>
      <div style={{ fontSize: "1.7rem", marginBottom: 8, color: accent }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: "1.1rem", color: accent }}>{title}</div>
      <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#fff", margin: "0.3em 0" }}>
        {value}
      </div>
      {children}
    </MaterialGlassCard>
  );
}