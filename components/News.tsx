import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_IMAGES } from '../src/constants/images';

const newsItems = [
  {
    date: 'October 15, 2025',
    category: 'Product Launch',
    title: 'Scout Robotics Unveils SPARK - light weight & battery powered inspection system',
    excerpt: 'The latest generation of our hardware brings night-vision capabilities to automated track inspection.',
    image: NEWS_IMAGES.PRODUCT_LAUNCH
  },
  {
    date: 'September 22, 2025',
    category: 'Partnership',
    title: 'Partnering with MetroLink to Digitize 400 Miles of Rail',
    excerpt: 'We are excited to announce our pilot program bringing daily automated inspection to the metro area.',
    image: NEWS_IMAGES.PARTNERSHIP
  },
  {
    date: 'September 10, 2025',
    category: 'Company',
    title: 'Scout Robotics moves HQ inside Philadelphia',
    excerpt: 'To support our growing engineering team, we have moved to a dedicated facility in the Navy Yard.',
    image: NEWS_IMAGES.COMPANY_UPDATE
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <span className="text-scout-primary font-mono text-xs tracking-widest uppercase mb-2 block">Newsroom</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white">Latest Updates</h2>
           </div>
           <button className="hidden md:flex items-center gap-2 text-white font-bold hover:text-scout-primary transition-colors">
              VIEW ALL NEWS <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">
                  {item.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mb-3">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-scout-primary transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-scout-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-12 text-center">
            <button className="inline-flex items-center gap-2 text-white font-bold border border-white/20 px-6 py-3 rounded hover:bg-white/10">
              VIEW ALL NEWS <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default News;