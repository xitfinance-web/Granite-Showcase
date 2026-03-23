import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl font-bold text-gradient-gold uppercase tracking-widest block">
                JR Granite
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Quality Stone & Installation
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elevating spaces with premium natural and engineered stone surfaces. Expert fabrication and flawless installation for kitchens, bathrooms, and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#materials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Stone Collection</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Project Gallery</a></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Full Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Stonecraft Way<br />Suite 100<br />Metro City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@jrgranite.com" className="hover:text-primary transition-colors">info@jrgranite.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>Mon - Fri</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-primary">Closed</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JR Granite LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
