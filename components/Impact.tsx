import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-scout-primary text-white border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="group hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono group-hover:text-blue-200 transition-colors">5k+</div>
                <div className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Miles Scanned</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono group-hover:text-blue-200 transition-colors">1.2M</div>
                <div className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Images Processed</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono group-hover:text-blue-200 transition-colors">99.8%</div>
                <div className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Defect Accuracy</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-4xl md:text-5xl font-black mb-2 font-mono group-hover:text-blue-200 transition-colors">10x</div>
                <div className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">ROI for Agencies</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;