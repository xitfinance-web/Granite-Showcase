import { motion } from "framer-motion";
import { Scissors, Hammer, Home, Bath, Droplets, Wrench } from "lucide-react";

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Kitchen Countertops",
    description: "Transform the heart of your home with durable, stunning natural stone or engineered quartz surfaces.",
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: "Bathroom Vanities",
    description: "Create a spa-like retreat with luxurious, moisture-resistant stone custom cut for your vanity.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Fireplace Surrounds",
    description: "Make a statement in your living room with a breathtaking, heat-resistant stone fireplace surround.",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Custom Fabrication",
    description: "Our state-of-the-art facility precisely cuts and finishes your chosen stone to your exact specifications.",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Expert Installation",
    description: "Our experienced, insured team ensures a flawless fit, perfect seams, and proper sealing.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repair & Restoration",
    description: "Breathe new life into your existing stone with our professional polishing, sealing, and chip repair services.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">Exceptional Services</h3>
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
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
