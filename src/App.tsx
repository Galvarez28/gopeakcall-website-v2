import { Analytics } from "@vercel/analytics/react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import { ProblemStatement } from './components/ProblemStatement';
import { Mission } from './components/Mission';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Visibility } from './components/Visibility';
import { Stats } from './components/Stats';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Stats />
        <ProblemStatement />
        <Mission />
        <Features />
        <HowItWorks />
        <Visibility />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
