import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Shield, Award, FileCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Margherita Bonizzoni</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-slate-500">8 anni fa</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Insegnanti preparati, competenti e disponibili a valorizzare le inclinazioni personali di ogni studente. Un ambiente familiare, accogliente e sempre pronto all'ascolto ❤️
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Nicol Zaza</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-slate-500">2 mesi fa</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                frequento l'istituto giuseppe garibaldi e mi trovo molto bene con gli insegnati e il personale scolastico ve la consiglio!!!
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Andresa Macchi</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-slate-500">2 mesi fa</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                scuola favolosa, personale e docenti professionali e simpatici. consiglio vivamente!
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Nicola Boscolo</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-slate-500">2 mesi fa</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                I recommend it to you.....I'm very happy with it 💯 🔥
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Garanzie e riconoscimenti</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-8">
              Affidabilità certificata
            </h2>

            <div className="space-y-5">
              <div className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Diploma riconosciuto MIUR</h3>
                  <p className="text-slate-600 text-sm">Titoli di studio validi legalmente in Italia e nell'Unione Europea per lavoro e università.</p>
                </div>
              </div>

              <div className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">35+ anni di attività</h3>
                  <p className="text-slate-600 text-sm">Dal 1988 abbiamo accompagnato migliaia di studenti verso il conseguimento del diploma.</p>
                </div>
              </div>

              <div className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Esami presso istituti paritari</h3>
                  <p className="text-slate-600 text-sm">Collaboriamo con scuole paritarie convenzionate per lo svolgimento degli esami di stato.</p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/8c37c8bf7_logook2_istituto-tecnico-garibaldi.png"
                  alt="Logo Istituto Garibaldi"
                  className="h-16 w-auto"
                />
                <div>
                  <p className="font-semibold text-slate-900">Istituto Tecnico Italiano</p>
                  <p className="text-sm text-slate-500">"G. Garibaldi" S.r.l.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}