// src/components/MaterialGlassCard.tsx
import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return (
    <Paper
      aria-label={ariaLabel}
      role={role}
      tabIndex={0}
      elevation={4}
      sx={{
        width,
        height,
        borderRadius: 4,
        background: "var(--color-card-glass)",
        backdropFilter: "blur(16px)",
        boxShadow: "var(--color-card-shadow)",
        padding: "2rem 1.5rem",
        margin: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
        outline: "none",
        border: "1.5px solid var(--color-card-border)",
        transition: "box-shadow 0.2s, border 0.2s",
        "&:focus": {
          boxShadow: "0 0 0 3px var(--color-primary)88, var(--color-card-shadow)",
        },
        ...style,
      }}
    >
      {children}
    </Paper>
  );
}