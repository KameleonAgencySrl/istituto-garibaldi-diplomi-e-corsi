import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, Languages, Globe } from 'lucide-react';

const services = [
  {
    id: "doposcuola",
    icon: Users,
    title: "Doposcuola per studenti BES-DSA",
    description: "Supporto fondamentale per garantire che ogni studente abbia le risorse gli strumenti per sviluppare al meglio le proprie capacità, affrontando le difficoltà in modo personalizzato e mirato.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "esami-universitari",
    icon: GraduationCap,
    title: "Corsi per la preparazione agli esami universitari",
    description: "Supporto strutturato e mirato con l'obiettivo di massimizzare le possibilità di successo degli strumenti negli esami d'ingresso e nell'affrontare i vari esami annuali. Questi corsi sono una risorsa preziosa per chi ha bisogno di un supporto aggiuntivo per entrare nel mondo accademico.",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "lingue-contabilita",
    icon: Languages,
    title: "Corsi di lingue e contabilità",
    description: "Progettati per arricchire le competenze degli studenti, preparando quelli che intendono approfondire questa materia per motivi accademici e/o professionali. Lingue straniere: inglese, francese e spagnolo",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: "italiano-stranieri",
    icon: Globe,
    title: "Corsi di italiano per stranieri",
    description: "Offrono un approccio completo e personalizzato per imparare la lingua, adattandosi alla necessità di ciascun studente e al suo livello di competenza. Ideali per chi desidera migliorare le proprie competenze linguistiche e integrarsi meglio nella vita quotidiana in Italia.",
    color: "from-amber-500 to-amber-600"
  }
];

export default function ServiziAggiuntivi() {
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
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Supporto educativo</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Servizi scolastici aggiuntivi
            </h1>
            <p className="text-xl text-slate-600">
              Oltre ai corsi di diploma, offriamo servizi di supporto per ogni esigenza formativa, dalla preparazione universitaria al recupero personalizzato.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <img
              src="https://media.base44.com/images/public/699f00212cf867d30a26b76b/aa12a5b55_WhatsAppImage2026-03-18at83946PM.jpg"
              alt="Servizi scolastici"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[16/7]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Icon & Title */}
                    <div className="lg:col-span-4 p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white flex flex-col justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#1e3a5f] to-[#d4a853] rounded-full" />
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
                      <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link to={createPageUrl('Contatti')}>
                          <Button className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white rounded-xl">
                            Richiedi informazioni
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Perché scegliere i nostri servizi aggiuntivi?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un supporto personalizzato che fa la differenza nel tuo percorso educativo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Approccio personalizzato",
                description: "Ogni studente ha esigenze uniche. I nostri programmi si adattano al tuo livello e ai tuoi obiettivi specifici."
              },
              {
                title: "Docenti qualificati",
                description: "Insegnanti esperti e specializzati nelle rispettive materie, pronti a supportarti in ogni fase del percorso."
              },
              {
                title: "Orari flessibili",
                description: "Organizziamo le lezioni in base alle tue disponibilità, per conciliare studio, lavoro e impegni personali."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hai bisogno di supporto specifico?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contattaci per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi educativi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contatti')}>
                <Button size="lg" className="bg-[#d4a853] hover:bg-[#c49743] text-slate-900 px-10 py-6 text-lg rounded-xl font-semibold">
                  Richiedi informazioni
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Servizi')}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl">
                  Vedi i corsi di diploma
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}