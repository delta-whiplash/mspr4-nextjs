// src/components/AnimatedChart.tsx
import React from "react";
import MaterialGlassCard from "./MaterialGlassCard";

export default function AnimatedChart() {
  // Material glass bar chart using SVG and blue/gray palette
  return (
    <MaterialGlassCard width={260} height={120} ariaLabel="Graphique activité" style={{ padding: 0, margin: 0 }}>
      <svg width="220" height="80" viewBox="0 0 220 80" aria-label="Bar chart" role="img">
        <g>
          <rect x="10" y="40" width="30" height="30" rx="6" fill="#3a86ff">
            <animate attributeName="height" values="30;60;30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="40;10;40" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="60" y="30" width="30" height="40" rx="6" fill="#4361ee">
            <animate attributeName="height" values="40;20;40" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="30;50;30" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="110" y="20" width="30" height="50" rx="6" fill="#5e60ce">
            <animate attributeName="height" values="50;30;50" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="20;40;20" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="160" y="35" width="30" height="35" rx="6" fill="#3a86ff">
            <animate attributeName="height" values="35;60;35" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="35;10;35" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    </MaterialGlassCard>
  );
}