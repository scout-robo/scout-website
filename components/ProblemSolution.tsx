import React from 'react';
import { Clock, Database, TrendingUp, Shield, Activity, Calendar } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-scout-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Gap in Modern Maintenance</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Most agencies have excellent maintenance crews, but they lack consistent data. 
            When you only inspect periodically, you miss the critical window to prevent failures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Traditional Method */}
          <div className="group bg-white/5 rounded-2xl p-8 md:p-12 border border-white/5 hover:border-red-500/30 hover:bg-white/[0.07] transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5">
            <div className="flex items-center gap-3 mb-8 text-slate-400">
                 <Calendar className="w-6 h-6 group-hover:text-red-500 transition-colors" />
                 <h3 className="text-xl font-bold uppercase tracking-wide">The "Snapshot" Approach</h3>
            </div>
            
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Intermittent Visibility</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Inspections happen monthly or annually. Issues that develop between runs go unnoticed until they cause delays.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Fragmented Data</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Track geometry, visual, and thermal data live in different PDFs and spreadsheets, making it hard to see the full picture.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Scout Method */}
          <div className="group bg-scout-primary/10 rounded-2xl p-8 md:p-12 border border-scout-primary/20 relative overflow-hidden hover:border-scout-primary/40 hover:bg-scout-primary/[0.15] transition-all duration-300 hover:shadow-2xl hover:shadow-scout-primary/20 hover:-translate-y-1">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-scout-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-scout-primary/30 transition-colors duration-500"></div>

            <div className="flex items-center gap-3 mb-8 text-scout-primary">
                 <Activity className="w-6 h-6 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-bold uppercase tracking-wide">The Scout Advantage</h3>
            </div>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-scout-primary/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-scout-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Everyday Intelligence</h4>
                  <p className="text-slate-300 leading-relaxed">
                    By mounting on regular trains, you get fresh data every day. Catch defects the moment they appear, not months later.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-scout-primary/20 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-scout-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Augment Your Workforce</h4>
                  <p className="text-slate-300 leading-relaxed">
                    AI highlights potential issues automatically, allowing your skilled crews to focus on verification and repair rather than walking miles of track.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;