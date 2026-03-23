import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Dark gradient background — no stock photos */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#111] to-[#1a1a0e]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/dark-stone-texture.png)`,
          backgroundSize: "cover",
        }}
      />
      {/* Subtle gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              {t("Quality You Can Count On", "Calidad en la que Puedes Confiar")}
            </span>
          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl font-light leading-relaxed"
          >
            {t(
              "We help homeowners get the kitchen and bathroom of their dreams — with quality granite, marble, and quartz that lasts.",
              "Ayudamos a los propietarios a obtener la cocina y el baño de sus sueños — con granito, mármol y cuarzo de calidad que dura."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Get a Free Quote", "Obtener Cotización Gratis")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base text-white border-white/30 hover:bg-white/10 hover:border-white/50"
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("See Our Work", "Ver Nuestro Trabajo")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
