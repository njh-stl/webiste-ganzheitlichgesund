import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 font-serif text-xl tracking-wide text-foreground">
          <img src="/images/logo.png" alt="Monika Herman Logo" className="h-14 w-14 object-contain" />
          Monika Herman
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#welcome" className="hover:text-primary transition-colors">Willkommen</a>
          <a href="#approach" className="hover:text-primary transition-colors">Mein Ansatz</a>
          <a href="#about" className="hover:text-primary transition-colors">Über mich</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
          data-testid="link-contact-nav"
        >
          Erstgespräch vereinbaren
        </a>
      </div>
    </motion.header>
  );
}
