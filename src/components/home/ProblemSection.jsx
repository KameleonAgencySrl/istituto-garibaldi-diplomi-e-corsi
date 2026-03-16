import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f7f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-normal text-slate-900 leading-tight">
            Studiare di nuovo,
            <br />
            alle tue condizioni.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <div className="border-l-4 border-slate-900 pl-4 mb-6">
              <h4 className="text-base font-normal text-slate-900">
                I tuoi orari, non i nostri.
              </h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Che tu lavori di giorno o abbia impegni familiari, i nostri corsi si adattano alla tua vita. Offriamo lezioni mattutine, pomeridiane e serali, oltre alla possibilità di costruire un percorso personalizzato insieme ai nostri tutor. Non sei tu a doverti adattare alla scuola — siamo noi ad adattarci a te.
            </p>
            <p className="text-sm text-slate-900">
              Vedi gli orari e le sedi →
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <div className="border-l-4 border-slate-900 pl-4 mb-6">
              <h4 className="text-base font-normal text-slate-900">
                Un insegnante che conosce il tuo nome.
              </h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Classi piccole, attenzione individuale, e docenti che seguono il tuo progresso personale. Non sei un numero in un registro.
            </p>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* 4 Locations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-sm font-semibold text-slate-900 mb-3">4 SEDI</h4>
            <p className="text-sm text-slate-900 mb-2">
              Busto Arsizio · Novara · Legnano · Borgomanero
            </p>
            <p className="text-xs text-slate-600">
              Segreteria disponibile dal Lunedì al Sabato
            </p>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-sm font-normal text-slate-900 mb-3">
              Dal diploma di licenze media al diploma superiore.
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Qualunque sia il punto da cui riparti, abbiamo un percorso pensato per te — dalla terza media ai diplomi tecnici e liceali.
            </p>
            <p className="text-sm text-slate-900">
              Trova il tuo corso →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}