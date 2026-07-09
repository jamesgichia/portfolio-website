"use client";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  // wa.me opens WhatsApp (app on mobile, web.whatsapp.com on desktop)
  const whatsappUrl =
    "https://wa.me/254791326693?text=Hi%20James!%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20connect.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with James on WhatsApp"
      id="whatsapp-float-btn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1)",
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          background: "#7A5C10",
          color: "#fff",
          fontSize: "0.8rem",
          fontWeight: 600,
          padding: "6px 12px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
          boxShadow: "0 4px 16px rgba(160,123,24,0.4)",
        }}
      >
        Chat on WhatsApp
      </span>

      {/* The button circle */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #A07B18, #E8C54A)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hovered
            ? "0 8px 32px rgba(201, 162, 39, 0.65)"
            : "0 4px 20px rgba(201, 162, 39, 0.4)",
          transition: "box-shadow 0.2s ease",
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Pulse ring animation */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(201, 162, 39, 0.7)",
            animation: "wa-pulse 2s ease-out infinite",
          }}
        />
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="#ffffff"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
