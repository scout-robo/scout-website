import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import IndustryFocus from './components/IndustryFocus';
import Features from './components/Features';
import SystemArchitecture from './components/ProductDeepDive';
import Technology from './components/Technology';
import News from './components/News';
import NewsPage from './components/NewsPage';
import Careers from './components/Careers';
import Footer from './components/Footer';

// Sub-pages
import { PrivacyPolicy, TermsOfService, Security } from './components/Legal';
import { AboutUs } from './components/Company';
import { APIDocs } from './components/Documentation';
import { AutomatedInspection, EdgeSoftware, CloudDashboard } from './components/Solutions';

export type Page = 
  | 'home' 
  | 'careers' 
  | 'news'
  | 'about' 
  | 'privacy' 
  | 'terms' 
  | 'security' 
  | 'api' 
  | 'inspection' 
  | 'edge' 
  | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'careers': return <Careers />;
      case 'news': return <NewsPage onNavigate={setCurrentPage} />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'security': return <Security />;
      case 'about': return <AboutUs />;
      case 'api': return <APIDocs />;
      case 'inspection': return <AutomatedInspection />;
      case 'edge': return <EdgeSoftware />;
      case 'dashboard': return <CloudDashboard />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            
            <ProblemSolution />
            <Technology />
            <IndustryFocus />
            <Features />
            <SystemArchitecture />
            <News onNavigate={setCurrentPage} />
            
            {/* CTA Section */}
            <section className="py-32 bg-scout-dark relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-scout-dark to-scout-dark"></div>
               <div className="container mx-auto px-6 relative z-10 text-center">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Deploy Autonomy Today.</h2>
                  <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    Ready to augment manual inspections? Let's discuss a pilot program for your fleet.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button className="bg-scout-primary text-white px-10 py-4 font-bold text-lg hover:bg-blue-600 transition-all duration-300">
                        <a href="mailto:contact@scoutrobo.com?subject=Request for Demo" target="_blank" rel="noopener noreferrer">SCHEDULE DEMO</a>
                      </button>
                      <button className="bg-transparent border border-white/20 text-white px-10 py-4 font-bold text-lg hover:bg-white/5 transition-all duration-300">
                        <a href="mailto:contact@scoutrobo.com?subject=Request for Sales Information" target="_blank" rel="noopener noreferrer">CONTACT SALES</a>
                      </button>
                  </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-scout-dark text-white selection:bg-scout-primary selection:text-white font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;