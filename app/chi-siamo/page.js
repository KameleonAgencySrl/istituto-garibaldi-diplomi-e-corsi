'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award, Shield, Heart, BookOpen, MapPin } from 'lucide-react';

export default function ChiSiamoPage() {
  return (
    <main>
      <section className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Chi siamo</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">Una grande famiglia al servizio del singolo</h1>
              <p className="text-xl text-slate-600 mb-6">Nato a Busto Arsizio nel 1988, l&apos;Istituto Tecnico Italiano &quot;G. Garibaldi&quot; accompagna da oltre 35 anni migliaia di diplomandi italiani.</p>
              <p className="text-lg text-slate-600">L&apos;Istituto fornisce un valido supporto al fine di ottenere un&apos;ottima preparazione culturale e professionale, in particolare modo a coloro che hanno difficolt&agrave; nell&apos;inserimento in un contesto di gruppo.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3a5f]/20 to-[#d4a853]/20 rounded-3xl blur-2xl" />
              <img src="https://media.base44.com/images/public/699f00212cf867d30a26b76b/aa12a5b55_WhatsAppImage2026-03-18at83946PM.jpg" alt="Istituto Garibaldi" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">La nostra missione</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">Perch&eacute; esistiamo</h2>
                <p className="text-lg text-slate-600 mb-4">Il nostro Istituto ha come obiettivo fondamentale il successo formativo di ogni studente. Crediamo in una scuola che riconosce e valorizza il potenziale e le caratteristiche di ciascuno, adattandosi ai diversi stili di apprendimento attraverso un&apos;organizzazione didattica innovativa ed efficace.</p>
                <p className="text-lg text-slate-600 mb-8">Offriamo un ambiente educativo inclusivo, basato sull&apos;ascolto, sulla flessibilit&agrave; e sulla personalizzazione dei percorsi, per accompagnare ogni studente nel proprio percorso di crescita, sia personale che culturale.</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Classi a numero ridotto", description: "Per favorire un'attenzione reale e costante verso ogni studente" },
                  { icon: Users, title: "Docenti qualificati", description: "Preparati e sempre disponibili al dialogo con studenti e famiglie" },
                  { icon: BookOpen, title: "Percorsi personalizzati", description: "Percorsi didattici costruiti sulle esigenze individuali" },
                  { icon: Heart, title: "Ambiente sereno", description: "Clima scolastico positivo, che favorisce l'apprendimento e il benessere" }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-3xl p-8 lg:p-10 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/8c37c8bf7_logook2_istituto-tecnico-garibaldi.png" alt="Logo" className="h-16 w-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">I nostri valori</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[#d4a853] rounded-full mt-2" /><span>Centralit&agrave; dello studente e attenzione alla sua crescita personale e culturale</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[#d4a853] rounded-full mt-2" /><span>Collaborazione costante tra docenti, studenti e famiglie</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[#d4a853] rounded-full mt-2" /><span>Inclusivit&agrave; e valorizzazione delle diversit&agrave; individuali</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-[#d4a853] rounded-full mt-2" /><span>Flessibilit&agrave; e personalizzazione dei percorsi didattici</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">La nostra storia</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">35 anni di esperienza</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Dal 1988 ad oggi, un percorso di crescita costante al servizio dell&apos;istruzione.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "1988", title: "Fondazione a Busto Arsizio", description: "Nasce l'Istituto Tecnico Italiano 'G. Garibaldi' con l'obiettivo di offrire percorsi formativi personalizzati." },
              { year: "2000s", title: "Espansione territoriale", description: "Apertura delle sedi di Legnano, Novara e Borgomanero per servire un territorio più ampio." },
              { year: "Oggi", title: "Leader nella formazione", description: "Oltre 1000 diplomati e un'offerta formativa completa con 12+ indirizzi di studio." }
            ].map((event, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">{event.year}</div>
                  {i < 2 && <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300" />}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Dove siamo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">4 sedi per servirti meglio</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Busto Arsizio", province: "VA", address: "Via Ponchielli, 28", phone: "0331 679116" },
              { city: "Legnano", province: "MI", address: "Via Imperia, 21", phone: "0331 451210" },
              { city: "Novara", province: "NO", address: "Via Dell'Archivio, 9", phone: "0321 331820" },
              { city: "Borgomanero", province: "NO", address: "Via Maggiate, 69B", phone: "0322 211094" }
            ].map((loc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center mb-4"><MapPin className="w-6 h-6 text-[#1e3a5f]" /></div>
                <h3 className="font-semibold text-slate-900 mb-1">{loc.city}</h3>
                <p className="text-sm text-slate-500 mb-3">({loc.province})</p>
                <p className="text-sm text-slate-600 mb-2">{loc.address}</p>
                <a href={`tel:+39${loc.phone.replace(/\s/g, '')}`} className="text-sm text-[#1e3a5f] font-medium hover:underline">{loc.phone}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Garanzie</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">Riconoscimenti e certificazioni</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Diploma MIUR", description: "Tutti i nostri diplomi sono riconosciuti dal Ministero dell'Istruzione e validi in Italia e UE." },
              { icon: Award, title: "35+ anni di attività", description: "Esperienza consolidata nella formazione di migliaia di studenti diplomati." },
              { icon: Users, title: "Istituti paritari convenzionati", description: "Collaboriamo con scuole paritarie riconosciute per lo svolgimento degli esami di idoneità." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-slate-50 rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#1e3a5f] flex items-center justify-center mx-auto mb-6"><item.icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Vuoi conoscerci meglio?</h2>
          <p className="text-xl text-blue-100 mb-8">Vieni a trovarci in una delle nostre sedi per un colloquio conoscitivo gratuito.</p>
          <Link href="/contatti">
            <Button size="lg" className="bg-[#d4a853] hover:bg-[#c49743] text-slate-900 px-10 py-6 text-lg rounded-xl font-semibold">Contattaci ora<ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
