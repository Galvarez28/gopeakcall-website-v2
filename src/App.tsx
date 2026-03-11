import { useState, useEffect } from 'react';
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
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide banner after 800px of scrolling (roughly past the Hero + Stats)
      setShowBanner(window.scrollY < 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <div className="noise-overlay"></div>
      <Navbar />
      <div className={`fixed top-16 left-0 right-0 z-40 bg-blue-600 border-b border-blue-500 shadow-lg text-center py-2 px-4 flex items-center justify-center transition-all duration-500 ease-in-out ${showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[15px] pointer-events-none'
        }`}>
        <p className="text-[13px] sm:text-[14px] font-medium text-white tracking-wide">
          Start Your <span className="font-bold">14-Day Free Trial</span> — <span className="font-normal text-blue-50">150 Minutes Included. No Setup Fee. Cancel Anytime.</span>
        </p>
      </div>
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
    </div>
  );
}
