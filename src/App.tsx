import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blogs from './components/Blogs';
import BlogPost from './components/BlogPost';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

/** Scroll to top on real route changes; on home, honor `#section` anchors. */
function ScrollOnRoute() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-flow-bg">
      <ScrollOnRoute />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Problems />
            <HowItWorks />
            <WhoItsFor />
            <Comparison />
            <FinalCTA />
            <Footer />
          </>
        } />
        <Route path="/features" element={
          <>
            <Navbar />
            <Features />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <Navbar />
            <Pricing />
            <Footer />
          </>
        } />
        <Route path="/blogs" element={
          <>
            <Navbar />
            <Blogs />
            <Footer />
          </>
        } />
        <Route path="/blogs/:slug" element={
          <>
            <Navbar />
            <BlogPost />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
