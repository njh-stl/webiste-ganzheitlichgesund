import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 text-center">
      <div className="container mx-auto px-6">
        <img
          src="/images/logo.png"
          alt="Monika Herman Logo"
          className="h-20 w-20 object-contain mx-auto mb-1 brightness-0 invert opacity-90"
        />
        <h2 className="font-serif text-2xl mb-4">Monika Herman</h2>
        <p className="text-sm opacity-70 mb-8 font-light max-w-md mx-auto">
          Persönliche Gesundheitsberatung.<br />
          Individuelle Begleitung auf dem Weg zu mehr Wohlbefinden.
        </p>
        <div className="flex justify-center gap-6 text-sm opacity-60">
          <Link href="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link>
          <Link href="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
