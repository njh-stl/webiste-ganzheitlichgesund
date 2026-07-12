import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-12">Impressum</h1>

            <div className="space-y-10 text-foreground/80 font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Angaben gemäß § 5 TMG</h2>
                <p>
                  Monika Herman<br />
                  Gesundheitsberaterin (Einzelunternehmen)<br />
                  Max-Planck-Str. 4<br />
                  85609 Aschheim
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Kontakt</h2>
                <p>
                  Telefon: +49 162 5888820<br />
                  E-Mail: monikaherman@gmx.net
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Umsatzsteuer-Identifikationsnummer</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE209468594
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Monika Herman<br />
                  Max-Planck-Str. 4<br />
                  85609 Aschheim
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Hinweis gemäß Online-Streitbeilegungsgesetz (OS-Plattform)</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit,
                  die du unter{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>{" "}
                  findest. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">Haftungshinweis</h2>
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Alle
                  Angebote sind unverbindlich. Die auf dieser Website bereitgestellten Informationen ersetzen
                  keine medizinische Diagnose, Behandlung oder Beratung durch ausgebildetes medizinisches Fachpersonal.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
