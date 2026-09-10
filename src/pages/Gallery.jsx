import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteData } from '../data/siteData';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const galleryImages = siteData.images.gallery;

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [activeImageIndex, galleryImages.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [activeImageIndex, galleryImages.length]);

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <div className="overflow-hidden">
      <SEO
        title="Photo Gallery | Drivers &amp; Rental Fleet"
        description="Browse photos of SM Driver Center: verified chauffeurs, car rental fleet, Kia cars, office on EM Bypass, and happy client road trips in Kolkata. Call 8820119452."
      />

      {/* Page Header Hero (Textured Luxury Automotive Gallery Look) */}
      <section className="relative bg-gradient-to-br from-[#08152e] via-[#0c2246] to-[#121630] pt-28 sm:pt-32 pb-16 lg:pb-24 border-b border-white/5 text-center overflow-hidden">
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400/25 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-6 sm:right-16 lg:right-20 top-[38%] sm:top-[35%] hidden sm:block pointer-events-none z-0"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-400/25 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/25 px-4 py-1 rounded-full mb-4">
              Real Work &bull; Real People &bull; Kolkata
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Our Work <span className="text-amber-400">Gallery</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore authentic moments from our daily services, vehicle fleet, professional drivers, outstation journeys, and official headquarters on EM Bypass.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with subtle road texture */}
      <section className="relative py-16 bg-gradient-to-b from-[#070d18] via-[#0a1526] to-[#050a14] border-b border-white/5 min-h-[60vh] overflow-hidden">
        {/* Subtle road texture overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/rd.jpg')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-slate-800/80 shadow-xl cursor-pointer aspect-[4/3] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Continuous Animated Border Beam */}
                <div
                  className="absolute -inset-[150%] animate-border-beam pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 260deg, #f59e0b88 280deg, #f59e0b 315deg, #38bdf8 345deg, transparent 360deg)",
                    animationDuration: `${5.2 + (idx % 4) * 0.7}s`
                  }}
                />

                <div className="relative w-full h-full rounded-[14.5px] overflow-hidden bg-slate-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold font-heading text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view full photo</span>
                    </div>
                  </div>

                  {/* Always visible category badge */}
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && galleryImages[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close image preview"
              className="absolute top-5 right-5 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white z-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white z-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white z-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Container */}
            <div
              className="max-w-4xl w-full max-h-[88vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={galleryImages[activeImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />

              {/* Caption and Information */}
              <div className="mt-4 text-center max-w-xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {galleryImages[activeImageIndex].category}
                  </span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-xs text-slate-400">
                    {activeImageIndex + 1} of {galleryImages.length}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                  {galleryImages[activeImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {galleryImages[activeImageIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Liked What You See? Book Your Driver Today!
          </h2>
          <p className="text-sm sm:text-base font-medium mb-6 text-slate-900">
            Reach out for personal drivers, corporate fleet bookings, or long-distance car hire.
          </p>
          <a
            href={`tel:${siteData.contact.primaryPhone}`}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Now: {siteData.contact.primaryPhone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
