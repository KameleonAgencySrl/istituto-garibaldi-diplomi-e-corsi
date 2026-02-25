import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const locations = [
  {
    city: "Busto Arsizio",
    province: "VA",
    address: "Via Ponchielli, 28",
    phone: "0331 679116",
    email: "bustoarsizio@istitutogaribaldi.com"
  },
  {
    city: "Legnano",
    province: "MI",
    address: "Via Imperia, 21",
    phone: "0331 451210",
    email: "legnano@istitutogaribaldi.com"
  },
  {
    city: "Novara",
    province: "NO",
    address: "Via Dell'Archivio, 9",
    phone: "0321 331820",
    email: "novara@istitutogaribaldi.com"
  },
  {
    city: "Borgomanero",
    province: "NO",
    address: "Via Maggiate, 686",
    phone: "0322 211094",
    email: "borgomanero@istitutogaribaldi.com"
  }
];

const courses = [
  "Licenza Media",
  "Liceo Linguistico",
  "Liceo Scientifico",
  "Liceo Scienze Umane",
  "Liceo Scienze Umane Economico-Sociale",
  "Meccanica, Meccatronica ed Energia",
  "Costruzioni, Ambiente e Territorio",
  "Informatica e Telecomunicazioni",
  "Amministrazione, Finanza e Marketing",
  "Servizi per la Sanità e l'Assistenza Sociale",
  "Altro / Non so ancora"
];

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    sede: '',
    corso: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Richiesta inviata con successo! Ti contatteremo presto.');
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#d4a853] font-medium text-sm tracking-wider uppercase">Contattaci</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Inizia il tuo percorso verso il diploma
            </h1>
            <p className="text-xl text-slate-600">
              Compila il modulo per richiedere informazioni. Ti contatteremo entro 24 ore per un colloquio conoscitivo gratuito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white">Cosa succede dopo l'invio?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Riceviamo la richiesta",
                description: "Il nostro staff riceve e valuta la tua richiesta di informazioni."
              },
              {
                step: "2",
                title: "Ti contattiamo",
                description: "Entro 24 ore ti richiameremo per fissare un appuntamento."
              },
              {
                step: "3",
                title: "Colloquio gratuito",
                description: "Incontro conoscitivo per definire il percorso più adatto a te."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4a853] flex items-center justify-center text-slate-900 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Richiesta inviata con successo!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Grazie per averci contattato. Ti richiameremo entro 24 ore lavorative per fissare un appuntamento.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nome: '',
                        azienda: '',
                        email: '',
                        telefono: '',
                        sede: '',
                        corso: '',
                        messaggio: ''
                      });
                    }}
                  >
                    Invia un'altra richiesta
                  </Button>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#1e3a5f]" />
                    <h2 className="text-2xl font-bold text-slate-900">Richiedi informazioni</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome e Cognome *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Mario Rossi"
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="azienda">Azienda / Scuola di provenienza</Label>
                        <Input
                          id="azienda"
                          name="azienda"
                          value={formData.azienda}
                          onChange={handleChange}
                          placeholder="Nome azienda (opzionale)"
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="mario.rossi@email.com"
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Telefono *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+39 333 1234567"
                          required
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Sede preferita</Label>
                        <Select onValueChange={(value) => handleSelectChange('sede', value)}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Seleziona una sede" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((loc) => (
                              <SelectItem key={loc.city} value={loc.city}>
                                {loc.city} ({loc.province})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Corso di interesse</Label>
                        <Select onValueChange={(value) => handleSelectChange('corso', value)}>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Seleziona un corso" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="messaggio">Descrivi la tua richiesta</Label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        placeholder="Raccontaci la tua situazione e le tue esigenze..."
                        rows={4}
                        className="bg-white"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        required 
                        className="mt-1"
                        id="privacy"
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-600">
                        Acconsento al trattamento dei dati personali secondo la <a href="#" className="text-[#1e3a5f] underline">Privacy Policy</a>. *
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white py-6 rounded-xl text-lg"
                    >
                      {isSubmitting ? (
                        <>Invio in corso...</>
                      ) : (
                        <>
                          Invia richiesta
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contatti diretti</h3>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:info@istitutogaribaldi.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email principale</p>
                    <p className="font-medium text-slate-900">info@istitutogaribaldi.com</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@pec.istitutogaribaldi.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">PEC</p>
                    <p className="font-medium text-slate-900">info@pec.istitutogaribaldi.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Orari segreteria</p>
                    <p className="font-medium text-slate-900">Lun-Ven: 9:00-12:00 / 15:00-19:00</p>
                    <p className="text-sm text-slate-600">Sabato su appuntamento</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Le nostre sedi</h3>
              
              <div className="space-y-3">
                {locations.map((loc, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900">{loc.city} ({loc.province})</p>
                        <p className="text-sm text-slate-600">{loc.address}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <a 
                            href={`tel:+39${loc.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-1 text-sm text-[#1e3a5f] hover:underline"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            {loc.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">Mappa interattiva delle sedi</p>
            <p className="text-sm text-slate-500">CONTENT REQUIRED FROM CLIENT: Coordinate esatte per integrazione mappa</p>
          </div>
        </div>
      </section>
    </main>
  );
}