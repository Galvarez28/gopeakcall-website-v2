import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch('https://n8n.srv1467458.hstgr.cloud/webhook/gopeakcall-website-form', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // With no-cors, the response is opaque and response.ok is always false.
      // If the fetch didn't throw a network error, we assume it successfully reached the server.
      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', businessName: '', businessType: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-[#0f1420] pt-24 pb-12 px-6 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Side: Form */}
        <div>
          <FadeIn className="mb-8">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
              Schedule a Call With Us
            </h2>
          </FadeIn>

          <FadeIn>
            <form className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Business Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Type of Business</label>
                <select name="businessType" value={formData.businessType} onChange={handleChange} className="form-input bg-[#0f1420] text-white" required>
                  <option value="" disabled>Select an option</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Anything else we should know before the call?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.07] border border-white/[0.14] rounded-lg text-white p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none resize-none h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-[56px] flex items-center justify-center rounded-lg bg-blue-500 text-white font-semibold text-[16px] hover:-translate-y-[2px] disabled:opacity-50 disabled:hover:translate-y-0 transition-all duration-180 mt-4"
              >
                {status === 'loading' ? 'Sending...' : 'Submit Request'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-400 mt-4 text-center">Your request has been sent successfully. We will be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 mt-4 text-center">There was an error sending your request. Please try again.</p>
              )}
            </form>
          </FadeIn>
        </div>

        {/* Right Side: Links & Info */}
        <div className="flex flex-col justify-center lg:pl-12">
          <div className="mb-12">
            <img src="/images/logo_transparent.png" alt="GoPeakCall Logo" className="h-16 object-contain mb-6" />
            <p className="text-[15px] text-white/60 max-w-md leading-relaxed">
              The intelligent voice agent built to help HVAC and home service businesses capture every lead and book more jobs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {['How It Works', 'Features', 'Pricing', 'FAQ'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[15px] text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:gabriel.alvarez@gopeakcall.com" className="text-[15px] text-white/60 hover:text-white transition-colors break-all">
                    gabriel.alvarez@gopeakcall.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-[13px] text-white/40">
          © {new Date().getFullYear()} GoPeakCall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
