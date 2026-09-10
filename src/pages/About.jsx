import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  BadgeIndianRupee, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Calendar
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { siteData } from '../data/siteData';

export default function About() {
  const valueIcons = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    Clock: <Clock className="w-8 h-8 text-emerald-400" />,
    Sparkles: <Sparkles className="w-8 h-8 text-amber-400" />,
    BadgeIndianRupee: <BadgeIndianRupee className="w-8 h-8 text-yellow-400" />,
    PhoneCall: <Phone className="w-8 h-8 text-rose-400" />,
    MapPin: <MapPin className="w-8 h-8 text-indigo-400" />
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="About Us | Trusted Driver Agency Kolkata"
        description="Learn about SM Driver Center founded in March 2017 on EM Bypass, Kolkata. Our story, journey, core values, 50+ verified drivers &amp; 500+ happy clients. Call 8820119452."
      />

      {/* Page Header Hero (Matching Screenshot 2) */}
      {/* Page Header Hero (Matching Previous Project) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-800 text-white pt-28 sm:pt-32 pb-20 sm:pb-24 text-center">
        {/* Road texture overlay matching previous project */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-repeat pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />

        {/* Animated moving background pops matching previous website */}
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
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-400/30 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
              Our <span className="text-yellow-400">Story &amp; Mission</span>
            </h1>

            <p className="text-base sm:text-lg text-white font-medium max-w-xl mx-auto mb-8 leading-relaxed">
              Since 2017, SM Driver Center has been providing reliable and professional driver services in Kolkata and beyond.
            </p>

            <a
              href="#journey"
              className="inline-flex items-center gap-2.5 bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold px-6 py-2.5 rounded-lg shadow-md transition-all hover:scale-105"
            >
              <span>Explore Our Journey</span>
              <span className="w-5 h-5 rounded-full bg-gray-950 text-yellow-500 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section (Directly below hero matching Image 2) */}
      <section id="journey" className="relative py-20 bg-gradient-to-b from-slate-100 via-slate-50 to-white text-gray-900 border-b border-gray-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-3">
              Our <span className="text-yellow-500">Journey</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              From a small team in 2017 to one of Kolkata’s most trusted driver service providers.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Center vertical line on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-600 -translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {siteData.timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-5/12">
                      <div className="relative p-[2px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-slate-200/80">
                        {/* Continuous Animated Border Beam */}
                        <div
                          className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #3b82f6 345deg, transparent 360deg)",
                            animationDuration: `${5.5 + (idx % 2) * 1}s`
                          }}
                        />
                        <div className="relative bg-white p-6 sm:p-7 rounded-[14px]">
                          <div className="inline-block text-yellow-600 font-heading font-bold text-lg mb-1">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Year Badge */}
                    <div className="my-4 md:my-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-950 font-heading font-bold text-sm flex items-center justify-center shadow-lg shadow-yellow-500/20 z-10 shrink-0 md:mx-auto">
                      <Calendar className="w-5 h-5" />
                    </div>

                    {/* Empty spacing box for opposite side */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Story & Background Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Visual with Stats Card */}
            <div className="lg:w-1/2 relative w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white relative">
                <img
                  src={siteData.images.aboutTeam}
                  alt="SM Driver Center Founding Operations &amp; Team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="mt-6 sm:-mt-8 sm:ml-8 relative z-10 bg-white p-6 rounded-2xl border border-gray-200 shadow-xl max-w-md">
                <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
                  <div className="px-2">
                    <p className="text-2xl sm:text-3xl font-bold font-heading text-yellow-600">6+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium">Since 2017</p>
                  </div>
                  <div className="px-2">
                    <p className="text-2xl sm:text-3xl font-bold font-heading text-yellow-600">500+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium">Happy Clients</p>
                  </div>
                  <div className="px-2">
                    <p className="text-2xl sm:text-3xl font-bold font-heading text-yellow-600">50+</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium">Verified Drivers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
                About <span className="text-yellow-500">SM Driver Center</span>
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
                Conveniently headquartered on EM Bypass near Pepsi Company Gate, we serve clients across South 24 Parganas, Garia, Jadavpur, Salt Lake, New Town, and central Kolkata.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Our mission is to ensure every journey is safe, stress-free, and punctual. Whether you require a vetted chauffeur for daily corporate commutes, an experienced driver for your private car, or compassionate AYA assistance for elderly parents visiting hospitals, we are on duty 24/7.
              </p>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-800 font-medium mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Experienced, verified drivers with clean licenses and verified police records</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Well-maintained fleet of personal, executive, and outstation vehicles</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>24/7 round-the-clock availability for emergency medical visits and dawn flights</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Competitive pricing with 100% transparent billing and no surprise fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Personalized service accommodating individual family and corporate needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative py-20 bg-gradient-to-br from-[#060c18] via-[#09152a] to-[#040e1c] border-b border-white/5 overflow-hidden">
        {/* Road texture overlay matching dark theme */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        {/* Floating atmospheric color orbs */}
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 h-56 bg-amber-500/[0.07] rounded-full blur-3xl absolute -top-10 -left-10 pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-56 h-56 bg-purple-500/[0.07] rounded-full blur-3xl absolute -bottom-10 -right-10 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Our Principles"
            title="Our Core"
            highlightWord="Values"
            subtitle="The fundamental pillars that make SM Driver Center the preferred agency for hundreds of recurring clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-[2px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 group bg-slate-800/80"
              >
                {/* Continuous Animated Border Beam */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #a855f7 345deg, transparent 360deg)",
                    animationDuration: `${5.2 + (idx % 3) * 0.8}s`
                  }}
                />

                <div className="relative bg-[#0d172b]/95 backdrop-blur-sm rounded-[14px] p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                      {valueIcons[val.icon] || <Sparkles className="w-8 h-8 text-amber-400" />}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Call CTA Banner */}
      <section className="relative py-16 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 overflow-hidden">
        {/* Road texture overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.08] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-slate-950">
            Ready to Experience Premium Driver Services?
          </h2>
          <p className="text-base sm:text-lg text-slate-900 max-w-2xl mx-auto mb-8 font-medium">
            Contact us today and let our verified, professional drivers take care of your journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-8 rounded-xl shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call: {siteData.contact.primaryPhone}</span>
            </a>

            <a
              href={`mailto:${siteData.contact.email}`}
              className="bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 text-slate-950" />
              <span>Email Us: {siteData.contact.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
