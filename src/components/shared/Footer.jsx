import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const locations = [
  {
    city: "Busto Arsizio (VA)",
    address: "Via Ponchielli, 28",
    phone: "0331 679116",
    email: "bustoarsizio@istitutogaribaldi.com"
  },
  {
    city: "Legnano (MI)",
    address: "Via Imperia, 21",
    phone: "0331 451210",
    email: "legnano@istitutogaribaldi.com"
  },
  {
    city: "Novara (NO)",
    address: "Via Dell'Archivio, 9",
    phone: "0321 331820",
    email: "novara@istitutogaribaldi.com"
  },
  {
    city: "Borgomanero (NO)",
    address: "Via Maggiate, 69B",
    phone: "0322 211094",
    email: "borgomanero@istitutogaribaldi.com"
  }
];

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Corsi per Diploma', page: 'Servizi' },
  { name: 'Servizi Aggiuntivi', page: 'ServiziAggiuntivi' },
  { name: 'Realizzazioni', page: 'Realizzazioni' },
  { name: 'Chi Siamo', page: 'ChiSiamo' },
  { name: 'Contatti', page: 'Contatti' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/8c37c8bf7_logook2_istituto-tecnico-garibaldi.png"
                alt="Istituto Garibaldi"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Da oltre 35 anni, una grande famiglia al servizio del singolo. Corsi per il conseguimento del diploma con formazione personalizzata e flessibile.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Clock className="w-4 h-4" />
              <span>Lun-Ven: 8:30-12:10 / 19:10-22:40</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/IstitutoTecnicoGaribaldi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/istitutotecnicog.garibaldi/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#E1306C] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={createPageUrl(link.page)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">Le nostre sedi</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((loc, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-white mb-1">{loc.city}</p>
                  <div className="text-slate-400 space-y-1">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      {loc.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      <a href={`tel:+39${loc.phone.replace(/\s/g, '')}`} className="hover:text-white">
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Istituto Tecnico Italiano "G. Garibaldi" S.r.l. — Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="mailto:info@pec.istitutogaribaldi.com" className="text-slate-500 hover:text-white transition-colors">
              PEC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}