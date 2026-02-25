import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Languages, 
  Calculator, 
  Wrench, 
  Heart, 
  Building2, 
  Monitor,
  Briefcase,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const courses = [
  {
    id: "licenza-media",
    icon: BookOpen,
    title: "Diploma di Licenza Media",
    subtitle: "Scuola Parentale",
    duration: "1-3 anni",
    certification: "Licenza Media",
    requirements: "Nessun requisito",
    color: "from-emerald-500 to-emerald-600",
    description: "Percorso destinato a famiglie e studenti che desiderano una formazione mirata, specifica e personalizzata. Adatto anche per cittadini stranieri.",
    includes: [
      "Materie: Italiano, Matematica, Inglese, Geografia, Scienze, Storia, Arte, Musica, Ed. Tecnica, Ed. Fisica",
      "Classi ridotte con attenzione individuale",
      "Supporto per studenti con difficoltà"
    ],
    outcomes: ["Accesso a tutti i corsi di diploma di scuola superiore"],
    category: "base"
  },
  {
    id: "liceo-linguistico",
    icon: Languages,
    title: "Liceo Linguistico",
    subtitle: "Diploma Liceale",
    duration: "5 anni",
    certification: "Diploma di Liceo Linguistico",
    requirements: "Licenza Media",
    color: "from-purple-500 to-purple-600",
    description: "Conoscenza delle lingue europee (inglese, francese e spagnolo) con mentalità linguistica finalizzata a favorire l'apertura interculturale.",
    includes: [
      "Padronanza di 3 lingue straniere",
      "Competenze comunicative avanzate in lingua straniera",
      "Apertura culturale internazionale"
    ],
    outcomes: [
      "Società di import/export di merci",
      "Aziende di logistica e trasporti",
      "Compagnie aeree e turistiche",
      "Studi legali e commerciali",
      "Agenzie di traduzione",
      "Marketing e comunicazione"
    ],
    category: "liceo"
  },
  {
    id: "liceo-scientifico",
    icon: Calculator,
    title: "Liceo Scientifico",
    subtitle: "Diploma Liceale",
    duration: "5 anni",
    certification: "Diploma di istruzione secondaria superiore a indirizzo scientifico",
    requirements: "Licenza Media",
    color: "from-blue-500 to-blue-600",
    description: "Rapporto equilibrato tra le discipline scientifiche e umanistiche, con rigoroso metodo metodologico e spirito critico.",
    includes: [
      "Matematica e Fisica approfondite",
      "Scienze naturali (Biologia, Chimica)",
      "Lingua e letteratura italiana e straniera",
      "Disegno e Storia dell'Arte"
    ],
    outcomes: [
      "Accesso a tutte le facoltà universitarie",
      "Percorsi scientifici e tecnici",
      "Professioni nel mondo del lavoro"
    ],
    category: "liceo"
  },
  {
    id: "liceo-scienze-umane",
    icon: Heart,
    title: "Liceo Scienze Umane",
    subtitle: "Diploma Liceale",
    duration: "5 anni",
    certification: "Diploma Di Liceo delle scienze umane",
    requirements: "Licenza Media",
    color: "from-pink-500 to-pink-600",
    description: "Acquisizione di competenze specifiche nell'ambito della psicologia e delle scienze dell'educazione, con formazione nelle aree letteraria, linguistica, filosofica, pedagogica e socio-psicologica.",
    includes: [
      "Psicologia e Sociologia",
      "Pedagogia e metodologia educativa",
      "Raccordi multidisciplinari",
      "Stage formativi sul territorio"
    ],
    outcomes: [
      "Assistente sociale",
      "Assistente per l'infanzia",
      "Operatore di animazione sociale",
      "Esperto in servizi della comunicazione"
    ],
    category: "liceo"
  },
  {
    id: "liceo-scienze-umane-economico",
    icon: Users,
    title: "Liceo Scienze Umane Economico-Sociale",
    subtitle: "Diploma Liceale",
    duration: "5 anni",
    certification: "Diploma Di Liceo delle scienze umane opzione Economico-Sociale",
    requirements: "Licenza Media",
    color: "from-rose-500 to-rose-600",
    description: "Indirizzo volto a conoscere i significati e i metodi delle scienze economiche, giuridiche e sociologiche, analizzando l'interdipendenza tra fenomeni internazionali, nazionali e locali.",
    includes: [
      "Diritto ed economia politica",
      "Scienze umane (Antropologia, Sociologia, Psicologia)",
      "Due lingue straniere",
      "Metodologia che favorisce la problematizzazione"
    ],
    outcomes: [
      "Settore delle pubbliche relazioni",
      "Comunicazione d'impresa",
      "Ricerca sociale e di mercato",
      "Informazione culturale"
    ],
    category: "liceo"
  },
  {
    id: "meccanica-meccatronica",
    icon: Wrench,
    title: "Meccanica, Meccatronica ed Energia",
    subtitle: "Istituto Tecnico Industriale",
    duration: "5 anni",
    certification: "Diploma Tecnico",
    requirements: "Licenza Media",
    color: "from-orange-500 to-orange-600",
    description: "Approfondimento delle tematiche relative al campo degli impianti industriali e delle macchine, con competenze in progettazione, realizzazione e gestione di apparati e sistemi.",
    includes: [
      "Disegni meccanici con sistemi CAD 2D e 3D",
      "Programmi CAD-CAM per macchine utensili",
      "Sistemi di lavorazione e automazione",
      "Tecnologia meccanica e dei materiali"
    ],
    outcomes: [
      "Settore metalmeccanico e industrie",
      "Automazione industriale e meccatronica",
      "Studi tecnici di progettazione",
      "Industria chimica, plastica, alimentare"
    ],
    category: "tecnico"
  },
  {
    id: "costruzioni-ambiente",
    icon: Building2,
    title: "Costruzioni, Ambiente e Territorio",
    subtitle: "Istituto Tecnico",
    duration: "5 anni",
    certification: "Costruzioni, Ambiente e Territorio",
    requirements: "Licenza Media",
    color: "from-teal-500 to-teal-600",
    description: "Competenze nel campo dei materiali, delle macchine e dei dispositivi utilizzati nelle industrie delle costruzioni, nell'uso di strumenti per il rilievo topografico.",
    includes: [
      "Progettazione e organizzazione del cantiere",
      "Gestione degli impianti e sicurezza del lavoro",
      "Risparmio energetico e tutela dell'ambiente",
      "Valutazione di impatto ambientale"
    ],
    outcomes: [
      "Libero professionista (Geometra)",
      "Imprese edili e industriali",
      "Uffici tecnici comunali e regionali",
      "Studi professionali"
    ],
    category: "tecnico"
  },
  {
    id: "informatica-telecomunicazioni",
    icon: Monitor,
    title: "Informatica e Telecomunicazioni",
    subtitle: "Istituto Tecnico",
    duration: "5 anni",
    certification: "Diploma di Informatica e Telecomunicazioni",
    requirements: "Licenza Media",
    color: "from-cyan-500 to-cyan-600",
    description: "Competenze specifiche nel campo dei sistemi informatici, dell'elaborazione dell'informazione, delle applicazioni e tecnologie Web, delle reti e degli apparati di comunicazione.",
    includes: [
      "Programmazione software",
      "Gestione di reti e sistemi informativi",
      "Sicurezza informatica",
      "Tecnologie e tecniche di rappresentazione grafica"
    ],
    outcomes: [
      "Aziende produttrici di software",
      "Servizi informatici avanzati (Web, Networking)",
      "Gestione sistemi informativi aziendali",
      "Formazione Tecnica Superiore (ITS)"
    ],
    category: "tecnico"
  },
  {
    id: "afm",
    icon: Briefcase,
    title: "Amministrazione, Finanza e Marketing",
    subtitle: "Istituto Tecnico",
    duration: "5 anni",
    certification: "Amministrazione, Finanza e Marketing",
    requirements: "Licenza Media",
    color: "from-amber-500 to-amber-600",
    description: "Competenze specifiche nel campo dei macrofenomeni economici nazionali ed internazionali, della normativa civilistica e fiscale, dei sistemi aziendali.",
    includes: [
      "Economia aziendale e marketing",
      "Diritto e economia politica",
      "Informatica gestionale",
      "Due lingue straniere"
    ],
    outcomes: [
      "Pubbliche Amministrazioni ed Enti Pubblici",
      "Aziende private e grande distribuzione",
      "Banche e istituti di credito",
      "Libera professione (commercialista)"
    ],
    category: "tecnico"
  },
  {
    id: "socio-sanitario",
    icon: Heart,
    title: "Servizi per la Sanità e l'Assistenza Sociale",
    subtitle: "Istituto Professionale",
    duration: "5 anni",
    certification: "Servizi per la Sanità e l'Assistenza Sociale",
    requirements: "Licenza Media",
    color: "from-red-500 to-red-600",
    description: "Formazione di una figura professionale capace di assumere responsabilità, con autonomia nelle strutture sociosanitarie pubbliche e private.",
    includes: [
      "Gestione di progetti e attività nei servizi socio-sanitari",
      "Interventi rivolti a famiglie, minori, anziani, disabili",
      "Metodologie operative e psicologia applicata",
      "Diritto e legislazione socio-sanitaria"
    ],
    outcomes: [
      "Animatore in residenze per anziani",
      "Assistente nelle case famiglia",
      "Strutture socio-sanitarie pubbliche e private",
      "Facoltà universitarie (Scienze Infermieristiche, Psicologia)"
    ],
    category: "professionale"
  }
];

