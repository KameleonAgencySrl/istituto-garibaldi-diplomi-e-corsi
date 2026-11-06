'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Briefcase, GraduationCap, Users, MapPin, Clock, FileText } from 'lucide-react';

const POSIZIONE_SPAGNOLO = 'Insegnante di Spagnolo – Borgomanero';
import { toast } from 'sonner';

export default function LavoraConNoiPage() {
  const [tipo, setTipo] = useState('Impiegato/a');
  const [formData, setFormData] = useState({ cognomeNome: '', email: '', telefono: '', residenza: '', titoloDiStudio: '', esperienze: '', messaggio: '' });
  const [cv, setCv] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append('tipo', tipo);
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      if (cv) body.append('cv', cv);

      const res = await fetch('/api/lavora-con-noi', { method: 'POST', body });
      if (!res.ok) throw new Error();
      setIsSubmitted(true);
      toast.success('Candidatura inviata con successo! Ti contatteremo presto.');
    } catch {
      toast.error('Si è verificato un errore. Riprova o chiamaci direttamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Istituto Tecnico Garibaldi</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">Lavora con noi</h1>
            <p className="text-xl text-slate-600 mb-8">Entra a far parte del nostro team. Cerchiamo persone appassionate di istruzione e formazione per le nostre sedi nel Nord Italia.</p>
            <a href="#posizioni" className="inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2d4a6f] transition-colors">
              <Briefcase className="w-4 h-4" /> Vedi le posizioni aperte
            </a>
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

      <section id="posizioni" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Posizioni aperte</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Stiamo cercando</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Insegnante di Spagnolo – Sede di Borgomanero</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 mb-4">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#1e3a5f]" />Via Maggiate 69B, Borgomanero (NO)</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#1e3a5f]" />Martedì e venerdì, 10:40–13:40</span>
              <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-[#1e3a5f]" />Tempo determinato</span>
            </div>
            <p className="text-slate-600 mb-3">Lezioni di lingua spagnola in presenza per gli studenti dei nostri corsi di diploma, in classi ridotte e con attenzione al singolo studente.</p>
            <p className="text-slate-600 mb-6"><span className="font-semibold text-slate-900">Requisiti:</span> laurea in lingue oppure madrelingua spagnolo con esperienza di insegnamento, buona conoscenza dell&apos;italiano.</p>
            <Button asChild className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white rounded-xl">
              <a href="#candidatura" onClick={() => setTipo(POSIZIONE_SPAGNOLO)}>Candidati ora</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="candidatura" className="py-20 bg-white">
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
              <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ cognomeNome: '', email: '', telefono: '', residenza: '', titoloDiStudio: '', esperienze: '', messaggio: '' }); setTipo('Impiegato/a'); setCv(null); }}>Invia un&apos;altra candidatura</Button>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3">Le figure professionali che cerchiamo sono: <span className="text-red-500">*</span></p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {[POSIZIONE_SPAGNOLO, 'Impiegato/a', 'Personale qualificato nel settore'].map((opt) => (
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
                  <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCv(e.target.files?.[0] ?? null)} className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#1e3a5f]/10 file:text-[#1e3a5f] hover:file:bg-[#1e3a5f]/20 cursor-pointer" />
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
