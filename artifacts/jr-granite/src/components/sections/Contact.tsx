import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/context/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide some details about your project"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: t("Message Sent!", "¡Mensaje Enviado!"),
      description: t(
        "We'll get back to you soon to talk about your project.",
        "Nos pondremos en contacto contigo pronto para hablar de tu proyecto."
      ),
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">
                {t("Reach Out", "Contáctanos")}
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                {t("Let's Talk About Your Project", "Hablemos de Tu Proyecto")}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t(
                  "Fill out the form and we'll reach out to set up a free estimate. No pressure, no commitment.",
                  "Llena el formulario y te contactaremos para una estimación gratis. Sin presión, sin compromiso."
                )}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    {t("Call or Text", "Llama o Envía Mensaje")}
                  </p>
                  <p className="text-xl font-serif text-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    {t("Email Us", "Escríbenos")}
                  </p>
                  <p className="text-lg text-foreground">info@jrgranite.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    {t("Our Location", "Nuestra Ubicación")}
                  </p>
                  <p className="text-lg text-foreground">123 Stonecraft Way, Metro City</p>
                </div>
              </div>
            </div>

            {/* Map placeholder — no stock photos */}
            <div className="w-full h-64 bg-secondary rounded-2xl border border-border/50 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm text-muted-foreground">
                  {t("Map coming soon", "Mapa próximamente")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-background p-8 md:p-10 rounded-3xl border border-border shadow-2xl">
              <h4 className="text-2xl font-serif text-foreground mb-8">
                {t("Request a Free Estimate", "Solicitar Estimación Gratis")}
              </h4>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">
                      {t("Your Name", "Tu Nombre")}
                    </label>
                    <Input {...register("name")} placeholder={t("Jane Smith", "Ana García")} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">
                      {t("Phone Number", "Número de Teléfono")}
                    </label>
                    <Input {...register("phone")} placeholder="(555) 000-0000" className={errors.phone ? "border-destructive" : ""} />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">
                    {t("Email Address", "Correo Electrónico")}
                  </label>
                  <Input {...register("email")} type="email" placeholder="you@example.com" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">
                    {t("What do you need?", "¿Qué necesitas?")}
                  </label>
                  <select
                    {...register("projectType")}
                    className={`flex h-12 w-full rounded-md border ${errors.projectType ? "border-destructive" : "border-border"} bg-input/50 px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-input`}
                  >
                    <option value="">{t("Pick one...", "Elige una opción...")}</option>
                    <option value="kitchen">{t("Kitchen Countertops", "Encimeras de Cocina")}</option>
                    <option value="bathroom">{t("Bathroom Vanity", "Tocador de Baño")}</option>
                    <option value="fireplace">{t("Fireplace Surround", "Chimenea")}</option>
                    <option value="commercial">{t("Commercial Project", "Proyecto Comercial")}</option>
                    <option value="other">{t("Something else", "Algo más")}</option>
                  </select>
                  {errors.projectType && <p className="text-xs text-destructive">{errors.projectType.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">
                    {t("Tell us a bit about your project", "Cuéntanos un poco sobre tu proyecto")}
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder={t(
                      "Size, material ideas, timeline — anything helps!",
                      "Tamaño, ideas de materiales, tiempo — ¡cualquier detalle ayuda!"
                    )}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting
                    ? t("Sending...", "Enviando...")
                    : t("Send My Request", "Enviar Mi Solicitud")}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
