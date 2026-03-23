import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const materials = [
  {
    name: "Granite",
    desc: "Unparalleled natural strength and unique veining.",
    // dark elegant granite slab texture
    img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Marble",
    desc: "Classic, luminous elegance for high-end spaces.",
    // white luxury marble slab texture
    img: "https://images.unsplash.com/photo-1598444306354-94c34a2e58eb?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Quartz",
    desc: "Engineered perfection, zero maintenance, endless colors.",
    // modern quartz clean surface
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Quartzite",
    desc: "The beauty of marble with the durability of granite.",
    // dark gray quartzite slab texture
    img: "https://images.unsplash.com/photo-1588824147043-41bbd5cc48cb?auto=format&fit=crop&q=80&w=800",
  },
];

export function Materials() {
  return (
    <section id="materials" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">Premium Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground">Explore Our Materials</h3>
          </div>
          <Button variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}>
            Request Samples
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={mat.img}
                alt={mat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="text-2xl font-serif text-white mb-2">{mat.name}</h4>
                <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-white/80 text-sm mt-2">{mat.desc}</p>
                  <span className="inline-block mt-4 text-primary text-sm font-medium uppercase tracking-wider">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
