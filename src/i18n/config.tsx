import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "MK",
  debug: false,
  lng: "MK",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    MK: {
      translations: require("./locales/mk/translations.json"),
    },
    EN: {
      translations: require("./locales/en/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["MK", "EN"];

export default i18n;
