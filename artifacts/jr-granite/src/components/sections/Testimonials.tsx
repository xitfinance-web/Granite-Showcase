import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "JR Granite completely transformed our kitchen. The level of detail in the seams and edges of our quartz countertops is incredible. Highly professional team.",
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    text: "I've worked with many fabricators, but JR Granite is top tier. Their selection of marble is exquisite, and their installation is always flawless. My go-to partners.",
  },
  {
    name: "David & Emma Thompson",
    role: "Homeowners",
    text: "From choosing the perfect granite slab to the final installation day, the process was seamless. They treated our home with respect and delivered exactly what was promised.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">Client Stories</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">What People Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 relative"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="mt-auto border-t border-border/50 pt-4">
                <h4 className="font-serif text-foreground font-medium text-lg">{t.name}</h4>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
