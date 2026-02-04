import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// SMART ROUTER: Automatically uses HashRouter in Google AI Studio, BrowserRouter on Netlify
// This solves the problem of HashRouter working in development but BrowserRouter needed for SEO
const Router = window.location.hostname === 'localhost' || 
               window.location.hostname.includes('googleusercontent') ||
               window.location.hostname.includes('google') 
  ? HashRouter 
  : BrowserRouter;

// SEO Controller to update title and meta description based on current route
const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metaMap: Record<string, { title: string; description: string }> = {
      '/': {
        title: "Multi-Trade Property Repairs in Lafayette & Acadiana | Romero's Service Company",
        description: "Multi-trade repairs and maintenance in Lafayette and across Acadiana. Plumbing, electrical, general repairs, installations, remodeling, and cleaning. Call (337) 962-7879."
      },
      '/services': {
        title: "All Services | Multi-Trade Repairs in Lafayette & Acadiana | Romero's",
        description: "Browse our full service catalog for Lafayette and Acadiana, residential, commercial, cleaning, remodeling, and maintenance. One call, real solutions."
      },
      '/residential': {
        title: "Residential Repairs & Maintenance in Lafayette & Acadiana | Romero's",
        description: "Home repairs in Lafayette and Acadiana, plumbing, electrical, drywall, painting, installations, exterior repairs, remodeling, and more."
      },
      '/commercial': {
        title: "Commercial Facility Maintenance in Lafayette & Acadiana | Romero's",
        description: "Multi-trade commercial repairs and facility maintenance for businesses and property managers across Lafayette and Acadiana."
      },
      '/cleaning': {
        title: "Residential & Commercial Cleaning in Lafayette & Acadiana | Romero's",
        description: "Professional cleaning services for homes and offices in Lafayette and Acadiana, including post-construction cleaning and interior maintenance."
      },
      '/request-service': {
        title: "Request Service in Lafayette & Acadiana | Romero's Service Company",
        description: "Request a quote for residential or commercial service in Lafayette and Acadiana. Fast response, clear next steps."
      }
    };

    const currentMeta = metaMap[pathname] || metaMap['/'];

    // Update document title
    document.title = currentMeta.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentMeta.description);
  }, [pathname]);

  return null;
};

// Utility component to handle scroll position on route changes and hash anchors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // 1. Pathname changed (Navigation between different routes)
    if (pathname !== prevPathname.current) {
      if (!hash) {
        // Instant scroll to top when moving to a new page without a hash
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else {
        // 2. Navigation to a hash on a different route
        // Wait for Suspense/Lazy component to mount so element exists in DOM
        const timer = setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            // Scroll to the anchor instantly since it's a new page
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 200); 
        return () => clearTimeout(timer);
      }
      prevPathname.current = pathname;
    } 
    // 3. Same route, but hash changed (Internal page anchor links)
    else if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Smooth scroll to the target on the current page
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const Home = lazy(() => import('./pages/Home.tsx'));
const Residential = lazy(() => import('./pages/Residential.tsx'));
const Commercial = lazy(() => import('./pages/Commercial.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Cleaning = lazy(() => import('./pages/Cleaning.tsx'));
const RequestService = lazy(() => import('./pages/RequestService.tsx'));

const App: React.FC = () => {
  return (
    <Router>
      <SEOManager />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-stone-50">
              <div className="w-12 h-12 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/residential" element={<Residential />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/cleaning" element={<Cleaning />} />
              <Route path="/request-service" element={<RequestService />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
