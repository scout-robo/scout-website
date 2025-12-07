import React from 'react';
import { Mail, Linkedin, Twitter, MapPin, Aperture } from 'lucide-react';
import { Page } from '../App';
import { LOGO_PATH } from '../src/constants/images';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-black text-slate-400 py-20 border-t border-slate-900 font-mono text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            
            {/* LOGO SECTION - EDIT HERE TO REPLACE LOGO */}
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
                {/* OPTION 1: IMAGE LOGO (Uncomment the line below to use your logo image) */}
                {/* <img src={LOGO_PATH} alt="Scout Robotics Logo" className="h-8 md:h-10 w-auto" /> */}

                {/* OPTION 2: TEXT + ICON LOGO */}
                <>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                      <Aperture className="w-8 h-8 text-scout-primary" />
                  </div>
                  <span className="text-xl font-bold text-white uppercase tracking-tight">Scout<span className="text-scout-primary">Robotics</span></span>
                </>
            </div>
            {/* END LOGO SECTION */}

            <p className="max-w-md leading-relaxed mb-8 text-slate-500">
              Scout Robotics is an infrastructure autonomy company. We build the hardware and software that enables industrial networks to inspect themselves.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <Mail size={18} />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4">
                <li><button onClick={() => { onNavigate('inspection'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">Automated Inspection</button></li>
                <li><button onClick={() => { onNavigate('edge'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">Edge AI Software</button></li>
                <li><button onClick={() => { onNavigate('dashboard'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">Cloud Dashboard</button></li>
                <li><button onClick={() => { onNavigate('api'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">API Documentation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
                <li><button onClick={() => { onNavigate('about'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">About Us</button></li>
                <li><button onClick={() => { onNavigate('careers'); window.scrollTo(0,0); }} className="hover:text-scout-primary transition-colors text-left">Careers</button></li>
                <li className="flex items-center gap-2 pt-4 text-slate-500">
                    <MapPin size={14} />
                    <span>Philadelphia, PA</span>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Scout Robotics Inc. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <button onClick={() => { onNavigate('privacy'); window.scrollTo(0,0); }} className="hover:text-white">Privacy Policy</button>
                <button onClick={() => { onNavigate('terms'); window.scrollTo(0,0); }} className="hover:text-white">Terms of Service</button>
                <button onClick={() => { onNavigate('security'); window.scrollTo(0,0); }} className="hover:text-white">Security</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;