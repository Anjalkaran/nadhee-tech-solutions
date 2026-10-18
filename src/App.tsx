import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyNadhee } from './components/WhyNadhee';
import { BusinessSolutions } from './components/BusinessSolutions';
import { OurWork } from './components/OurWork';
import { Pricing } from './components/Pricing';
import { HowWeWork } from './components/HowWeWork';
import { ProblemCTA } from './components/ProblemCTA';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Toast } from './components/Toast';
import { NotFound } from './components/NotFound';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { DataDeletion } from './components/DataDeletion';
import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from './data/siteData';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Normalize path (handle trailing slashes)
  const normalizedPath = currentPath.replace(/\/+$/, '') || '/';

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#services';
      return;
    }
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-brand-navy-dark text-slate-100 flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      
      {/* Sticky Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections or Routed Pages */}
      <main className="flex-grow">
        {normalizedPath === '/privacy-policy' ? (
          <PrivacyPolicy />
        ) : normalizedPath === '/terms' ? (
          <TermsOfService />
        ) : normalizedPath === '/data-deletion' ? (
          <DataDeletion />
        ) : normalizedPath === '/' ? (
          <>
            {/* 1. Hero Section */}
            <Hero 
              onOpenConsultation={() => handleOpenConsultation()} 
              onExploreServices={handleExploreServices}
            />

            {/* 2. Services Section */}
            <Services onSelectService={(service) => handleOpenConsultation(service)} />

            {/* 3. Why Choose NADHEE */}
            <WhyNadhee />

            {/* 4. Solutions for Businesses */}
            <BusinessSolutions onOpenConsultation={() => handleOpenConsultation()} />

            {/* 5. Our Work */}
            <OurWork />

            {/* 6. Pricing Section */}
            <Pricing onRequestQuote={(plan) => handleOpenConsultation(plan)} />

            {/* 7. How We Work */}
            <HowWeWork />

            {/* 8. Business Problem Callout */}
            <ProblemCTA onOpenConsultation={() => handleOpenConsultation()} />

            {/* 9. About NADHEE */}
            <AboutSection />

            {/* 10. Contact & Location Section */}
            <ContactSection 
              prefilledService={selectedServiceForQuote} 
              onSuccessToast={showToast} 
            />
          </>
        ) : (
          <NotFound onGoHome={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
          }} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation / Custom Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
        onSuccessToast={showToast}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={SITE_CONFIG.consultant.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Direct WhatsApp Chat with Ramamoorthy K"
        title="WhatsApp Ramamoorthy K - Technology Solutions Consultant"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-semibold">
          Chat on WhatsApp
        </span>
      </a>

      {/* Feedback Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

    </div>
  );
}
export default App;
