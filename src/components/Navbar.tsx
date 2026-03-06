import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-16 flex items-center ${scrolled ? 'bg-[#0a0e1a]/70 backdrop-blur-[20px] border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo_transparent.png" alt="GoPeakCall Logo" className="h-14 object-contain" />
          <span className="font-bold text-[28px] tracking-tight ml-2 text-[#73c2fb]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>GoPeakCall</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['How It Works', 'Features', 'Pricing', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-white/80 hover:text-white relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-150 ease-out"></span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="h-10 px-5 flex items-center justify-center rounded-lg bg-blue-500 text-sm font-semibold hover:-translate-y-[1px] hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] transition-all duration-180">
          Book a meeting
        </a>
      </div>
    </header>
  );
}
