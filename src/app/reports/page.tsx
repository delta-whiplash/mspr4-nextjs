// src/app/reports/page.tsx
"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MaterialGlassCard from "@/components/MaterialGlassCard";

const fakeReports = [
  {
    id: 1,
    date: "2025-07-01",
    type: "Scan OSINT",
    status: "Terminé",
    score: 92,
    details: "Aucune vulnérabilité critique détectée. Score de conformité élevé.",
  },
  {
    id: 2,
    date: "2025-06-15",
    type: "Scan Actif",
    status: "En cours",
    score: 78,
    details: "Scan en cours. Plusieurs ports ouverts détectés.",
  },
  {
    id: 3,
    date: "2025-05-30",
    type: "Rapport RGPD",
    status: "Erreur",
    score: 0,
    details: "Erreur lors de la génération du rapport. Veuillez réessayer.",
  },
];

export default function ReportsPage() {
  const [modal, setModal] = useState<null | typeof fakeReports[0]>(null);

  function downloadDummy() {
    const blob = new Blob(["Rapport fictif"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rapport-demo.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: 240,
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient(120deg, #161b22 70%, #232946 100%)",
          padding: "2.5rem 2rem",
        }}
        aria-label="Rapports"
      >
        <h1 style={{ color: "#3a86ff", fontWeight: 800, fontSize: "2rem", marginBottom: 32 }}>
          Rapports
        </h1>
        <MaterialGlassCard width="100%" height={320} ariaLabel="Tableau des rapports" style={{ minWidth: 600, margin: "0 auto" }}>
          <table
            style={{
              width: "100%",
              background: "transparent",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "none",
              marginBottom: 0,
            }}
            aria-label="Liste des rapports"
          >
            <thead>
              <tr style={{ color: "#fff", background: "#232946" }}>
                <th style={{ padding: "1em" }}>Date</th>
                <th>Type</th>
                <th>Statut</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fakeReports.map((r) => (
                <tr key={r.id} style={{ color: "#fff", textAlign: "center" }}>
                  <td style={{ padding: "1em" }}>{r.date}</td>
                  <td>{r.type}</td>
                  <td>
                    <span
                      style={{
                        padding: "0.3em 0.8em",
                        borderRadius: 8,
                        background:
                          r.status === "Terminé"
                            ? "#3a86ff33"
                            : r.status === "En cours"
                            ? "#4361ee33"
                            : "#5e60ce33",
                        color:
                          r.status === "Terminé"
                            ? "#3a86ff"
                            : r.status === "En cours"
                            ? "#4361ee"
                            : "#5e60ce",
                        fontWeight: 700,
                      }}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td>
                    <div
                      style={{
                        width: 80,
                        height: 12,
                        background: "#232946",
                        borderRadius: 6,
                        overflow: "hidden",
                        margin: "0 auto",
                        boxShadow: "0 0 8px #3a86ff22",
                      }}
                    >
                      <div
                        style={{
                          width: `${r.score}%`,
                          height: "100%",
                          background:
                            r.score > 80
                              ? "linear-gradient(90deg, #3a86ff, #4361ee)"
                              : r.score > 0
                              ? "linear-gradient(90deg, #5e60ce, #4361ee)"
                              : "#5e60ce",
                          borderRadius: 6,
                          transition: "width 0.5s",
                        }}
                      />
                    </div>
                    <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.95em" }}>
                      {r.score > 0 ? r.score + "%" : "-"}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => setModal(r)}
                      style={{
                        background: "linear-gradient(90deg, #3a86ff 0%, #4361ee 100%)",
                        color: "#fff",
                        fontWeight: 700,
                        border: "none",
                        borderRadius: 8,
                        padding: "0.5em 1em",
                        cursor: "pointer",
                        marginRight: 8,
                      }}
                      aria-label={`Voir le rapport du ${r.date}`}
                    >
                      Voir
                    </button>
                    <button
                      onClick={downloadDummy}
                      style={{
                        background: "linear-gradient(90deg, #5e60ce 0%, #4361ee 100%)",
                        color: "#fff",
                        fontWeight: 700,
                        border: "none",
                        borderRadius: 8,
                        padding: "0.5em 1em",
                        cursor: "pointer",
                      }}
                      aria-label={`Télécharger le rapport du ${r.date}`}
                    >
                      Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MaterialGlassCard>
        {modal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(35,41,70,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
            onClick={() => setModal(null)}
            aria-modal="true"
            role="dialog"
          >
            <MaterialGlassCard width={400} height={220} ariaLabel="Détail du rapport" style={{ margin: 0 }}>
              <h2 style={{ color: "#3a86ff", fontWeight: 800, fontSize: "1.3rem" }}>
                Détail du rapport
              </h2>
              <div style={{ margin: "1.2em 0" }}>{modal.details}</div>
              <button
                onClick={() => setModal(null)}
                style={{
                  background: "linear-gradient(90deg, #4361ee 0%, #3a86ff 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: 8,
                  padding: "0.5em 1em",
                  cursor: "pointer",
                  position: "absolute",
                  right: 24,
                  bottom: 24,
                }}
                aria-label="Fermer le détail du rapport"
              >
                Fermer
              </button>
            </MaterialGlassCard>
          </div>
        )}
      </main>
    </div>
  );
}