import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importimi i përkthimeve për secilën gjuhë
import translationEN from "./locales/en/translation.json";
import translationSQ from "./locales/sq/translation.json";
import translationMK from "./locales/mk/translation.json";

// Konfigurimi i përkthimeve
const resources = {
  en: { translation: translationEN },
  sq: { translation: translationSQ },
  mk: { translation: translationMK },
};

// Inicializimi i i18next me opsione
i18n
  .use(LanguageDetector) // Zbulon automatikisht gjuhën nga browseri
  .use(initReactI18next) // Lidh me React
  .init({
    resources,
    fallbackLng: "sq", // Nëse nuk gjendet gjuha, përdor shqipen
    interpolation: {
      escapeValue: false, // React bën escape automatikisht
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // Ruaj zgjedhjen e gjuhës
    },
  });

export default i18n;
