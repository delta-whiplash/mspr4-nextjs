// src/components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { href: "/dashboard", label: "Tableau de bord", icon: "📊" },
  { href: "/reports", label: "Rapports", icon: "📄" },
  { href: "/login", label: "Déconnexion", icon: "🚪" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: "linear-gradient(180deg, #181c2f 60%, #7f00ff 100%)",
        color: "#fff",
        minHeight: "100vh",
        padding: "2rem 1rem",
        boxShadow: "2px 0 24px #7f00ff44",
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
      <nav style={{ width: "100%" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.href} style={{ margin: "1.2rem 0" }}>
              <Link
                href={item.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7em",
                  padding: "0.7em 1em",
                  borderRadius: 8,
                  background: "rgba(127,0,255,0.08)",
                  transition: "background 0.2s",
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