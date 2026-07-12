import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Datenschutz() {
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
            <h1 className="font-serif text-4xl md:text-5xl mb-12">Datenschutzerklärung</h1>

            <div className="space-y-10 text-foreground/80 font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">1. Datenschutz auf einen Blick</h2>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen
                  Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen
                  du persönlich identifiziert werden kannst.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">2. Verantwortliche Stelle</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mt-2">
                  Monika Herman<br />
                  Max-Planck-Str. 4<br />
                  85609 Aschheim<br />
                  E-Mail: monikaherman@gmx.net<br />
                  Telefon: +49 162 5888820
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">3. Hosting und Server-Logfiles</h2>
                <p>
                  Diese Website wird bei einem externen Hosting-Anbieter gehostet. Beim Aufrufen der Website
                  erfasst der Server automatisch Informationen in sogenannten Server-Logfiles, die dein Browser
                  automatisch übermittelt. Dies sind z. B. Browsertyp, Betriebssystem, Referrer-URL, Hostname des
                  zugreifenden Rechners und Uhrzeit der Serveranfrage. Diese Daten werden nicht mit anderen
                  Datenquellen zusammengeführt und dienen ausschließlich der technisch fehlerfreien Bereitstellung
                  der Website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">4. Kontaktformular</h2>
                <p>
                  Wenn du uns per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus dem
                  Anfrageformular – Name und Telefonnummer sind Pflichtangaben, E-Mail-Adresse und Nachricht sind
                  freiwillige Angaben – zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                  gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage eines
                  berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) an der Beantwortung deiner Anfrage, sofern
                  diese im Zusammenhang mit der Anbahnung eines Vertrages steht auch auf Grundlage von Art. 6 Abs. 1
                  lit. b DSGVO.
                </p>
                <p className="mt-2">
                  Die von dir im Kontaktformular eingegebenen Daten verbleiben bei uns, bis du uns zur Löschung
                  aufforderst, deine Einwilligung zur Speicherung widerrufst oder der Zweck für die
                  Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
                  Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">5. Kontaktaufnahme per WhatsApp</h2>
                <p>
                  Auf dieser Website bieten wir dir die Möglichkeit, per Link direkt Kontakt über den Messenger-
                  Dienst WhatsApp (Anbieter: WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
                  Dublin 2, Irland) aufzunehmen. Wenn du diesen Link nutzt, öffnet sich WhatsApp mit unserer
                  Telefonnummer als Empfänger. Die anschließende Kommunikation läuft über die App auf deinem
                  eigenen Gerät und unterliegt den Datenschutzbestimmungen von WhatsApp. Wir haben keinen Einfluss
                  auf Art und Umfang der Daten, die WhatsApp dabei verarbeitet. Weitere Informationen findest du in
                  der Datenschutzerklärung von WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">6. Deine Rechte</h2>
                <p>
                  Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner
                  gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung,
                  Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                  Datenschutz kannst du dich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  Dir steht zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-3 text-foreground">7. Speicherdauer</h2>
                <p>
                  Sofern innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                  verbleiben deine personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                  entfällt. Machst du ein berechtigtes Löschersuchen geltend oder widerrufst du eine Einwilligung
                  zur Datenverarbeitung, werden deine Daten gelöscht, sofern wir keine anderen rechtlich zulässigen
                  Gründe für die Speicherung deiner personenbezogenen Daten haben.
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
