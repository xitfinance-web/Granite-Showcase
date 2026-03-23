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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 business hours to discuss your project.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Let's Discuss Your Next Project</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Ready to elevate your space? Fill out the form, and our design consultants will contact you to arrange a free, no-obligation estimate.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-serif text-foreground">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg text-foreground">info@jrgranite.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Visit Showroom</p>
                  <p className="text-lg text-foreground">123 Stonecraft Way, Metro City</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-secondary rounded-2xl border border-border/50 overflow-hidden relative group">
              {/* Using a generic map image as placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-500" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur px-4 py-2 rounded-lg border border-primary/20 text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-background p-8 md:p-10 rounded-3xl border border-border shadow-2xl">
              <h4 className="text-2xl font-serif text-foreground mb-8">Request an Estimate</h4>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Full Name</label>
                    <Input {...register("name")} placeholder="John Doe" className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Phone Number</label>
                    <Input {...register("phone")} placeholder="(555) 000-0000" className={errors.phone ? "border-destructive" : ""} />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email Address</label>
                  <Input {...register("email")} type="email" placeholder="john@example.com" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Project Type</label>
                  <select 
                    {...register("projectType")}
                    className={`flex h-12 w-full rounded-md border ${errors.projectType ? "border-destructive" : "border-border"} bg-input/50 px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-input`}
                  >
                    <option value="">Select an option</option>
                    <option value="kitchen">Kitchen Countertops</option>
                    <option value="bathroom">Bathroom Vanity</option>
                    <option value="fireplace">Fireplace Surround</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <p className="text-xs text-destructive">{errors.projectType.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Project Details</label>
                  <Textarea 
                    {...register("message")} 
                    placeholder="Tell us about your material preferences, estimated square footage, timeline..."
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Request..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
