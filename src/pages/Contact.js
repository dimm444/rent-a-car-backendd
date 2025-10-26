import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 30, maxWidth: 600, margin: "0 auto" }}>
      <h2>{t("contact_title")}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(t("contact_message_sent"));
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <label>{t("contact_name")}:</label>
          <input type="text" required style={inputStyle} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>{t("contact_email")}:</label>
          <input type="email" required style={inputStyle} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>{t("contact_message")}:</label>
          <textarea required rows="5" style={inputStyle}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>
          {t("contact_send")}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
