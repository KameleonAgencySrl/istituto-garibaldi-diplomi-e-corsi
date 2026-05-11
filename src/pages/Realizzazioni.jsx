import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Quote, MapPin, Calendar } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Margherita Bonizzoni",
    course: "Studente",
    year: "8 anni fa",
    location: "Busto Arsizio",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/bb385eb8e_diploma_istituto-tecnico-garibaldi.jpg",
    quote: "Insegnanti preparati, competenti e disponibili a valorizzare le inclinazioni personali di ogni studente. Un ambiente familiare, accogliente e sempre pronto all'ascolto ❤️",
    outcome: "Recensione Google - Valutazione 5 stelle",
    category: "liceo"
  },
  {
    id: 2,
    name: "Nicol Zaza",
    course: "Studente attuale",
    year: "2 mesi fa",
    location: "Busto Arsizio",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    quote: "frequento l'istituto giuseppe garibaldi e mi trovo molto bene con gli insegnati e il personale scolastico ve la consiglio!!!",
    outcome: "Recensione Google - Valutazione 5 stelle",
    category: "tecnico"
  },
  {
    id: 3,
    name: "Andresa Macchi",
    course: "Studente",
    year: "2 mesi fa",
    location: "Busto Arsizio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    quote: "scuola favolosa, personale e docenti professionali e simpatici. consiglio vivamente!",
    outcome: "Recensione Google - Valutazione 5 stelle",
    category: "liceo"
  },
  {
    id: 4,
    name: "Nicola Boscolo",
    course: "Studente",
    year: "2 mesi fa",
    location: "Busto Arsizio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    quote: "I recommend it to you.....I'm very happy with it 💯 🔥",
    outcome: "Recensione Google - Valutazione 5 stelle",
    category: "tecnico"
  }
];

const categories = [
  { id: "all", label: "Tutti" },
  { id: "liceo", label: "Licei" },
  { id: "tecnico", label: "Istituti Tecnici" },
  { id: "professionale", label: "Istituti Professionali" },
  { id: "base", label: "Licenza Media" }
];

export default function Realizzazioni() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStories = activeCategory === "all"
    ? stories
    : stories.filter(s => s.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">I nostri successi</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Storie di chi ha raggiunto il diploma
            </h1>
            <p className="text-xl text-slate-600">
              Da oltre 35 anni accompagniamo studenti di ogni età verso il conseguimento del diploma. Ecco alcune delle loro storie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "35+", label: "Anni di attività" },
              { value: "1000+", label: "Diplomati" },
              { value: "4", label: "Sedi operative" },
              { value: "10", label: "Indirizzi di studio" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#d4a853]">{stat.value}</p>
                <p className="text-blue-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={stories[0].image}
                    alt={stories[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#1e3a5f] text-white text-xs font-medium rounded-full">
                      In evidenza
                    </span>
                    <span className="text-sm text-slate-500">{stories[0].course}</span>
                  </div>
                  
                  <Quote className="w-10 h-10 text-[#d4a853] mb-4" />
                  
                  <blockquote className="text-xl lg:text-2xl text-slate-700 font-light italic mb-6">
                    "{stories[0].quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{stories[0].name}</p>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {stories[0].location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {stories[0].year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-500 mb-1">Risultato:</p>
                    <p className="text-slate-700 font-medium">{stories[0].outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.slice(1).map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-[#1e3a5f] uppercase tracking-wider">
                    {story.course}
                  </span>
                  
                  <blockquote className="text-slate-600 mt-3 mb-4 line-clamp-3 italic">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{story.name}</p>
                      <p className="text-xs text-slate-500">{story.location} • {story.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Scrivi anche tu la tua storia di successo
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Inizia oggi il tuo percorso verso il diploma. Contattaci per un colloquio conoscitivo gratuito.
          </p>
          <Link to={createPageUrl('Contatti')}>
            <Button size="lg" className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-10 py-6 text-lg rounded-xl">
              Richiedi informazioni
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}