"use client";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: "dark",
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

const getDesignTokens = (mode: ThemeMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#f7f7fa",
            paper: "rgba(255,255,255,0.7)",
          },
          primary: { main: "#3a86ff" },
          secondary: { main: "#7f00ff" },
        }
      : {
          background: {
            default: "#232946",
            paper: "rgba(35,41,70,0.7)",
          },
          primary: { main: "#3a86ff" },
          secondary: { main: "#7f00ff" },
        }),
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "var(--font-family, 'Inter', Arial, Helvetica, sans-serif)",
    fontWeightBold: 700,
    h1: { fontWeight: 700, letterSpacing: "0.01em" },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
          background: mode === "light"
            ? "rgba(255,255,255,0.7)"
            : "rgba(35,41,70,0.7)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        },
      },
    },
  },
});

function setHtmlDataTheme(mode: ThemeMode) {
  if (typeof window !== "undefined" && window.document) {
    document.documentElement.setAttribute("data-theme", mode);
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always render "light" on first SSR/CSR, then sync to user preference on client
  const [mode, setMode] = useState<ThemeMode>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let preferred: ThemeMode = "light";
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme-mode");
      if (stored === "light" || stored === "dark") preferred = stored as ThemeMode;
      else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        preferred = "dark";
      }
    }
    setMode(preferred);
    setHydrated(true);
    setHtmlDataTheme(preferred);
    // eslint-disable-next-line no-console
    console.log("[ThemeProvider][useEffect] Hydrated, mode set to:", preferred, new Date().toISOString());
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme-mode", preferred);
      const emotionStyles = document.querySelectorAll('style[data-emotion]');
      console.log("[ThemeProvider][useEffect] Emotion style tags after hydration:", emotionStyles.length);
    }
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme-mode", next);
      }
      setHtmlDataTheme(next);
      return next;
    });
  };

  // Only render children after hydration to avoid SSR/CSR mismatch
  if (!hydrated) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};