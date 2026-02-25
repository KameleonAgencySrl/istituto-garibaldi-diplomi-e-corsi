import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import TrustSection from '@/components/home/TrustSection';
import QualificationSection from '@/components/home/QualificationSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesOverview />
      <ProcessSection />
      <TrustSection />
      <QualificationSection />
      <CTASection />
    </main>
  );
}