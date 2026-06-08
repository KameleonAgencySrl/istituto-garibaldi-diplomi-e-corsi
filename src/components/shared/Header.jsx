'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Corsi', href: '/servizi' },
  { name: 'Servizi Aggiuntivi', href: '/servizi-aggiuntivi' },
  { name: 'Realizzazioni', href: '/realizzazioni' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Lavora con Noi', href: '/lavora-con-noi' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_698f5cc1774892bec8590553/8c37c8bf7_logook2_istituto-tecnico-garibaldi.png" alt="Istituto Garibaldi" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <p className="font-semibold text-slate-900 text-sm leading-tight">Istituto Tecnico</p>
              <p className="text-xs text-slate-500">G. Garibaldi</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-[#1e3a5f] bg-blue-50' : 'text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50'}`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.facebook.com/IstitutoTecnicoGaribaldi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-[#1877F2] hover:bg-slate-100 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/istitutotecnicog.garibaldi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-[#E1306C] hover:bg-slate-100 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <Link href="/contatti">
              <Button className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white rounded-xl px-6">Richiedi info</Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'text-[#1e3a5f] bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/contatti">
                  <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white rounded-xl py-6">Richiedi informazioni</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