const faqs = [
  {
    question: "Come funzionano i corsi diurni e serali?",
    answer: "I corsi diurni si svolgono dal lunedì al venerdì dalle 8:30 alle 12:10, mentre i corsi serali dalle 19:10 alle 22:40. Offriamo anche corsi personalizzati per chi ha esigenze specifiche di orario."
  },
  {
    question: "È possibile recuperare più anni in uno?",
    answer: "Sì, offriamo la possibilità di recuperare anni scolastici con percorsi abbreviati. Il passaggio di classe avviene entro il 15 marzo di ogni anno, permettendo di proseguire senza perdere tempo."
  },
  {
    question: "Come avviene l'esame di diploma?",
    answer: "Gli esami di stato si svolgono presso istituti paritari convenzionati. Il diploma rilasciato è pienamente riconosciuto dal MIUR e valido in Italia e nell'Unione Europea."
  },
  {
    question: "Offrite supporto per studenti con DSA o BES?",
    answer: "Sì, il doposcuola si rivolge anche a ragazzi con difficoltà, disturbi specifici dell'apprendimento (DSA) o Bisogni Educativi Speciali (BES), con metodologie personalizzate."
  },
  {
    question: "Quanto costano i corsi?",
    answer: "I corsi partono da €1.650 (Promozione 2025/26). Il costo varia in base al tipo di corso e alle esigenze individuali. Contattaci per un preventivo personalizzato."
  }
];

