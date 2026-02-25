import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Users, Target } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Lavori e non hai tempo per frequentare?",
    description: "I corsi tradizionali sono incompatibili con gli impegni lavorativi e familiari, rendendo difficile completare gli studi."
  },
  {
    icon: Users,
    title: "La scuola tradizionale non fa per te?",
    description: "Classi numerose e metodi standardizzati non rispondono alle esigenze individuali di apprendimento."
  },
  {
    icon: Target,
    title: "Vuoi recuperare anni scolastici?",
    description: "Hai interrotto gli studi e desideri riprendere senza perdere altro tempo prezioso."
  },
  {
    icon: AlertCircle,
    title: "Hai bisogno di supporto per DSA/BES?",
    description: "Necessiti di un ambiente che comprenda e supporti le tue specifiche esigenze di apprendimento."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Comprendiamo le tue difficoltà</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Perché molti non completano gli studi
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ogni anno migliaia di persone abbandonano il percorso scolastico per motivi pratici, non per mancanza di volontà.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                    <problem.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}