import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const faqs = [
    {
      question: "Ist die Stoffwechselanalyse eine medizinische Diagnose?",
      answer: "Nein. Die Stoffwechselanalyse ist kein medizinisches Diagnoseverfahren und ersetzt keine ärztliche Untersuchung. Sie liefert Hinweise darauf, wie verschiedene Stoffwechselbereiche aktuell funktionieren, und dient als Grundlage für die persönliche Gesundheitsberatung."
    },
    {
      question: "Für wen eignet sich die Beratung?",
      answer: "Die Beratung richtet sich an Menschen, die ihre Gesundheit besser verstehen und gezielter unterstützen möchten. Ob bei anhaltender Müdigkeit, Verdauungsbeschwerden oder dem Wunsch nach mehr Wohlbefinden im Alltag – die Beratung kann ein hilfreicher erster Schritt sein."
    },
    {
      question: "Was passiert im Erstgespräch?",
      answer: "Im Erstgespräch geht es darum, Ihre aktuelle Situation kennenzulernen. Wir sprechen über Ihre Anliegen, Ihren Alltag und Ihre Ziele. So kann ich einschätzen, ob und wie ich Sie sinnvoll begleiten kann."
    },
    {
      question: "Wie geht es nach der Analyse weiter?",
      answer: "Nach der Stoffwechselanalyse besprechen wir die Ergebnisse gemeinsam und entwickeln individuelle Empfehlungen. Je nach Situation begleite ich Sie über einen längeren Zeitraum, damit Veränderungen nachhaltig wirken können."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground selection:bg-primary/20 selection:text-foreground">
      <Navbar />

      <main className="flex-grow pt-20">

        {/* HERO SECTION */}
        <section id="welcome" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.png"
              alt="Ruhige Naturlandschaft"
              className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground tracking-tight leading-tight">
                Mehr Energie. Mehr Wohlbefinden.{" "}
                <span className="italic text-primary">Mehr Verständnis für deinen Körper.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Wer seinen Körper versteht, kann bewusstere Entscheidungen für seine Gesundheit treffen.
                Mit einer individuellen Stoffwechselanalyse und persönlicher Gesundheitsberatung begleite ich dich auf diesem Weg.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-sm"
                data-testid="link-contact-hero"
              >
                Jetzt Erstgespräch vereinbaren
              </a>
            </motion.div>
          </div>
        </section>

        {/* SYMPTOMS SECTION */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-4xl mb-8">Symptome sind oft nur die Spitze des Eisbergs.</h2>
              <div className="space-y-4 text-foreground/75 font-light leading-relaxed text-lg">
                <p>
                  Vielleicht fühlst du dich häufig müde, antriebslos oder nicht mehr so leistungsfähig wie früher.
                  Vielleicht beschäftigen dich Verdauungsprobleme, Hautprobleme oder andere wiederkehrende Beschwerden.
                </p>
                <p>
                  Oft wird versucht, einzelne Symptome isoliert zu betrachten. Wer seine Gesundheit langfristig
                  unterstützen möchte, profitiert davon, den Körper als Ganzes besser zu verstehen.
                </p>
                <p className="text-foreground/90 font-medium">
                  Genau hier setzt meine ganzheitliche Gesundheitsberatung an.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* APPROACH / PROCESS SECTION */}
        <section id="approach" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl mb-6">So läuft es ab</h2>
              <p className="text-foreground/70 font-light">
                Ein klarer, persönlicher Prozess – damit du weißt, was dich erwartet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Erstgespräch",
                  desc: "Wir sprechen über deine aktuelle Situation, deine Ziele und deine Fragen. Ohne Druck, ohne Verpflichtung."
                },
                {
                  step: "02",
                  title: "Stoffwechselanalyse",
                  desc: "Die Analyse liefert wertvolle Einblicke in verschiedene Stoffwechselbereiche und bildet die Grundlage für die weitere Beratung."
                },
                {
                  step: "03",
                  title: "Persönliche Gesundheitsberatung",
                  desc: "Gemeinsam besprechen wir die Ergebnisse und entwickeln individuelle Empfehlungen für Ernährung, Lebensstil und deine nächsten Schritte."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-muted/40 p-10 rounded-sm border border-border/40 hover:border-primary/30 transition-colors"
                >
                  <div className="text-secondary font-serif text-5xl mb-6 opacity-40">{item.step}</div>
                  <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-sm"
                data-testid="link-contact-approach"
              >
                Jetzt Erstgespräch vereinbaren
              </a>
            </motion.div>
          </div>
        </section>

        {/* METABOLISM SECTION */}
        <section id="stoffwechsel" className="py-24 relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/water.png"
              alt="Fließendes Wasser"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mx-auto text-center mb-14"
            >
              <h2 className="font-serif text-4xl mb-8">Was ist der Stoffwechsel eigentlich?</h2>
              <p className="text-lg text-background/80 font-light leading-relaxed">
                Der Stoffwechsel umfasst alle Prozesse, mit denen dein Körper Nährstoffe aufnimmt, verarbeitet,
                verteilt und wieder ausscheidet. Er spielt eine zentrale Rolle für zahlreiche Funktionen im Körper.
              </p>
              <p className="mt-4 text-lg text-background/80 font-light leading-relaxed">
                Ein besseres Verständnis deines Stoffwechsels schafft die Grundlage, deinen Körper gezielter zu unterstützen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto mb-14"
            >
              <div className="rounded-sm overflow-hidden border border-background/20 shadow-lg">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/stoffwechsel-poster.jpg"
                  className="w-full h-auto block"
                  data-testid="video-stoffwechsel"
                >
                  <source src="/videos/stoffwechsel.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-background/50 text-xs font-light mt-4 tracking-wide">
                Kurzes Video: Was ist der Stoffwechsel?
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Darm",
                  desc: "Hier werden Nährstoffe aufgenommen und wichtige Verdauungsprozesse angestoßen."
                },
                {
                  title: "Leber",
                  desc: "Die Leber übernimmt zahlreiche Stoffwechsel- und Umwandlungsprozesse."
                },
                {
                  title: "Grundsubstanz",
                  desc: "Sie bildet das Milieu, in dem deine Körperzellen versorgt werden und Stoffwechselprozesse stattfinden."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-background/10 border border-background/20 rounded-sm p-8 backdrop-blur-sm"
                >
                  <h3 className="font-serif text-xl mb-3 text-background">{card.title}</h3>
                  <p className="text-background/70 font-light text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-4xl text-center mb-6">Wie funktioniert die Stoffwechselanalyse?</h2>
              <p className="text-center text-foreground/70 font-light leading-relaxed mb-12 text-lg">
                In nur 60 Sekunden liefert die Bioresonanzmessung wertvolle Einblicke in verschiedene
                Stoffwechselbereiche – ganz ohne Blutabnahme, Nadeln oder Strahlenbelastung.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {[
                  { value: "60 Sekunden", label: "Messdauer" },
                  { value: "Schmerzfrei", label: "Vollständig" },
                  { value: "Ohne Blutabnahme", label: "Non-invasiv" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="bg-background border border-primary/20 rounded-sm p-6 text-center"
                  >
                    <div className="font-serif text-lg sm:text-xl text-primary mb-1 break-words">{item.value}</div>
                    <div className="text-xs text-foreground/50 font-light tracking-wide uppercase">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-4 text-foreground/75 font-light leading-relaxed mb-14"
              >
                <p>
                  Während der Analyse hältst du zwei Kontakte an der Stirn und einen Kontakt in der Hand.
                  Die Messung ist schmerzfrei und dauert nur etwa eine Minute.
                </p>
                <p>
                  Anschließend werden die Ergebnisse gemeinsam besprochen und dienen als Grundlage für
                  deine persönliche Gesundheitsberatung.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="font-serif text-2xl mb-6">Was kann betrachtet werden?</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Vitamine",
                    "Mineralstoffe",
                    "Spurenelemente",
                    "Coenzyme",
                    "Darmtätigkeit",
                    "Übersäuerung",
                    "Herz-Kreislauf-System",
                    "Hinweise auf Fettleber",
                    "Schwermetallbelastung",
                    "viele weitere Stoffwechselparameter"
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-background border border-border/60 rounded-sm text-sm text-foreground/80 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-foreground/50 font-light leading-relaxed italic">
                  Die Ergebnisse dienen der ganzheitlichen Gesundheitsberatung und ersetzen keine ärztliche Diagnose oder Behandlung.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SMALL CTA SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl mb-6">
                Für dein Auto gibt es den TÜV. Für deinen Körper gibt es Verständnis.
              </h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-8">
                Die meisten Menschen lassen ihr Auto regelmäßig prüfen und warten. Den eigenen Körper
                nutzen wir jeden Tag – oft ohne genau zu wissen, was er gerade braucht.
                Eine Stoffwechselanalyse kann ein erster Schritt sein, um genauer hinzuschauen.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 border border-primary text-primary font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-contact-tuev"
              >
                Termin zur Stoffwechselanalyse vereinbaren
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="md:w-1/2"
              >
                <div className="w-[65%] mx-auto aspect-[3/4] rounded-sm overflow-hidden shadow-lg relative">
                  <img
                    src="/images/about2.jpg"
                    alt="Monika Herman"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-primary/20 mix-blend-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="md:w-1/2 space-y-6"
              >
                <h2 className="font-serif text-4xl mb-4">Über mich</h2>
                <h3 className="text-xl text-primary font-medium">Ich bin Monika Herman.</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed font-light">
                  <p>
                    Nach meiner Zeit in einer Steuerkanzlei führte mich mein Weg in den Managerjob für die
                    Luxusmarke Oliver Peoples Los Angeles. Der Beruf machte mir Freude, doch ein Vierteljahrhundert
                    in der Reisetätigkeit forderte auch seinen Tribut. Immer im Auto essen, von Bäcker zu Imbiss,
                    immer unter Zeitdruck. Ergebnis waren Bluthochdruck, eine Vorstufe von Diabetes, Gewichtszunahme,
                    Schlafstörungen sowie Antriebs- und Energielosigkeit.
                  </p>
                  <p>
                    Die Lösung schien zunächst einfach: Medikamente. Doch obwohl die Symptome behandelt wurden,
                    fühlte ich mich nicht wirklich gesünder.
                  </p>
                  <p>
                    Stattdessen wurden es mit der Zeit immer mehr Tabletten. Wo sollte diese Reise nur hingehen?
                    Wenn ich nichts ändere, dann ab in die Diabetes und lebenslange Medikamente nehmen, aber keine
                    Aussicht auf Gesundheit und Lebensqualität.
                  </p>
                  <p>
                    So konnte es nicht weitergehen. Ich wollte Klarheit schaffen und mir meines Körpers bewusster
                    werden.
                  </p>
                  <p>
                    Durch eine Empfehlung landete ich in einem Arztvortrag, der mir die Augen öffnete.
                  </p>
                  <p>
                    Zum ersten Mal verstand ich, wie wichtig es ist, den Körper als Ganzes zu betrachten.
                  </p>
                  <p>
                    Meine Medikamente halfen mir zwar, die Symptome in den Griff zu bekommen, doch für die
                    Behebung der Ursache musste ich Eigenverantwortung übernehmen.
                  </p>
                  <p>
                    Der Schlüssel, wieder gesund zu werden, war eine Bioresonanzanalyse und eine persönlich
                    angepasste ganzheitliche Stoffwechselkur.
                  </p>
                  <p>
                    Hier begann meine Ausbildung zur Gesundheitsberaterin und ich war mein erster eigener Patient.
                  </p>
                  <p>
                    Nach drei Monaten war ich wieder zurück im Leben.
                  </p>
                  <p>
                    Nach sechs Monaten konnte ich die Medikamente reduzieren und nach zwölf Monaten war ich
                    komplett medikamentenfrei.
                  </p>
                  <p>
                    Diese Erfahrung hat mich zu meiner eigenen Gesundheitsmission geführt und seitdem berate und
                    unterstütze ich Menschen, denen das Thema Gesundheit und Wohlbefinden wichtig ist.
                  </p>
                  <p className="text-foreground/90 font-medium">
                    Denn ich bin überzeugt: Gesundheit beginnt dort, wo wir unseren Körper besser verstehen.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-4xl text-center mb-12">Häufige Fragen</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-background rounded-sm border border-border/50 p-8"
                    data-testid={`faq-item-${i}`}
                  >
                    <h3 className="font-serif text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-foreground/70 font-light leading-relaxed text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-background rounded-sm shadow-sm border border-border/50 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 bg-primary/5">
                <h2 className="font-serif text-3xl mb-6">Lass uns sprechen</h2>
                <p className="text-foreground/70 font-light mb-8 leading-relaxed">
                  Hast du Fragen oder möchtest du einen ersten Termin vereinbaren?
                  Ich freue mich darauf, dich kennenzulernen.
                </p>

                <div className="space-y-4 text-sm font-light">
                  <div>
                    <strong className="block font-medium mb-1">Praxis für Gesundheit</strong>
                    <p>Max-Planck-Str. 4<br />85609 Aschheim</p>
                  </div>
                  <div>
                    <strong className="block font-medium mb-1">E-Mail</strong>
                    <p>monikaherman@gmx.net</p>
                  </div>
                  <div>
                    <strong className="block font-medium mb-1">Telefon</strong>
                    <p>+49 162 5888820</p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-primary/10">
                  <p className="text-base text-foreground/70 font-light mb-4">
                    Lieber erst kurz eine Frage stellen?
                  </p>
                  <a
                    href="https://wa.me/491625888820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#1ebe5a] transition-colors shadow-sm"
                    data-testid="link-whatsapp"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.526 3.66 1.437 5.168L2 22l4.933-1.417A9.94 9.94 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.14 8.14 0 01-4.415-1.293l-.317-.196-3.096.889.898-3.017-.207-.325A8.14 8.14 0 013.8 12c0-4.529 3.672-8.2 8.201-8.2 4.528 0 8.2 3.671 8.2 8.2 0 4.528-3.672 8.2-8.2 8.2z" />
                    </svg>
                    <span className="text-base">Über WhatsApp schreiben</span>
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
