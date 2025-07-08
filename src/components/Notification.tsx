// src/components/Notification.tsx
import React from "react";

type NotificationProps = {
  message: string;
  type?: "success" | "error" | "info";
  onClose?: () => void;
};

export default function Notification({
  message,
  type = "info",
  onClose,
}: NotificationProps) {
  const colors = {
    success: "#00fff7",
    error: "#ff00c8",
    info: "#7f00ff",
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        background: "#181c2f",
        color: colors[type],
        border: `2px solid ${colors[type]}`,
        borderRadius: 12,
        padding: "1rem 1.5rem",
        fontWeight: 600,
        fontSize: "1.1rem",
        boxShadow: `0 0 24px ${colors[type]}55`,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "1em",
        animation: "fadeIn 0.5s",
      }}
    >
      <span>
        {type === "success" && "✅"}
        {type === "error" && "⛔"}
        {type === "info" && "ℹ️"}
      </span>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: colors[type],
            fontWeight: 700,
            fontSize: "1.2rem",
            cursor: "pointer",
            marginLeft: "1em",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}