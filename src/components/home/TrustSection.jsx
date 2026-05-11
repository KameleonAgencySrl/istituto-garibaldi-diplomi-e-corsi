import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck } from 'lucide-react';
import BorgomaneroReviews from '@/components/shared/BorgomaneroReviews';

function SociableKitReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="sk-ww-google-reviews" data-embed-id="25680695"></div>;
}

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                  <h3 className="font-semibold text-slate-900 mb-1">Esami di stato con Esami di idoneità</h3>
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

      {/* Google Reviews Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-100 p-6"
        >
          <p className="text-sm font-medium text-slate-500 mb-4 text-center uppercase tracking-wider">Recensioni Google</p>
          <SociableKitReviews />
        </motion.div>
      </div>
    </section>
  );
}