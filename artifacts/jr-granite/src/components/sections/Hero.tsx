import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* luxury kitchen marble granite dark elegant */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Kitchen Countertop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        {/* Optional generated texture overlay for more depth */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/dark-stone-texture.png)`, backgroundSize: 'cover' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Premium Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-white mb-6"
          >
            Luxury Stone <br />
            <span className="text-gradient-gold italic pr-4">Crafted for You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl font-light leading-relaxed"
          >
            Elevate your space with our premium selection of Granite, Marble, and Quartz countertops. Expert fabrication and flawless installation guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-base" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}>
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base text-white border-white/30 hover:bg-white/10 hover:border-white/50" onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: "smooth" })}>
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
