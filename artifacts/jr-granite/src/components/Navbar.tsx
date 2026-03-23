import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Materials", href: "#materials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're on the home page, scroll to it
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      } else {
        // If element not found (e.g., on a different page), navigate to home + hash
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold text-gradient-gold uppercase tracking-widest group-hover:opacity-80 transition-opacity">
              JR Granite
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest hidden sm:block mt-1">
              LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-border mx-2 hidden lg:block"></div>
            <a href="tel:+15551234567" className="hidden lg:flex items-center gap-2 text-primary hover:text-gold-light transition-colors font-medium">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <Button size="sm" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}>
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-6 pt-10 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors border-b border-border/50 pb-4"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-auto pb-10 flex flex-col gap-4">
            <a href="tel:+15551234567" className="flex items-center justify-center gap-3 text-xl text-primary py-4 border border-primary/30 rounded-lg">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <Button size="lg" className="w-full text-lg" onClick={() => {
              setMobileMenuOpen(false);
              document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" });
            }}>
              Request Free Estimate
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
