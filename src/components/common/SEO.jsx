import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO helper component to dynamically update page title, meta description, and canonical link
 */
export default function SEO({ title, description, canonicalPath = '' }) {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "SM Driver Center";
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Professional Drivers & Car Rental in Kolkata`;
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update OpenGraph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const targetPath = canonicalPath || location.pathname;
      canonical.setAttribute("href", `https://sm-driver-center.vercel.app${targetPath === '/' ? '' : targetPath}`);
    }
  }, [title, description, canonicalPath, location.pathname]);

  return null;
}

