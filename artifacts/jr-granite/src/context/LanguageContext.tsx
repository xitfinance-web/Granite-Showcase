import { createContext, useContext, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (en: string, es: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  const t = (en: string, es: string) => (lang === "en" ? en : es);
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
