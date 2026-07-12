import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  phone: z.string().min(5, "Bitte gib deine Telefonnummer ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein.").optional().or(z.literal("")),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder ruf mich direkt an.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/10 text-foreground p-8 rounded-lg text-center"
      >
        <h3 className="font-serif text-2xl mb-2">Danke für deine Nachricht.</h3>
        <p className="text-muted-foreground">Ich werde mich bald telefonisch bei dir melden.</p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Dein Name" {...field} className="bg-background/50 focus-visible:ring-primary" data-testid="input-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonnummer *</FormLabel>
              <FormControl>
                <Input placeholder="Deine Telefonnummer" type="tel" {...field} className="bg-background/50 focus-visible:ring-primary" data-testid="input-phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail (optional)</FormLabel>
              <FormControl>
                <Input placeholder="deine.email@beispiel.de" type="email" {...field} className="bg-background/50 focus-visible:ring-primary" data-testid="input-email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht (optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Wie kann ich dich unterstützen?" 
                  className="min-h-[120px] bg-background/50 focus-visible:ring-primary" 
                  {...field} 
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && (
          <p className="text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          data-testid="button-submit-contact"
        >
          {isSubmitting ? "Wird gesendet…" : "Nachricht senden"}
        </Button>
      </form>
    </Form>
  );
}
