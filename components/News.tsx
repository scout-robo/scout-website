import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_IMAGES } from '../src/constants/images';
import { Page } from '../App';

interface NewsProps {
  onNavigate: (page: Page) => void;
}

const newsItems = [
  {
        date: 'November 22, 2025',
    category: 'Company',
    title: 'Sahay AI changes name to Scout Robotics',
    excerpt: 'We are excited to announce our pilot program bringing daily automated inspection to the metro area.',
    image: NEWS_IMAGES.COMPANY_UPDATE,
    content: `Sahay AI is excited to announce that we are rebranding to Scout Robotics, reflecting our evolution from an AI software provider to a full-stack robotics company dedicated to revolutionizing infrastructure inspection. Our new name embodies our commitment to building autonomous systems that enable industrial networks to inspect themselves, enhancing safety and efficiency.
    
    The rebranding comes alongside significant milestones, including the launch of our SPARK inspection system and expanded partnerships with major transit agencies. "Scout Robotics captures the essence of our mission to explore new frontiers in infrastructure autonomy," said Arjun Nanda, CTO. "We're thrilled to embark on this next chapter."`
},
{
  date: 'October 1, 2025',
  category: 'Product Launch',
  title: 'Scout Robotics Unveils SPARK - light weight & battery powered inspection system',
  excerpt: 'The latest generation of our hardware brings night-vision capabilities to automated track inspection.',
  image: NEWS_IMAGES.PRODUCT_LAUNCH,
  content: `Scout Robotics is proud to announce the launch of SPARK, our next-generation lightweight and battery-powered inspection system. This breakthrough technology enables railways and transit agencies to conduct comprehensive infrastructure inspections with unprecedented flexibility and efficiency.

SPARK represents a significant advancement in our mission to make infrastructure inspection accessible, affordable, and continuous. The system's battery-powered design eliminates the need for complex vehicle integrations, allowing for rapid deployment across diverse fleet types.

Key features include advanced night-vision capabilities, real-time defect detection powered by edge AI, and a modular sensor array that adapts to various inspection requirements. Early pilot programs have demonstrated detection accuracy improvements of over 40% compared to traditional manual inspection methods.`
},
  {
    date: 'September 5, 2025',
    category: 'Company',
    title: 'Scout Robotics moves HQ inside Philadelphia',
    excerpt: 'To support our growing engineering team, we have moved to a dedicated larger Office space in the Pennovation Center.',
    image: NEWS_IMAGES.COMPANY_UPDATE,
    content: `Scout Robotics is excited to announce the relocation of our headquarters to a new, larger office space within the Pennovation Center in Philadelphia. This move reflects our rapid growth and commitment to fostering innovation in infrastructure autonomy.

The new headquarters provides expanded facilities to accommodate our growing engineering and operations teams, enabling us to accelerate product development and enhance collaboration. "Our new space at the Pennovation Center positions us at the heart of Philadelphia's vibrant tech ecosystem," said Tejas Agarwal, CEO. "We're thrilled to continue building the future of infrastructure inspection from this dynamic location."`
  },
];

const News: React.FC<NewsProps> = ({ onNavigate }) => {
  return (
    <section id="news" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <span className="text-scout-primary font-mono text-xs tracking-widest uppercase mb-2 block">Newsroom</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white">Latest Updates</h2>
           </div>
           <button 
             onClick={() => { onNavigate('news'); window.scrollTo(0, 0); }}
             className="hidden md:flex items-center gap-2 text-white font-bold hover:text-scout-primary transition-colors"
           >
              VIEW ALL NEWS <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/5 transition-colors duration-300 z-10"></div>
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
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-scout-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-12 text-center">
            <button 
              onClick={() => { onNavigate('news'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 text-white font-bold border border-white/20 px-6 py-3 rounded hover:bg-white/10"
            >
              VIEW ALL NEWS <ArrowRight className="w-4 h-4" />
           </button>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">For press releases, media inquiries, or more information:</p>
          <a href="mailto:contact@scoutrobo.com?subject=Press and Media Inquiry" className="inline-flex items-center gap-2 text-scout-primary font-bold hover:underline">
            Contact us for Press or Media inquiries <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;