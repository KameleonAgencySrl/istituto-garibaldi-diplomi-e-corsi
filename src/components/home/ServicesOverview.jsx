import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, BookOpen, Languages, Calculator, Wrench, Heart, Building2, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: BookOpen,
    title: "Licenza Media",
    subtitle: "Scuola Parentale",
    description: "Diploma di terza media per studenti di ogni età, anche stranieri.",
    outcome: "Accesso a tutti i corsi di diploma",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Languages,
    title: "Liceo Linguistico",
    subtitle: "5 anni",
    description: "Padronanza di 3 lingue straniere: inglese, francese e spagnolo.",
    outcome: "Sbocchi in traduzione, turismo, commercio estero",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Calculator,
    title: "Liceo Scientifico",
    subtitle: "5 anni",
    description: "Formazione equilibrata tra discipline scientifiche e umanistiche.",
    outcome: "Accesso a tutte le facoltà universitarie",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Liceo Scienze Umane",
    subtitle: "5 anni",
    description: "Focus su psicologia, pedagogia e sociologia.",
    outcome: "Sbocchi in ambito sociale e sanitario",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Wrench,
    title: "Meccanica e Meccatronica",
    subtitle: "Istituto Tecnico",
    description: "Competenze in progettazione, automazione e CAD/CAM.",
    outcome: "Lavoro immediato in industria manifatturiera",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Building2,
    title: "Costruzioni, Ambiente, Territorio",
    subtitle: "Istituto Tecnico",
    description: "Geometra del futuro: edilizia sostenibile e urbanistica.",
    outcome: "Libera professione o impiego pubblico",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Monitor,
    title: "Informatica e Telecomunicazioni",
    subtitle: "Istituto Tecnico",
    description: "Programmazione, reti, cybersecurity e gestione sistemi.",
    outcome: "Settore IT in costante crescita",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: GraduationCap,
    title: "Amministrazione, Finanza, Marketing",
    subtitle: "Istituto Tecnico",
    description: "Economia aziendale, marketing e gestione finanziaria.",
    outcome: "Ruoli in amministrazione e contabilità",
    color: "from-amber-500 to-amber-600"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">La nostra offerta formativa</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Corsi per il conseguimento del diploma
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Percorsi completi e riconosciuti dal MIUR, con la flessibilità di orari diurni, serali e personalizzati.
            </p>
          </div>
          <Link to={createPageUrl('Servizi')}>
            <Button variant="outline" className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-xl px-6">
              Vedi tutti i corsi
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-[#1e3a5f] font-medium">
                    → {service.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Servizi scolastici aggiuntivi
              </h3>
              <p className="text-blue-100 mb-6">
                Oltre ai corsi di diploma, offriamo servizi di supporto per ogni esigenza formativa.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Doposcuola per studenti BES-DSA", id: "doposcuola" },
                  { title: "Corsi per la preparazione agli esami universitari", id: "esami-universitari" },
                  { title: "Corsi di lingue e contabilità", id: "lingue-contabilita" },
                  { title: "Corsi di italiano per stranieri", id: "italiano-stranieri" }
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={createPageUrl('ServiziAggiuntivi')}
                    className="group"
                  >
                    <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl p-4 transition-all duration-300 h-full">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#d4a853] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-white text-sm font-medium leading-snug group-hover:translate-x-0.5 transition-transform">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://media.base44.com/images/public/699f00212cf867d30a26b76b/aa12a5b55_WhatsAppImage2026-03-18at83946PM.jpg"
                alt="Servizi scolastici"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}