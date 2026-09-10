import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Driver Service Provider',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const text = `Hello SM Driver Center,
I would like to book a service.
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Service:* ${formData.service}
- *Message/Requirements:* ${formData.message || 'None'}`;

    const url = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Contact Us | EM Bypass Kolkata Driver Service"
        description="Contact SM Driver Center near Pepsi Company, EM Bypass, Kolkata. Call 8820119452 or 9748305462. Instant WhatsApp booking for drivers, car rental &amp; AYA service."
      />

      {/* Page Header Hero (Textured Executive Automotive Contact Look) */}
      <section className="relative bg-gradient-to-br from-[#09152b] via-[#122850] to-[#1a1c42] pt-28 sm:pt-32 pb-16 lg:pb-24 border-b border-white/5 text-center overflow-hidden">
        {/* Road texture overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-repeat pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />

        {/* Animated moving background pops */}
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-6 sm:left-10 lg:left-14 top-[28%] sm:top-[26%] hidden sm:block pointer-events-none z-0"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-400/20 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-6 sm:right-16 lg:right-20 top-[38%] sm:top-[35%] hidden sm:block pointer-events-none z-0"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-400/25 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/25 px-4 py-1 rounded-full mb-4">
              Get in Touch &bull; 24/7 Availability
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Contact <span className="text-amber-400">SM Driver Center</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Established in March 2017 &ndash; Your trusted personal driver, car rental, and AYA care partner in South 24 Parganas and Kolkata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Grid with subtle road texture */}
      <section className="relative py-20 bg-gradient-to-b from-[#070d18] via-[#0a1526] to-[#050a14] border-b border-white/5 overflow-hidden">
        {/* Subtle road texture overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Direct Info & Business Hours */}
            <div className="space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Reach Us Directly"
                  title="We are here to"
                  highlightWord="Assist You"
                  subtitle="Have an emergency trip or want to reserve a verified chauffeur in advance? Get in touch immediately."
                  center={false}
                />
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${siteData.contact.primaryPhone}`}
                  className="bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 hover:border-amber-400/40 p-5 rounded-2xl transition-all block group shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Primary Phone</p>
                  <p className="text-base sm:text-lg font-bold font-heading text-white mt-1 group-hover:text-amber-400 transition-colors">
                    {siteData.contact.primaryPhoneFormatted}
                  </p>
                </a>

                <a
                  href={`tel:${siteData.contact.alternatePhone}`}
                  className="bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 hover:border-amber-400/40 p-5 rounded-2xl transition-all block group shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Alternate Phone</p>
                  <p className="text-base sm:text-lg font-bold font-heading text-white mt-1 group-hover:text-amber-400 transition-colors">
                    {siteData.contact.alternatePhoneFormatted}
                  </p>
                </a>

                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 hover:border-amber-400/40 p-5 rounded-2xl transition-all block group shadow-lg sm:col-span-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Inquiry</p>
                  <p className="text-base font-medium text-white mt-1 group-hover:text-amber-400 transition-colors break-all">
                    {siteData.contact.email}
                  </p>
                </a>

                <div className="bg-slate-900/90 border border-white/10 p-5 rounded-2xl shadow-lg sm:col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Center Location</p>
                  <p className="text-sm sm:text-base font-medium text-white mt-1 leading-relaxed">
                    {siteData.contact.fullAddress}
                  </p>
                  <a
                    href={siteData.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-amber-400 hover:text-amber-300 font-semibold underline"
                  >
                    Open in Google Maps App →
                  </a>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-4 text-white font-heading font-bold text-lg">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Business &amp; Emergency Hours</span>
                </div>
                <ul className="divide-y divide-white/5 text-sm">
                  {siteData.businessHours.map((item, idx) => (
                    <li key={idx} className="py-2.5 flex justify-between items-center text-slate-300">
                      <span>{item.days}</span>
                      <span className={`font-semibold ${item.days.includes('Emergency') ? 'text-emerald-400' : 'text-white'}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: WhatsApp Booking & Message Form */}
            <div className="relative p-[2px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800/80">
              {/* Continuous Animated Border Beam */}
              <div
                className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-85"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0 260deg, #10b98188 280deg, #10b981 315deg, #f59e0b 345deg, transparent 360deg)",
                  animationDuration: "6.5s"
                }}
              />
              <div className="relative bg-[#0f172a] p-8 sm:p-10 rounded-[22px] h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Booking</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                    Fill in your requirements below to instantly generate and launch a pre-filled WhatsApp inquiry directly to our dispatch manager.
                  </p>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      >
                        <option value="Driver Service Provider">Driver Service Provider (Personal Car)</option>
                        <option value="Rent a Car Service Provider">Rent a Car Service with Driver</option>
                        <option value="AYA Service Provider">AYA &amp; Patient Companion Service</option>
                        <option value="Best Outstation Driver Service">Outstation Long Distance Driver</option>
                        <option value="Airport Transfer Services">Airport Transfer (Kolkata CCU)</option>
                        <option value="Corporate Car Services">Corporate Monthly Chauffeur Contract</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Trip Details / Specific Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify date, pick-up address, destination, car type, or patient details..."
                        className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-xl shadow-green-900/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] text-base"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Send Inquiry via WhatsApp</span>
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-slate-400">
                  Prefer a direct call? Phone us directly at{' '}
                  <a href={`tel:${siteData.contact.primaryPhone}`} className="text-amber-400 font-bold hover:underline">
                    {siteData.contact.primaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Interactive Map"
              title="Find Us On"
              highlightWord="Google Maps"
              subtitle="Conveniently located at Fartabad EM Bypass Gate, near Pepsi Company, South 24 Parganas, Kolkata."
            />

            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-900">
              <iframe
                src={siteData.contact.mapEmbedSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SM Driver Center Office Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
