import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "850+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "A+", label: "Licensed & Insured" },
];

export function Stats() {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/dark-stone-texture.png)`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-border/0 md:divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
