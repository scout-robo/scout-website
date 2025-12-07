import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import IndustryFocus from './components/IndustryFocus';
import Features from './components/Features';
import SystemArchitecture from './components/ProductDeepDive';
import Technology from './components/Technology';
import News from './components/News';
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
            
            {/* Trusted By Section */}
            <section className="py-8 border-b border-white/5 bg-black">
              <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[10px] font-mono font-semibold tracking-widest text-slate-600 uppercase">Trusted By Industry Leaders</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="text-lg font-bold font-mono">UNION<span className="font-light">RAIL</span></div>
                   <div className="text-lg font-bold font-mono">METRO<span className="font-light">LINK</span></div>
                   <div className="text-lg font-bold font-mono">CITY<span className="font-light">TRANSIT</span></div>
                   <div className="text-lg font-bold font-mono">VANTAGE<span className="font-light">INFRA</span></div>
                </div>
              </div>
            </section>

            <ProblemSolution />
            <Technology />
            <IndustryFocus />
            <Features />
            <SystemArchitecture />
            <News />
            
            {/* CTA Section */}
            <section className="py-32 bg-scout-dark relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-scout-dark to-scout-dark"></div>
               <div className="container mx-auto px-6 relative z-10 text-center">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Deploy Autonomy Today.</h2>
                  <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    Ready to stop manual inspections? Let's discuss a pilot program for your fleet.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button className="bg-scout-primary text-white px-10 py-4 font-bold text-lg hover:bg-blue-600 transition-all duration-300">
                        <a href="https://calendly.com/tejas-ag/30min" target="_blank" rel="noopener noreferrer">SCHEDULE DEMO</a>
                      </button>
                      <button className="bg-transparent border border-white/20 text-white px-10 py-4 font-bold text-lg hover:bg-white/5 transition-all duration-300">
                        <a href="mailto:contact@scoutrobo.com" target="_blank" rel="noopener noreferrer">CONTACT SALES</a>
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