'use client';
import Link from 'next/link';
import { ArrowRight, Award, Users, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Il tuo diploma,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f]">
                il tuo futuro
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Da oltre 35 anni accompagniamo studenti di ogni età verso il conseguimento del diploma con corsi diurni, serali e personalizzati in 4 sedi nel Nord Italia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contatti">
                <Button size="lg" className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/20 w-full sm:w-auto">
                  Richiedi informazioni
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/servizi">
                <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-[#1e3a5f] hover:bg-slate-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                  Scopri i corsi
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#d4a853] mb-1">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-900">35+</p>
                <p className="text-sm text-slate-500">Anni di esperienza</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#d4a853] mb-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-900">4</p>
                <p className="text-sm text-slate-500">Sedi in Nord Italia</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#d4a853] mb-1">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-900">10</p>
                <p className="text-sm text-slate-500">Indirizzi diploma</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#d4a853] mb-1">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-slate-900">1000+</p>
                <p className="text-sm text-slate-500">Diplomati</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3a5f]/20 to-[#d4a853]/20 rounded-3xl blur-2xl" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/bb385eb8e_diploma_istituto-tecnico-garibaldi.jpg"
                alt="Studenti laureati"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Diploma riconosciuto</p>
                    <p className="text-sm text-slate-500">Valido in Italia e UE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}