import { motion } from 'framer-motion';
import { 
  Phone, 
  Car, 
  UserCheck, 
  HeartHandshake, 
  Compass, 
  Briefcase, 
  PlaneTakeoff, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { siteData } from '../data/siteData';

export default function Services() {
  const serviceIconMap = {
    UserCheck: <UserCheck className="w-9 h-9 text-amber-500" />,
    Car: <Car className="w-9 h-9 text-amber-500" />,
    HeartHandshake: <HeartHandshake className="w-9 h-9 text-amber-500" />,
    Compass: <Compass className="w-9 h-9 text-amber-500" />,
    Briefcase: <Briefcase className="w-9 h-9 text-amber-500" />,
    PlaneTakeoff: <PlaneTakeoff className="w-9 h-9 text-amber-500" />
  };

  const serviceBeamGradient = {
    "professional-driver-services": "conic-gradient(from 0deg, transparent 0 260deg, #3b82f688 280deg, #3b82f6 315deg, #06b6d4 345deg, transparent 360deg)",
    "car-rental-with-driver": "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #eab308 345deg, transparent 360deg)",
    "aya-companion-services": "conic-gradient(from 0deg, transparent 0 260deg, #10b98188 280deg, #10b981 315deg, #14b8a6 345deg, transparent 360deg)",
    "outstation-driver-services": "conic-gradient(from 0deg, transparent 0 260deg, #6366f188 280deg, #6366f1 315deg, #a855f7 345deg, transparent 360deg)",
    "corporate-car-services": "conic-gradient(from 0deg, transparent 0 260deg, #f43f5e88 280deg, #f43f5e 315deg, #ec4899 345deg, transparent 360deg)",
    "airport-transfer-services": "conic-gradient(from 0deg, transparent 0 260deg, #8b5cf688 280deg, #8b5cf6 315deg, #3b82f6 345deg, transparent 360deg)"
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Driver &amp; Car Rental Services"
        description="Comprehensive driver services in Kolkata: personal car drivers, rental cars with chauffeurs, AYA companion support, outstation trips &amp; airport transfers. Call 8820119452."
      />

      {/* Page Header Hero (Distinctive Royal Navy / Indigo Automotive Palette) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1b3f] via-[#12285a] to-[#251545] text-white pt-28 sm:pt-32 pb-20 sm:pb-24 text-center">
        {/* Road texture overlay matching website look */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-repeat pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />

        {/* Animated moving background pops with distinctive amber & sky chauffeur palette */}
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-6 sm:left-10 lg:left-14 top-[28%] sm:top-[26%] hidden sm:block pointer-events-none z-0"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/30 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-6 sm:right-16 lg:right-20 top-[38%] sm:top-[35%] hidden sm:block pointer-events-none z-0"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-sky-400/30 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
              Our <span className="text-yellow-400">Premium</span> Services
            </h1>

            <p className="text-base sm:text-lg text-white font-medium max-w-xl mx-auto mb-8 leading-relaxed">
              Since 2017, we’ve been providing reliable and professional driver solutions in Kolkata.
            </p>

            <a
              href="#what-we-offer"
              className="inline-flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold px-6 py-2.5 rounded-lg shadow-md transition-all hover:scale-105"
            >
              <span>Explore Services</span>
              <span className="w-5 h-5 rounded-full bg-gray-950 text-yellow-500 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="relative py-20 bg-gradient-to-b from-slate-100 via-slate-50 to-white text-gray-900 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-3">
              What We <span className="text-yellow-500">Offer</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              From daily drivers to luxury rentals, we provide comprehensive transportation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-[2px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between bg-slate-200/90"
              >
                {/* Continuous Animated Border Beam (Active on all responsive devices) */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: serviceBeamGradient[service.id] || "conic-gradient(from 0deg, transparent 0 270deg, #f59e0b 315deg, #3b82f6 345deg, transparent 360deg)",
                    animationDuration: `${5.5 + (idx % 3) * 0.7}s`
                  }}
                />

                {/* Inner Card Body */}
                <div className="relative bg-white rounded-[14px] h-full flex flex-col justify-between overflow-hidden">
                  {/* Top colored accent stripe with continuous animated shimmer sweep */}
                  <div className={`relative h-2.5 bg-gradient-to-r ${service.accent} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer-sweep" />
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        {serviceIconMap[service.icon]}
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                        Available 24/7
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3.5">
                        Key Inclusions:
                      </h3>
                      <ul className="space-y-2.5 text-sm text-gray-800 font-medium">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Action Buttons */}
                    <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap gap-3">
                      <a
                        href={`tel:${siteData.contact.primaryPhone}`}
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold py-2.5 px-4 rounded-xl text-center text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4 fill-gray-950" />
                        <span>Call to Book</span>
                      </a>

                      <a
                        href={`https://wa.me/${siteData.contact.whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white border border-emerald-200 font-semibold p-2.5 rounded-xl transition-colors inline-flex items-center justify-center"
                        title="Inquire on WhatsApp"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#070e1c] via-[#0b1832] to-[#060c18] border-b border-white/5 overflow-hidden">
        {/* Road texture overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.07] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        {/* Floating atmospheric glow orbs */}
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 h-56 bg-amber-500/[0.06] rounded-full blur-3xl absolute -top-10 -left-10 pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-56 h-56 bg-sky-500/[0.06] rounded-full blur-3xl absolute -bottom-10 -right-10 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Simple 3-Step Process"
            title="How It"
            highlightWord="Works"
            subtitle="Booking your professional driver or rental vehicle with SM Driver Center is fast and hassle-free."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteData.howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative p-[2px] rounded-2xl overflow-hidden shadow-xl group hover:-translate-y-1.5 transition-all duration-300 bg-slate-800/80"
              >
                {/* Continuous Animated Border Beam */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #38bdf8 345deg, transparent 360deg)",
                    animationDuration: `${5.5 + idx * 0.8}s`
                  }}
                />

                <div className="relative bg-slate-900/95 rounded-[14px] p-8 text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-heading text-xl font-bold rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Assistance Banner */}
      <section className="relative py-16 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 overflow-hidden">
        {/* Road texture overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.08] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-slate-950">
            Need a Driver Immediately?
          </h2>
          <p className="text-base sm:text-lg text-slate-900 max-w-2xl mx-auto mb-8 font-medium">
            Call us now for last-minute emergency bookings, late-night transit, or instant airport rides.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-8 rounded-xl shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Primary: {siteData.contact.primaryPhone}</span>
            </a>

            <a
              href={`tel:${siteData.contact.alternatePhone}`}
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-slate-950" />
              <span>Alternate: {siteData.contact.alternatePhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
