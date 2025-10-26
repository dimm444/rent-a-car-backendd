import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const buttonStyle = {
    margin: "0 8px",
    padding: "10px 18px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
    transition: "all 0.3s ease",
  };

  const activeButtonStyle = {
    backgroundColor: "#004a86",
    color: "white",
  };

  const inactiveButtonStyle = {
    backgroundColor: "#e0e0e0",
    color: "#333",
  };

  const currentLang = i18n.language || "sq";

  return (
    <div style={{ marginTop: 20, textAlign: "right" }}>
      {["sq", "mk", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          style={{
            ...buttonStyle,
            ...(currentLang === lng ? activeButtonStyle : inactiveButtonStyle),
          }}
        >
          {lng === "sq" ? "Shqip" : lng === "mk" ? "Македонски" : "English"}
        </button>
      ))}
    </div>
  );
}
