import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route navigation
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070d18]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5 py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading text-lg sm:text-xl font-bold text-slate-950 tracking-wider">
                {siteData.company.shortName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                {siteData.company.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-amber-400/90 font-medium tracking-wider uppercase -mt-0.5">
                Since {siteData.company.established}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-sm lg:text-base font-medium transition-all ${
                    isActive
                      ? 'text-white font-medium border border-white rounded-md'
                      : 'text-slate-100 hover:text-white hover:bg-white/10 rounded-md'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-yellow-400 text-gray-900 font-bold px-4 lg:px-5 py-2 rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] text-sm lg:text-base"
            >
              <Phone className="w-4 h-4 fill-current text-gray-900" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              aria-label="Call SM Driver Center"
              className="p-2 bg-amber-400 text-slate-950 rounded-lg"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1222] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          {siteData.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 px-4 rounded-lg text-center"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>Call Primary: {siteData.contact.primaryPhone}</span>
            </a>
            <a
              href={`tel:${siteData.contact.alternatePhone}`}
              className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-lg text-center text-sm"
            >
              <span>Alternate: {siteData.contact.alternatePhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
