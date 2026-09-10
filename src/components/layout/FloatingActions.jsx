import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { siteData } from '../../data/siteData';

// Custom WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339.7 55.8 284.2 32 224.8 32 103.7 32 7.5 135.3 8 256c0 45.4 12 89.7 35 128.5L0 480l100.3-42.4c37.5 20.4 79.7 31.2 122.8 31.2h.1c121.1 0 217.3-103.3 216.8-224.1.1-59.4-23.1-115-65.1-147.6zm-156.1 340c-37.8 0-74.9-10.1-107.1-29.2l-7.6-4.5-63.6 26.9 24.1-65.8-5-8.1c-21.2-34.3-32.3-73.8-32.3-114.3C33.3 153.2 121.5 64 224.8 64c50.3 0 97.6 19.6 133.2 55.1 35.6 35.6 55.2 82.9 55.1 133.3 0 102.3-88.2 191.4-191.3 191.4zm101.6-138.2c-5.6-2.8-33-16.3-38.1-18.2-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18.2-17.6 21.9-6.5 4.2-12.1 1.4c-5.6-2.8-23.5-8.7-44.7-27.8-16.5-14.7-27.5-32.9-30.7-38.4-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.8s-12.5-30-17.1-41c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.8 1.4-15 6.9c-5.1 5.6-19.7 19.3-19.7 47.1s20.2 54.6 23 58.3c2.8 3.7 39.6 60.5 95.8 84.8 13.4 5.8 23.8 9.3 31.9 11.9 13.4 4.3 25.6 3.7 35.2 2.3 10.7-1.6 33-13.5 37.6-26.6 4.6-13.2 4.6-24.5 3.2-26.9-1.3-2.2-5-3.5-10.6-6.3z" />
    </svg>
  );
}

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside aria-label="Floating Actions" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-3">
      {/* Phone Call Button (Blue Circle) */}
      <a
        href={`tel:${siteData.contact.primaryPhone}`}
        aria-label="Call SM Driver Center"
        title="Call Now: 8820119452"
        className="w-12 h-12 flex items-center justify-center bg-[#4361ee] hover:bg-[#3451db] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Phone className="w-5 h-5 fill-white" />
      </a>

      {/* WhatsApp Button (Green Circle) */}
      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-12 h-12 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button (Neutral Circle) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="w-12 h-12 flex items-center justify-center bg-neutral-700/90 hover:bg-neutral-600 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </aside>
  );
}
