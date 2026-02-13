import { createI18n } from "vue-i18n";
import es from "./es.json";
import en from "./en.json";

const supportedLocales = ["es", "en"];

const getDefaultLocale = () => {
    if (typeof window === "undefined") return "es";

    const saved = localStorage.getItem("locale");

    if (saved && supportedLocales.includes(saved as any)) {
      return saved;
    }

    const browser = navigator.language.split("-")[0];

    return supportedLocales.includes(browser as any) ? browser : "es";
};

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getDefaultLocale(),
    fallbackLocale: "en", 
    messages: {
        es,
        en
    } as any
});