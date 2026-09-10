import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollToTop from '../common/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070d18] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
