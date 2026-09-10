import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Zap, 
  ShieldCheck, 
  Car, 
  BadgeIndianRupee, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Quote
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteData } from '../data/siteData';

export default function Home() {
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % siteData.testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviewIndex]);

  const serviceEmojiMap = {
    "professional-driver-services": "👨‍✈️",
    "car-rental-with-driver": "🚗",
    "aya-companion-services": "👵",
    "outstation-driver-services": "🛣️",
    "corporate-car-services": "🏢",
    "airport-transfer-services": "✈️"
  };

  const serviceBeamGradient = {
    "professional-driver-services": "conic-gradient(from 0deg, transparent 0 260deg, #3b82f688 280deg, #3b82f6 315deg, #06b6d4 345deg, transparent 360deg)",
    "car-rental-with-driver": "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #eab308 345deg, transparent 360deg)",
    "aya-companion-services": "conic-gradient(from 0deg, transparent 0 260deg, #10b98188 280deg, #10b981 315deg, #14b8a6 345deg, transparent 360deg)",
    "outstation-driver-services": "conic-gradient(from 0deg, transparent 0 260deg, #6366f188 280deg, #6366f1 315deg, #a855f7 345deg, transparent 360deg)",
    "corporate-car-services": "conic-gradient(from 0deg, transparent 0 260deg, #f43f5e88 280deg, #f43f5e 315deg, #ec4899 345deg, transparent 360deg)",
    "airport-transfer-services": "conic-gradient(from 0deg, transparent 0 260deg, #8b5cf688 280deg, #8b5cf6 315deg, #3b82f6 345deg, transparent 360deg)"
  };

  const whyChooseIcons = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    Car: <Car className="w-8 h-8 text-emerald-400" />,
    BadgeIndianRupee: <BadgeIndianRupee className="w-8 h-8 text-amber-400" />,
    Clock: <Clock className="w-8 h-8 text-purple-400" />
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="SM Driver Center | Professional Drivers &amp; Car Rental in Kolkata"
        description="Since 2017, SM Driver Center has been providing reliable, experienced drivers and premium car rental services in Kolkata and beyond. Your journey, our responsibility."
      />

      {/* Hero Section - Shifted upward to fit viewport on initial landing */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-gradient-to-br from-[#0e1b38] via-[#122248] to-[#0a142c] text-white pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:w-1/2 text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-4 sm:mb-6">
                <span className="text-yellow-400">Professional</span> Drivers <br />
                For <span className="text-yellow-400">All Your</span> Needs
              </h1>

              <p className="text-base sm:text-lg text-slate-200 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                Since 2017, SM Driver Center has been providing reliable, experienced drivers and premium car rental services in Kolkata and beyond. Your journey, our responsibility.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <a
                  href="#services"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold px-6 sm:px-7 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm sm:text-base transition-all hover:scale-[1.02]"
                >
                  <Zap className="w-5 h-5 fill-gray-950" />
                  <span>Explore Services</span>
                </a>

                <a
                  href={`tel:${siteData.contact.primaryPhone}`}
                  className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold px-6 sm:px-7 py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>{siteData.contact.primaryPhone}</span>
                </a>
              </div>

              {/* Key Stats Counter Row */}
              <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-4">
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-yellow-400">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-0.5">Availability</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-yellow-400">100%</div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-0.5">Reliability</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-yellow-400">500+</div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-0.5">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column (Matching Screenshot) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-4 lg:mt-0"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Animated circular shape behind image top-left matching previous website */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 lg:w-40 lg:h-40 bg-yellow-400/20 rounded-full absolute -top-8 -left-6 lg:-top-10 lg:-left-8 pointer-events-none z-0"
                />

                {/* Animated circular shape behind image bottom-right matching previous website */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-36 h-36 lg:w-40 lg:h-40 bg-blue-400/20 rounded-full absolute -bottom-8 -right-6 lg:-bottom-10 lg:-right-8 hidden sm:block pointer-events-none z-0"
                />

                {/* Real Owner and Service Banner Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-10">
                  <img
                    src={siteData.images.heroDesk}
                    alt="SM Driver Service Centre &amp; Aya Service Centre"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 6+ Years Experience Badge on bottom-right corner of image */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-yellow-500 text-gray-950 p-3.5 sm:p-4 rounded-lg shadow-xl z-20 text-center">
                  <p className="font-bold text-xl sm:text-2xl font-heading leading-tight">6+ Years</p>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">Experience</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-100 via-slate-50 to-white text-gray-900 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
              Why Choose SM Driver Center?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
              We stand out from the competition with our commitment to excellence, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {siteData.whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative p-[2px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group bg-slate-200/80"
              >
                {/* Continuous Animated Border Beam */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #3b82f6 345deg, transparent 360deg)",
                    animationDuration: `${5.2 + (idx % 4) * 0.7}s`
                  }}
                />
                <div className="relative bg-white rounded-[14px] p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-2xl group-hover:bg-yellow-50 transition-colors">
                    {whyChooseIcons[item.icon] || <ShieldCheck className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet Banner & Comprehensive Services with Fixed Parallax Background */}
      <section
        className="relative text-center py-20 text-white shadow-2xl overflow-hidden border-b border-white/5"
        style={{ clipPath: 'inset(0)' }}
      >
        {/* Full-Viewport Fixed Parallax Background (Crisp & Properly Scaled on Mobile & Desktop) */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <img
            src={siteData.images.kiaCar}
            alt="SM Driver Center Premium Fleet"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dynamic Contrast & Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75 backdrop-contrast-[1.05]" />
        </div>

        {/* Top Title & Get in Touch */}
        <div className="relative container mx-auto px-4 z-10 pt-8 pb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading drop-shadow-xl mt-6 mb-3 text-white">
            SM Driver Center
          </h2>
          <p className="font-semibold text-lg sm:text-xl drop-shadow-md max-w-2xl mx-auto mb-8 text-slate-100">
            Experienced, verified drivers with clean records...
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-800 hover:from-black hover:to-neutral-900 text-white font-medium text-lg sm:text-xl shadow-2xl transition-all hover:scale-105 border border-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Comprehensive Services - Scrolling over the fixed Kia background */}
        <div id="services" className="relative container mx-auto px-4 z-10 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4 drop-shadow-md">
              Our Comprehensive Services
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {siteData.services.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-[2px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between bg-slate-200/90"
              >
                {/* Continuous Animated Border Beam */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: serviceBeamGradient[service.id] || "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #3b82f6 345deg, transparent 360deg)",
                    animationDuration: `${5.5 + (idx % 3) * 0.7}s`
                  }}
                />

                <div className="relative bg-white text-gray-800 rounded-[14px] p-8 flex flex-col justify-between h-full overflow-hidden">
                  <div>
                    <div className="text-4xl mb-4">
                      {serviceEmojiMap[service.id] || "🚗"}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-yellow-600 hover:text-yellow-700 font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>More Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`tel:${siteData.contact.primaryPhone}`}
                      className="text-xs font-bold bg-yellow-500 hover:bg-yellow-600 text-gray-950 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-yellow-400 font-medium text-sm border-b border-yellow-400/40 pb-1 hover:border-yellow-400 transition-colors drop-shadow"
            >
              <span>Explore all services, features, and rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section (Matching Screenshot) */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Visual Column */}
            <div className="lg:w-1/2 relative w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  src={siteData.images.aboutTeam}
                  alt="SM Driver Center Team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Badge in White matching Screenshot */}
              <div className="mt-6 sm:-mt-8 sm:mx-auto relative z-10 bg-white shadow-xl rounded-lg p-6 max-w-sm border border-gray-200">
                <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
                  <div className="px-2">
                    <p className="text-2xl font-bold font-heading text-yellow-600">6+</p>
                    <p className="text-xs uppercase text-gray-500 font-medium">Years</p>
                  </div>
                  <div className="px-2">
                    <p className="text-2xl font-bold font-heading text-yellow-600">500+</p>
                    <p className="text-xs uppercase text-gray-500 font-medium">Clients</p>
                  </div>
                  <div className="px-2">
                    <p className="text-2xl font-bold font-heading text-yellow-600">50+</p>
                    <p className="text-xs uppercase text-gray-500 font-medium">Drivers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 text-left mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-6">
                About <span className="text-yellow-500">SM Driver Center</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
                Established in March 2017, SM Driver Center has grown to become one of Kolkata's most trusted names in professional driver services and car rentals. Located conveniently on EM Bypass near Pepsi Company, we serve clients across South 24 Parganas and beyond.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-normal">
                Our mission is to provide safe, reliable, and comfortable transportation solutions tailored to each client's specific needs. Whether you need a driver for daily commutes, a car for outstation trips, or companion services, we've got you covered.
              </p>

              <div className="space-y-4 mb-8 text-sm sm:text-base text-gray-800 font-medium">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Experienced, verified drivers with clean records</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Well-maintained fleet of vehicles</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>24/7 availability for emergencies</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Competitive pricing with transparent billing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Personalized service for each client</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-bold px-6 py-3 rounded-lg transition-all shadow-md text-sm sm:text-base"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Matching Previous Site Animation: Vertical Fade & Rise) */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 border-b border-yellow-200/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-center text-neutral-800 mb-10 sm:mb-12"
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative w-full max-w-4xl mx-auto min-h-[340px] sm:min-h-[290px] md:min-h-[270px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full relative bg-white/60 backdrop-blur-md border border-yellow-200 shadow-2xl p-6 sm:p-8 md:p-10 rounded-3xl text-center text-gray-900 transition-all duration-500 min-h-[340px] sm:min-h-[290px] md:min-h-[270px] flex flex-col justify-between items-center"
              >
                {/* Bouncing Yellow Quote Icon Matching Previous Website */}
                <Quote className="w-10 h-10 text-yellow-500 mx-auto mb-3 animate-bounce shrink-0" />

                {/* Review Quote Text in stable height box so text place never shifts */}
                <div className="min-h-[120px] sm:min-h-[90px] md:min-h-[75px] flex items-center justify-center w-full my-auto px-2 sm:px-4">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed italic text-gray-800 font-heading max-w-2xl">
                    “{siteData.testimonials[reviewIndex].quote}”
                  </p>
                </div>

                {/* Review Author - fixed at bottom of card */}
                <div className="mt-3 text-yellow-700 font-semibold text-xl sm:text-2xl tracking-wide font-heading shrink-0">
                  — {siteData.testimonials[reviewIndex].name}
                </div>

                {/* Frosted Glass Subtle Inner Border */}
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/40 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Business Details Summary for Local SEO (Matching Screenshot) */}
          <div className="mt-14 text-center text-sm sm:text-base text-gray-700 max-w-xl mx-auto space-y-2 font-medium">
            <p><strong className="text-gray-900">Established:</strong> March 2017</p>
            <p className="font-bold text-gray-900 uppercase tracking-wide">SM DRIVER CENTER</p>
            <p><strong className="text-gray-900">Phone:</strong> {siteData.contact.primaryPhone} / {siteData.contact.alternatePhone}</p>
            <p><strong className="text-gray-900">Address:</strong> {siteData.contact.fullAddress}</p>
            <p>
              <strong className="text-gray-900">Email:</strong>{' '}
              <a href={`mailto:${siteData.contact.email}`} className="text-blue-600 underline hover:text-blue-800">
                {siteData.contact.email}
              </a>
            </p>
            <p><strong className="text-gray-900">Services:</strong> Driver service, Rent-a-car, AYA, Outstation Driver, Car Driving Agency</p>
            <p>
              <strong className="text-gray-900">Location Map:</strong>{' '}
              <a className="text-blue-600 underline hover:text-blue-800 font-semibold" href={siteData.contact.mapUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Booking Call CTA Banner (Matching Screenshot 5) */}
      <section id="contact-banner" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
            Need a Reliable Driver?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8">
            Contact us today for professional driver services tailored to your specific requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="bg-white hover:bg-yellow-400 text-blue-950 font-bold py-3 px-8 rounded-lg shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Primary: {siteData.contact.primaryPhone}</span>
            </a>

            <a
              href={`tel:${siteData.contact.alternatePhone}`}
              className="bg-white hover:bg-yellow-400 text-blue-950 font-bold py-3 px-8 rounded-lg shadow-xl flex items-center gap-2 text-base transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Alternate: {siteData.contact.alternatePhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
