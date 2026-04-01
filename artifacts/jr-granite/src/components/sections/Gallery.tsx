import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const projects = [
  { src: "images/project-1.jpeg", alt: "Marble countertop with veining" },
  { src: "images/project-2.jpeg", alt: "Dark granite wet bar countertop" },
  { src: "images/project-3.jpeg", alt: "Gray granite kitchen island" },
  { src: "images/project-4.jpeg", alt: "Dual kitchen islands with quartz" },
  { src: "images/project-5.jpeg", alt: "White quartz with green cabinets" },
  { src: "images/project-6.jpeg", alt: "Black granite kitchen countertop" },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden h-[260px]"
            >
              <img
                src={`${import.meta.env.BASE_URL}${p.src}`}
                alt={p.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
