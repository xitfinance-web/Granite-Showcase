import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const allImages = [
  "https://images.unsplash.com/photo-1556909211-36987daffa2f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1588854337221-4cfb4cb579ee?auto=format&fit=crop&q=80&w=800",
];

export default function FullGallery() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Project Portfolio</h1>
            <p className="text-muted-foreground">Browse our extensive collection of completed natural stone and quartz installations.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: (idx % 3) * 0.1 }}
                className="rounded-xl overflow-hidden group relative h-[300px] bg-secondary"
              >
                <img 
                  src={img} 
                  alt={`Portfolio piece ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm text-sm tracking-wider uppercase">View Detail</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
