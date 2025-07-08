// src/app/dashboard/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import WidgetCard from "@/components/WidgetCard";
import AnimatedChart from "@/components/AnimatedChart";
import Notification from "@/components/Notification";

const fakeWidgets = [
  {
    title: "Scans réalisés",
    value: 42,
    icon: "🛰️",
    accent: "#3a86ff",
  },
  {
    title: "Vulnérabilités détectées",
    value: 7,
    icon: "⚠️",
    accent: "#4361ee",
  },
  {
    title: "Alertes critiques",
    value: 2,
    icon: "🚨",
    accent: "#5e60ce",
  },
  {
    title: "Score conformité",
    value: "92%",
    icon: "🛡️",
    accent: "#3a86ff",
  },
];

export default function DashboardPage() {
  const [notif, setNotif] = useState<null | string>(null);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: 240,
          width: "100%",
          minHeight: "100vh",
          background: "var(--color-bg)",
          padding: "2.5rem 2rem",
        }}
        aria-label="Tableau de bord"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: 32 }}>
          <Image
            src="https://api.dicebear.com/7.x/identicon/svg?seed=cyber"
            alt="avatar utilisateur"
            width={56}
            height={56}
            style={{
              borderRadius: "50%",
              border: "2px solid #3a86ff",
              boxShadow: "0 0 16px #3a86ff33",
              background: "#232946",
            }}
            priority
            unoptimized
          />
          <div>
            <div style={{ color: "var(--color-text)", fontWeight: "var(--font-weight-bold)", fontSize: "1.5rem", fontFamily: "var(--font-family)" }}>
              Bienvenue, <span style={{ color: "#3a86ff" }}>RSSI Santé</span>
            </div>
            <div style={{ color: "#4361ee", fontWeight: "var(--font-weight-medium)", fontFamily: "var(--font-family)" }}>Démo Cybersécurité SaaS</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: 32,
            alignItems: "stretch",
          }}
        >
          {fakeWidgets.map((w) => (
            <WidgetCard
              key={w.title}
              title={w.title}
              value={w.value}
              icon={w.icon}
              accent={w.accent}
            />
          ))}
          <WidgetCard title="Graphique activité" value="" accent="#3a86ff" icon="📈">
            <AnimatedChart />
          </WidgetCard>
        </div>
        <button
          onClick={() => setNotif("Nouvelle vulnérabilité détectée !")}
          style={{
            background: "linear-gradient(90deg, #4361ee 0%, #3a86ff 100%)",
            color: "#fff",
            fontWeight: "var(--font-weight-bold)",
            fontSize: "1.1rem",
            fontFamily: "var(--font-family)",
            border: "none",
            borderRadius: 8,
            padding: "0.9em 1.5em",
            cursor: "pointer",
            boxShadow: "0 0 16px #3a86ff22",
            marginTop: 8,
            transition: "background 0.2s",
          }}
          aria-label="Simuler une notification"
        >
          Simuler une notification
        </button>
        {notif && (
          <Notification
            message={notif}
            type="error"
            onClose={() => setNotif(null)}
          />
        )}
      </main>
    </div>
  );
}