import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const projects = [
  { src: "images/kitchen-island.jpeg", alt: "White quartz kitchen island" },
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

        {/* Featured top row: 1 large + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl overflow-hidden h-[280px] md:h-[380px]"
          >
            <img src={`${import.meta.env.BASE_URL}${projects[0].src}`} alt={projects[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <div className="grid grid-rows-2 gap-4">
            {projects.slice(1, 3).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 * (i + 1) }}
                className="rounded-2xl overflow-hidden h-[180px] md:h-auto"
              >
                <img src={`${import.meta.env.BASE_URL}${p.src}`} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row: 4 equal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.slice(3).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
              className="rounded-2xl overflow-hidden h-[200px] md:h-[240px]"
            >
              <img src={`${import.meta.env.BASE_URL}${p.src}`} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
