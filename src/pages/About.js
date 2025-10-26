import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      style={{ padding: 30, maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}
    >
      <h2>{t("about_title")}</h2>
      <p>{t("about_text")}</p>

      <h3 style={{ marginTop: 30 }}>{t("about_mission_title")}</h3>
      <p>{t("about_mission_text")}</p>

      <h3 style={{ marginTop: 30 }}>{t("about_vision_title")}</h3>
      <p>{t("about_vision_text")}</p>

      <h3 style={{ marginTop: 30 }}>{t("about_values_title")}</h3>

      <h4>{t("about_values_trust_title")}</h4>
      <p>{t("about_values_trust_text")}</p>

      <h4>{t("about_values_flexibility_title")}</h4>
      <p>{t("about_values_flexibility_text")}</p>

      <h4>{t("about_values_service_title")}</h4>
      <p>{t("about_values_service_text")}</p>

      <h3 style={{ marginTop: 30 }}>{t("about_team_title")}</h3>
      <p>{t("about_team_text")}</p>
    </div>
  );
}
