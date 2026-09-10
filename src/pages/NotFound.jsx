import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4 text-center">
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist on SM Driver Center."
      />
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-heading text-4xl font-bold rounded-full flex items-center justify-center mx-auto">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          The page you requested could not be located. It might have been moved or removed.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

