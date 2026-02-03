import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

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