const categories = [
  { id: "all", label: "Tutti i corsi" },
  { id: "base", label: "Licenza Media" },
  { id: "liceo", label: "Licei" },
  { id: "tecnico", label: "Istituti Tecnici" },
  { id: "professionale", label: "Istituti Professionali" }
];

export default function Servizi() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">La nostra offerta formativa</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Corsi per il conseguimento del diploma
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Percorsi completi e riconosciuti dal MIUR, con la flessibilità di orari diurni, serali e personalizzati in base alle tue esigenze.
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-amber-800">Promozione 2025/26 — A partire da €1.650</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="space-y-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}>
                        <course.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {course.subtitle}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{course.description}</p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>Durata: {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <GraduationCap className="w-4 h-4" />
                          <span>Titolo: {course.certification}</span>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Cosa include:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {course.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 mb-2">Sbocchi professionali:</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.outcomes.slice(0, 4).map((outcome, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-full">
                              {outcome}
                            </span>
                          ))}
                          {course.outcomes.length > 4 && (
                            <span className="px-3 py-1 text-[#1e3a5f] text-xs font-medium">
                              +{course.outcomes.length - 4} altri
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:w-48 flex-shrink-0">
                      <Link to={createPageUrl('Contatti')}>
                        <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8f] rounded-xl">
                          Richiedi info
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Il nostro metodo</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Un approccio personalizzato che si adatta alle tue esigenze di studio e lavoro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Classi ridotte",
                description: "Gruppi limitati per garantire attenzione individuale e supporto personalizzato a ogni studente."
              },
              {
                title: "Orari flessibili",
                description: "Corsi diurni, serali e personalizzati per conciliare studio con lavoro e impegni familiari."
              },
              {
                title: "Docenti qualificati",
                description: "Insegnanti esperti che utilizzano strumenti didattici semplificati per garantire il successo finale."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Domande frequenti</h2>
            <p className="text-slate-600">Tutto quello che devi sapere sui nostri corsi.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Non trovi il corso che cerchi?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contattaci per un colloquio conoscitivo gratuito. Ti aiuteremo a trovare il percorso più adatto alle tue esigenze.
          </p>
          <Link to={createPageUrl('Contatti')}>
            <Button size="lg" className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-10 py-6 text-lg rounded-xl">
              Richiedi informazioni
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}