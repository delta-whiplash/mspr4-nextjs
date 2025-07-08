// src/components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import { useThemeMode } from "./ThemeProvider";

const navItems = [
  { href: "/dashboard", label: "Tableau de bord", icon: <DashboardIcon /> },
  { href: "/reports", label: "Rapports", icon: <DescriptionIcon /> },
  { href: "/login", label: "Déconnexion", icon: <LogoutIcon /> },
];

export default function Sidebar() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <aside
      style={{
        width: 240,
        background: "var(--color-sidebar-gradient)",
        color: "var(--color-text)",
        minHeight: "100vh",
        padding: "2rem 1rem",
        boxShadow: "var(--color-sidebar-shadow)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10,
      }}
    >
      <Logo />
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="Toggle theme"
        sx={{
          mb: 1,
          background: "var(--color-sidebar-link-bg)",
          boxShadow: "var(--color-sidebar-link-shadow)",
          backdropFilter: "blur(8px)",
        }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <nav style={{ width: "100%" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.href} style={{ margin: "1.2rem 0" }}>
              <Link
                href={item.href}
                style={{
                  color: "var(--color-link)",
                  textDecoration: "none",
                  fontWeight: "var(--font-weight-medium)",
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-family)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7em",
                  padding: "0.7em 1em",
                  borderRadius: 12,
                  background: "var(--color-sidebar-link-bg)",
                  transition: "background 0.2s",
                  boxShadow: "var(--color-sidebar-link-shadow)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}