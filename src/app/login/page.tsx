// src/app/login/page.tsx
"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import MaterialGlassCard from "@/components/MaterialGlassCard";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !pwd) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    router.push("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #161b22 60%, #232946 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <MaterialGlassCard width={380} height={320} ariaLabel="Connexion" style={{ alignItems: "center" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            width: "100%",
            alignItems: "center",
          }}
          aria-label="Formulaire de connexion"
        >
          <label style={{ color: "#fff", fontWeight: 600, width: "100%" }}>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: "0.7em",
                borderRadius: 8,
                border: "1px solid #3a86ff",
                background: "#232946",
                color: "#fff",
                fontSize: "1rem",
                marginBottom: 12,
              }}
              placeholder="votre@email.fr"
              autoFocus
              aria-required="true"
              aria-label="Adresse email"
            />
          </label>
          <label style={{ color: "#fff", fontWeight: 600, width: "100%" }}>
            Mot de passe
            <input
              type="password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: "0.7em",
                borderRadius: 8,
                border: "1px solid #3a86ff",
                background: "#232946",
                color: "#fff",
                fontSize: "1rem",
                marginBottom: 12,
              }}
              placeholder="********"
              aria-required="true"
              aria-label="Mot de passe"
            />
          </label>
          {error && (
            <div style={{ color: "#ff4d6d", fontWeight: 700, marginBottom: 8 }} role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #3a86ff 0%, #4361ee 100%)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: 8,
              padding: "0.9em",
              cursor: "pointer",
              boxShadow: "0 0 16px #3a86ff33",
              marginTop: 8,
              transition: "background 0.2s",
              width: "100%",
            }}
            aria-label="Se connecter"
          >
            Se connecter
          </button>
        </form>
      </MaterialGlassCard>
    </div>
  );
}