import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Studiare di nuovo,
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            alle tue condizioni.
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200"
          >
            <div className="border-l-4 border-[#1e3a5f] pl-6 mb-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                I tuoi orari, non i nostri.
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Che tu lavori di giorno o abbia impegni familiari, i nostri corsi si adattano alla tua vita. Offriamo lezioni mattutine, pomeridiane e serali, oltre alla possibilità di costruire un percorso personalizzato insieme ai nostri tutor. Non sei tu a doverti adattare alla scuola — siamo noi ad adattarci a te.
              </p>
              <Link to={createPageUrl('Servizi')}>
                <Button variant="link" className="text-[#1e3a5f] p-0 h-auto font-medium hover:no-underline group">
                  Vedi gli orari e le sedi →
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200"
          >
            <div className="border-l-4 border-[#d4a853] pl-6 mb-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                Un insegnante che conosce il tuo nome.
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Classi piccole, attenzione individuale, e docenti che seguono il tuo progresso personale. Non sei un numero in un registro.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* 4 Locations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-3">4 SEDI</h4>
            <p className="text-slate-700 font-medium mb-4">
              Busto Arsizio · Novara · Legnano · Borgomanero
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Segreteria disponibile dal Lunedì al Sabato
            </p>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              Dal diploma di licenze media al diploma superiore.
            </h4>
            <p className="text-slate-600 leading-relaxed mb-4">
              Qualunque sia il punto da cui riparti, abbiamo un percorso pensato per te — dalla terza media ai diplomi tecnici e liceali.
            </p>
            <Link to={createPageUrl('Servizi')}>
              <Button variant="link" className="text-[#1e3a5f] p-0 h-auto font-medium hover:no-underline group">
                Trova il tuo corso →
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}