// src/components/IsometricCard.tsx
import React, { ReactNode } from "react";

type IsometricCardProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
};

export default function IsometricCard({
  children,
  width = 320,
  height = 180,
  style = {},
}: IsometricCardProps) {
  return (
    <div
      style={{
        width,
        height,
        background: "linear-gradient(135deg, var(--color-bg) 60%, #1a223f 100%)",
        color: "var(--color-text)",
        borderRadius: 18,
        boxShadow:
          "0 8px 32px 0 #1a223f55, 0 1.5px 0 #3a506b, 0 0.5px 0 var(--color-bg)",
        transform: "skewY(-12deg) rotate(-8deg)",
        padding: "2rem 1.5rem",
        margin: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
        overflow: "visible",
        ...style,
      }}
    >
      <div
        style={{
          transform: "skewY(12deg) rotate(8deg)",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}