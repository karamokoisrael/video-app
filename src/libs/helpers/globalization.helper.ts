import { I18n } from "i18n-js";
// import * as Localization from "expo-localization";
import en from "@/configurations/i18n/en.json";
import fr from "@/configurations/i18n/fr.json";

export const defaultLocale = "fr";
export const translations = {
  en,
  fr,
};
const i18n = new I18n(translations);
i18n.enableFallback = true;
i18n.defaultLocale = defaultLocale;
export default i18n;
