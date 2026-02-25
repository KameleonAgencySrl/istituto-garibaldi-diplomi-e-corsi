import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1e3a5f] via-[#234b75] to-[#1e3a5f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Inizia il tuo percorso verso il diploma
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Richiedi informazioni senza impegno. Ti contatteremo entro 24 ore per un colloquio conoscitivo gratuito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={createPageUrl('Contatti')}>
              <Button size="lg" className="bg-[#d4a853] hover:bg-[#c49743] text-slate-900 px-10 py-7 text-lg rounded-xl shadow-xl w-full sm:w-auto font-semibold">
                Richiedi informazioni
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
            <a href="tel:+390331679116" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              0331 679116
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="mailto:info@istitutogaribaldi.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              info@istitutogaribaldi.com
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            Rispettiamo la tua privacy. I dati saranno trattati secondo la normativa vigente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}