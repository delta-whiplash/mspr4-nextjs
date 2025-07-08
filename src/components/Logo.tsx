// src/components/Logo.tsx
import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 1,
        mb: 4,
        borderRadius: 3,
        background: "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(127,0,255,0.10) 100%)",
        boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
        backdropFilter: "blur(8px)",
        userSelect: "none",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "primary.main",
          mr: 1,
          fontFamily: "var(--font-family)",
        }}
      >
        CYBER
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "secondary.main",
          fontFamily: "var(--font-family)",
        }}
      >
        SaaS
      </Typography>
    </Box>
  );
}