import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";

const placeholders = [0, 1, 2, 3, 4];

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">
            {t("Our Portfolio", "Nuestro Portafolio")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">
            {t("Our Work", "Nuestro Trabajo")}
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden h-[300px] md:h-auto min-h-[300px] bg-muted border border-border flex items-center justify-center"
          >
            <span className="text-muted-foreground text-sm uppercase tracking-widest">
              {t("Photo Coming Soon", "Foto Próximamente")}
            </span>
          </motion.div>

          {placeholders.slice(1).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden h-[250px] bg-muted border border-border flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm uppercase tracking-widest">
                {t("Photo Coming Soon", "Foto Próximamente")}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="px-10 border-primary text-primary hover:bg-primary/10">
              {t("View Full Portfolio", "Ver Portafolio Completo")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
