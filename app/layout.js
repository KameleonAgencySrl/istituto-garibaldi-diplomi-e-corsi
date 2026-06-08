import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'Istituto Tecnico Italiano G. Garibaldi — Corsi per Diploma',
  description: 'Da oltre 35 anni, una grande famiglia al servizio del singolo. Corsi per il conseguimento del diploma con formazione personalizzata e flessibile a Busto Arsizio, Legnano, Novara e Borgomanero.',
  keywords: ['istituto garibaldi', 'diploma', 'scuola privata', 'corsi serali', 'Busto Arsizio', 'Legnano', 'Novara', 'Borgomanero'],
  openGraph: {
    title: 'Istituto Tecnico Italiano G. Garibaldi',
    description: 'Corsi per il conseguimento del diploma con formazione personalizzata e flessibile.',
    url: 'https://istitutogaribaldi.com',
    siteName: 'Istituto Garibaldi',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18109544254"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18109544254');
            `,
          }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <div className="flex-1 pt-20">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
