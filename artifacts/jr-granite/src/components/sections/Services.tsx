import { motion } from "framer-motion";
import { Scissors, Hammer, Home, Bath, Droplets, Wrench } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function Services() {
  const { t } = useLang();

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t("Kitchen Countertops", "Encimeras de Cocina"),
      description: t(
        "We'll help you pick the perfect stone for your kitchen — and install it clean and fast.",
        "Te ayudamos a elegir la piedra perfecta para tu cocina — e instalarla limpia y rápido."
      ),
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: t("Bathroom Vanities", "Tocadores de Baño"),
      description: t(
        "Custom-cut stone for your bathroom that looks great and holds up over time.",
        "Piedra cortada a medida para tu baño que se ve increíble y dura mucho tiempo."
      ),
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: t("Fireplace Surrounds", "Chimeneas"),
      description: t(
        "Make your fireplace a real centerpiece with stone that's heat-resistant and beautiful.",
        "Haz de tu chimenea un verdadero centro de atención con piedra resistente al calor y hermosa."
      ),
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: t("Custom Fabrication", "Fabricación a Medida"),
      description: t(
        "We cut and finish your stone exactly the way you need it — no cookie-cutter work here.",
        "Cortamos y terminamos tu piedra exactamente como la necesitas — sin trabajo genérico aquí."
      ),
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: t("Installation", "Instalación"),
      description: t(
        "Our team shows up on time, works clean, and gets the job done right the first time.",
        "Nuestro equipo llega a tiempo, trabaja limpio y hace el trabajo bien desde la primera vez."
      ),
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t("Repair & Restoration", "Reparación y Restauración"),
      description: t(
        "Got a chip or crack? We can fix up your existing stone and make it look new again.",
        "¿Tienes una grieta o astilla? Podemos reparar tu piedra existente y hacerla lucir nueva otra vez."
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">
            {t("What We Do", "Lo Que Hacemos")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">
            {t("How We Can Help", "Cómo Podemos Ayudarte")}
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-foreground mb-3 relative z-10">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
