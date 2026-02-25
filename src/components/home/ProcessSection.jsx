import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Colloquio conoscitivo",
    description: "Analizziamo insieme la tua situazione, obiettivi e disponibilità per identificare il percorso più adatto."
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Iscrizione e piano di studi",
    description: "Formalizziamo l'iscrizione e definiamo un piano personalizzato in base ai tuoi orari e necessità."
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Frequenza e supporto",
    description: "Segui le lezioni in classe con docenti qualificati e ricevi supporto individuale quando necessario."
  },
  {
    icon: Award,
    number: "04",
    title: "Esame e diploma",
    description: "Sostieni l'esame di stato presso istituti paritari convenzionati e ottieni il diploma riconosciuto."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Come funziona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Il tuo percorso verso il diploma
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un processo chiaro e strutturato per accompagnarti dal primo contatto fino al conseguimento del titolo.
          </p>
        </motion.div>

        {/* Desktop Process */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] via-[#d4a853] to-[#1e3a5f] opacity-20" />
          
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center shadow-xl mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Connector Dot */}
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4a853] border-4 border-white shadow-md -translate-y-1/2" />
                
                <div className="text-center pt-8">
                  <span className="text-5xl font-bold text-slate-100">{step.number}</span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1e3a5f] to-transparent" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-sm font-bold text-[#d4a853]">FASE {step.number}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}