'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Briefcase, GraduationCap, Users } from 'lucide-react';
import { toast } from 'sonner';

export default function LavoraConNoiPage() {
  const [tipo, setTipo] = useState('Impiegato/a');
  const [formData, setFormData] = useState({ cognomeNome: '', email: '', telefono: '', residenza: '', titoloDiStudio: '', esperienze: '', messaggio: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Candidatura inviata con successo! Ti contatteremo presto.');
  };

  return (
    <main>
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80" alt="Lavora con noi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/85 via-[#1e3a5f]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg">
            <div className="inline-block bg-[#1e3a5f] border border-white/20 rounded-xl px-6 py-5 mb-6">
              <p className="text-white/70 text-sm font-medium mb-1">Istituto Tecnico Garibaldi</p>
              <h1 className="text-2xl font-bold text-white tracking-wide uppercase">Lavora con Noi</h1>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">Entra a far parte del nostro team. Cerchiamo persone appassionate di istruzione e formazione per le nostre sedi nel Nord Italia.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Perch&eacute; sceglierci</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Un ambiente di lavoro stimolante</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Formazione continua", desc: "Investiamo nella crescita professionale del nostro staff con aggiornamenti e corsi." },
              { icon: Users, title: "Team affiatato", desc: "Un ambiente collaborativo dove ogni persona è valorizzata e ascoltata." },
              { icon: Briefcase, title: "Stabilità lavorativa", desc: "35+ anni di attività nel settore dell'istruzione privata con prospettive concrete." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center mx-auto mb-4"><item.icon className="w-7 h-7 text-[#1e3a5f]" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Invia la tua candidatura</h2>
            <p className="text-slate-600">Compila il modulo sottostante e ti contatteremo per un colloquio.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-8 h-8 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Candidatura inviata!</h3>
              <p className="text-slate-600 mb-6">Grazie per il tuo interesse. Valuteremo il tuo profilo e ti contatteremo al più presto.</p>
              <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ cognomeNome: '', email: '', telefono: '', residenza: '', titoloDiStudio: '', esperienze: '', messaggio: '' }); setTipo('Impiegato/a'); }}>Invia un&apos;altra candidatura</Button>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3">Le figure professionali che cerchiamo sono: <span className="text-red-500">*</span></p>
                  <div className="flex gap-6">
                    {['Impiegato/a', 'Personale qualificato nel settore'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tipo" value={opt} checked={tipo === opt} onChange={() => setTipo(opt)} className="accent-[#1e3a5f]" />
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2"><Label htmlFor="cognomeNome">Cognome e Nome <span className="text-red-500">*</span></Label><Input id="cognomeNome" name="cognomeNome" value={formData.cognomeNome} onChange={handleChange} placeholder="Rossi Mario" required className="bg-white" /></div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2"><Label htmlFor="email">Email <span className="text-red-500">*</span></Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="mario.rossi@email.com" required className="bg-white" /></div>
                  <div className="space-y-2"><Label htmlFor="telefono">Telefono <span className="text-red-500">*</span></Label><Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} placeholder="+39 333 1234567" required className="bg-white" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="residenza">Residenza</Label><Input id="residenza" name="residenza" value={formData.residenza} onChange={handleChange} placeholder="Città, Provincia" className="bg-white" /></div>
                <div className="space-y-2"><Label htmlFor="titoloDiStudio">Titolo di Studio <span className="text-red-500">*</span></Label><Input id="titoloDiStudio" name="titoloDiStudio" value={formData.titoloDiStudio} onChange={handleChange} placeholder="Es. Laurea in Scienze dell'Educazione" required className="bg-white" /></div>
                <div className="space-y-2"><Label htmlFor="esperienze">Esperienze lavorative precedenti</Label><Textarea id="esperienze" name="esperienze" value={formData.esperienze} onChange={handleChange} placeholder="Descrivi brevemente le tue esperienze lavorative..." rows={3} className="bg-white" /></div>
                <div className="space-y-2"><Label htmlFor="messaggio">Lettera di presentazione / Motivazione</Label><Textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} placeholder="Raccontaci perché vuoi lavorare con noi..." rows={4} className="bg-white" /></div>
                <div className="space-y-2">
                  <Label htmlFor="cv">Allega il tuo CV (PDF)</Label>
                  <input id="cv" type="file" accept=".pdf,.doc,.docx" className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#1e3a5f]/10 file:text-[#1e3a5f] hover:file:bg-[#1e3a5f]/20 cursor-pointer" />
                </div>
                <div className="flex items-start gap-3"><input type="checkbox" required className="mt-1" id="privacy" /><label htmlFor="privacy" className="text-sm text-slate-600">Acconsento al trattamento dei dati personali secondo la <a href="#" className="text-[#1e3a5f] underline">Privacy Policy</a>. <span className="text-red-500">*</span></label></div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white py-6 rounded-xl text-lg">
                  {isSubmitting ? 'Invio in corso...' : (<>Invia candidatura<Send className="ml-2 w-5 h-5" /></>)}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
