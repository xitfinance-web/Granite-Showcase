import { Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl font-bold text-gradient-gold uppercase tracking-widest block">
                JR Granite
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                {t("Quality Stone & Installation", "Piedra de Calidad e Instalación")}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t(
                "We take pride in doing great work for every customer — big job or small.",
                "Nos enorgullece hacer un gran trabajo para cada cliente — proyecto grande o pequeño."
              )}
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

          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">
              {t("Quick Links", "Enlaces Rápidos")}
            </h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("Home", "Inicio")}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("Services", "Servicios")}</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("Our Work", "Nuestro Trabajo")}</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("Contact", "Contacto")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">
              {t("Contact Us", "Contáctanos")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+18653870744" className="hover:text-primary transition-colors">(865) 387-0744</a>
                  <a href="tel:+18654559911" className="hover:text-primary transition-colors">(865) 455-9911</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:jrgranite2021@gmail.com" className="hover:text-primary transition-colors">jrgranite2021@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">
              {t("Hours", "Horario")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>{t("Mon – Fri", "Lun – Vie")}</span>
                    <span className="text-foreground">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>{t("Saturday", "Sábado")}</span>
                    <span className="text-foreground">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("Sunday", "Domingo")}</span>
                    <span className="text-primary">{t("Closed", "Cerrado")}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JR Granite LLC. {t("All rights reserved.", "Todos los derechos reservados.")}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">{t("Privacy Policy", "Política de Privacidad")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("Terms of Service", "Términos de Servicio")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
