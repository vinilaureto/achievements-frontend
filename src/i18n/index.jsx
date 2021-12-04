import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/pt-br.json";
import enUS from "./locales/en-us.json";
import esES from "./locales/es-ES.json";

const resources = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-ES": esES,
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
