import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteData } from '../../data/siteData';

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#070d18] via-[#04171d] to-[#020d11] text-slate-200 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 1: About Company */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-amber-500/25 border-2 border-amber-400/80 shrink-0 bg-slate-950">
                <img
                  src={siteData.images.logo}
                  alt="SM Driver Center Logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white tracking-wide">
                  {siteData.company.name}
                </span>
                <span className="text-[11px] text-amber-400/90 font-medium tracking-wider uppercase -mt-0.5">
                  Since {siteData.company.established}
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Established in March 2017, SM Driver Center is your trusted partner for skilled driver services, car rentals, AYA support, and outstation trips across Kolkata and South 24 Parganas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SM Driver Center Facebook"
                className="w-9 h-9 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-colors border border-blue-500/30"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SM Driver Center Instagram"
                className="w-9 h-9 rounded-full bg-pink-600/20 hover:bg-pink-600 text-pink-400 hover:text-white flex items-center justify-center transition-colors border border-pink-500/30"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 font-medium ml-2">
                ★ 4.8 / 5.0 Google
              </span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Driver Service Provider
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Rent a Car Service Provider
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  AYA Service Provider
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Best Outstation Driver Service
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Car Driving Agency
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Experienced Driver Centre
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Airport Chauffeur Transfer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={`tel:${siteData.contact.primaryPhone}`}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <Clock className="w-4 h-4" />
                  <span>24/7 Emergency Booking</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <a
                    href={`tel:${siteData.contact.primaryPhone}`}
                    className="block hover:text-amber-400 font-medium transition-colors"
                  >
                    {siteData.contact.primaryPhoneFormatted}
                  </a>
                  <a
                    href={`tel:${siteData.contact.alternatePhone}`}
                    className="block text-xs text-slate-400 hover:text-amber-400 transition-colors mt-0.5"
                  >
                    {siteData.contact.alternatePhoneFormatted} (Alt)
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  {siteData.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <a
                  href={siteData.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors leading-relaxed"
                >
                  {siteData.contact.fullAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12 bg-slate-900/50">
          <div className="px-6 py-4 bg-slate-900/80 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Location: <strong>EM Bypass near Pepsi Company Gate, Kolkata 700084</strong></span>
            </div>
            <a
              href={siteData.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline"
            >
              Open in Google Maps App →
            </a>
          </div>
          <iframe
            src={siteData.contact.mapEmbedSrc}
            title="SM Driver Center Location Map"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {siteData.company.name}. 
            <span className="block sm:inline sm:ml-2 text-slate-400">
              Website Developed &amp; Maintained by 
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 text-slate-300"
              >
                Digital Exposure Online Service
              </a>
            </span>
          </p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-200 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="hover:text-slate-200 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Contact &amp; Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

