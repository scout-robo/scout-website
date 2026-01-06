import React from 'react';
import { IndustryType, Industry } from '../types';
import { Train, Truck, Plane, Building2, ChevronRight, ArrowRight, Ship } from 'lucide-react';
import { INDUSTRY_IMAGES } from '../src/constants/images';

const industries: Industry[] = [
  {
    id: IndustryType.RAIL,
    name: 'Rail & Transit',
    label: 'RAIL',
    image: INDUSTRY_IMAGES.RAIL,
    description: 'Automate track geometry and visual inspection on revenue trains.',
    insights: ['Broken Fasteners', 'Gauge Width', 'Vegetation', 'Ballast Health']
  },
  {
    id: IndustryType.ROADS,
    name: 'Ports & Terminals',
    label: 'PORT',
    image: INDUSTRY_IMAGES.ROADS,
    description: 'Monitor port infrastructure and automate asset inspections.',
    insights: ['Container Health', 'Stack Alignment', 'Safety Zones', 'Asset Tracking']
  },
  {
    id: IndustryType.AIRPORTS,
    name: 'Aviation',
    label: 'AIR',
    image: INDUSTRY_IMAGES.AIRPORTS,
    description: 'Keep runways FOD-free and compliant with daily scans.',
    insights: ['FOD Detection', 'Runway Cracks', 'Lighting Status', 'Perimeter Check']
  },
  {
    id: IndustryType.CITIES,
    name: 'Urban',
    label: 'CITY',
    image: INDUSTRY_IMAGES.CITIES,
    description: 'Digitize city infrastructure for smarter maintenance planning.',
    insights: ['Utility Poles', 'Curb Assets', 'Road Surface', 'Encroachment']
  }
];

const IndustryFocus: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-[#0B1120] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for Your Industry</h2>
            <p className="text-slate-400 max-w-xl text-lg">
                We know every environment is unique. Scout adapts to your specific inspection needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div key={industry.id} className="group relative bg-[#151e32] rounded-xl overflow-hidden border border-white/5 hover:border-scout-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-scout-primary/10">
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151e32] to-transparent z-10"></div>
                    <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                        {industry.id === IndustryType.RAIL && <Train className="text-white w-6 h-6" />}
                        {industry.id === IndustryType.ROADS && <Ship className="text-white w-6 h-6" />}
                        {industry.id === IndustryType.AIRPORTS && <Plane className="text-white w-6 h-6" />}
                        {industry.id === IndustryType.CITIES && <Building2 className="text-white w-6 h-6" />}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                        {industry.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                        {industry.insights.map((insight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                                <div className="w-1.5 h-1.5 bg-scout-primary rounded-full"></div>
                                {insight}
                            </div>
                        ))}
                    </div>

                    <a href="mailto:contact@scoutrobo.com?subject=Industry Solutions Inquiry" className="flex items-center text-scout-primary font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                        <span>CONTACT US FOR SOLUTIONS</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;