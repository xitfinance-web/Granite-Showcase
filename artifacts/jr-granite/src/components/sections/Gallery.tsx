import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const images = [
  // modern dark kitchen marble island
  "https://images.unsplash.com/photo-1556909211-36987daffa2f?auto=format&fit=crop&q=80&w=800",
  // luxury bathroom vanity stone
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80&w=800",
  // elegant kitchen white quartz
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
  // contemporary kitchen dark granite
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
  // luxury marble detail close up
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">Recent Masterpieces</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Main large image */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group relative h-[300px] md:h-auto"
          >
            <img src={images[0]} alt="Gallery feature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
            </div>
          </motion.div>
          
          {/* Smaller images */}
          {images.slice(1).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden group relative h-[250px]"
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="px-10 border-primary text-primary hover:bg-primary/10">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
