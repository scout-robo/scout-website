import React from 'react';
import { Zap, Shield, Database, Clock } from 'lucide-react';
import { FEATURE_IMAGES } from '../src/constants/images';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-scout-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <span className="text-scout-primary font-mono text-xs tracking-widest uppercase mb-2 block">Operational Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Modern Networks Choose Scout</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
                We don't just collect data. We help you run a faster, safer, and more efficient network.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 h-auto lg:h-[800px]">
          
          {/* Card 1: Velocity (Large) */}
          <div className="lg:col-span-2 row-span-1 bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl overflow-hidden relative group border border-white/10">
            <img 
                src={FEATURE_IMAGES.FEATURE_1} 
                alt="High Speed Train" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                    <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Increase Network Velocity</h3>
                <p className="text-slate-300 max-w-lg text-lg">
                    Slow orders kill profitability. By detecting defects early with predictive analytics, you can schedule maintenance during planned windows instead of slowing down revenue service for emergency repairs.
                </p>
            </div>
          </div>

          {/* Card 2: Silos */}
          <div className="lg:col-span-1 bg-[#151e32] rounded-2xl p-8 border border-white/10 hover:border-scout-primary/50 transition-colors flex flex-col justify-between group">
             <div>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Shatter Data Silos</h3>
                <p className="text-slate-400 leading-relaxed">
                    Stop juggling PDFs, Excel sheets, and legacy software. Scout unifies Visual, Thermal, and Geometry data into a single source of truth for all departments.
                </p>
             </div>
             <div className="mt-8 relative h-32 bg-[#0B1120] rounded border border-white/5 overflow-hidden">
                {/* Abstract UI representation of data merging */}
                <div className="absolute top-4 left-4 right-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-3/4"></div>
                </div>
                <div className="absolute top-8 left-4 right-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/2"></div>
                </div>
                <div className="absolute top-12 left-4 right-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-2/3"></div>
                </div>
             </div>
          </div>

          {/* Card 3: Safety */}
          <div className="lg:col-span-1 bg-[#151e32] rounded-2xl p-8 border border-white/10 hover:border-scout-primary/50 transition-colors flex flex-col justify-between">
             <div>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Uncompromised Safety</h3>
                <p className="text-slate-400 leading-relaxed">
                    Keep your people off the tracks. Automated inspection reduces the need for manual walking inspections, minimizing risk to your workforce.
                </p>
             </div>
             <div className="mt-4 flex items-center gap-4 text-sm text-slate-500 font-mono">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> 0 Accidents</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> 100% Compliance</span>
             </div>
          </div>

          {/* Card 4: Delays (Large) */}
          <div className="lg:col-span-2 row-span-1 bg-gradient-to-r from-orange-900 to-slate-900 rounded-2xl overflow-hidden relative group border border-white/10">
             <img 
                src={FEATURE_IMAGES.FEATURE_2} 
                alt="Construction Worker" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-orange-600/20">
                    <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Eliminate Unplanned Delays</h3>
                <p className="text-slate-300 max-w-lg text-lg">
                    Reactive maintenance is expensive and disruptive. Shift to a condition-based maintenance model where you fix problems before they stop your trains.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;