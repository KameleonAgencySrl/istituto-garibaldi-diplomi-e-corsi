import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const idealFor = [
  "Lavoratori che vogliono completare gli studi",
  "Adulti che desiderano riprendere la formazione",
  "Studenti con esigenze di orari flessibili",
  "Chi ha bisogno di supporto personalizzato (DSA/BES)",
  "Stranieri che vogliono conseguire un diploma italiano",
  "Chi vuole recuperare anni scolastici"
];

const notFor = [
  "Chi cerca solo un pezzo di carta senza impegno",
  "Chi non è disposto a frequentare le lezioni",
  "Chi non ha obiettivi chiari per il proprio futuro"
];

export default function QualificationSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Prima di contattarci</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Siamo la scelta giusta per te?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I nostri corsi richiedono impegno e costanza. Verifica se il nostro approccio è adatto alle tue esigenze.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-3xl p-8 border border-emerald-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ideale per</h3>
            </div>
            
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl p-8 border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Non adatto a</h3>
            </div>
            
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl">
              <p className="text-sm text-slate-400">
                Se hai dubbi, contattaci per un colloquio conoscitivo gratuito. Ti aiuteremo a capire se siamo la scelta giusta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}