import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { NEWS_IMAGES } from '../src/constants/images';
import { Page } from '../App';

interface NewsPageProps {
    onNavigate: (page: Page) => void;
}

// Expanded news articles data
const allNewsArticles = [
    {
        date: 'November 22, 2025',
    category: 'Company',
    title: 'Sahay AI changes name to Scout Robotics',
    excerpt: 'We are excited to announce our pilot program bringing daily automated inspection to the metro area.',
    image: NEWS_IMAGES.COMPANY_UPDATE,
    readTime: '4 min read',
    content: `Sahay AI is excited to announce that we are rebranding to Scout Robotics, reflecting our evolution from an AI software provider to a full-stack robotics company dedicated to revolutionizing infrastructure inspection. Our new name embodies our commitment to building autonomous systems that enable industrial networks to inspect themselves, enhancing safety and efficiency.
    
    The rebranding comes alongside significant milestones, including the launch of our SPARK inspection system and expanded partnerships with major transit agencies. "Scout Robotics captures the essence of our mission to explore new frontiers in infrastructure autonomy," said Arjun Nanda, CTO. "We're thrilled to embark on this next chapter."`
},
{
  date: 'October 1, 2025',
  category: 'Product Launch',
  title: 'Scout Robotics Unveils SPARK - light weight & battery powered inspection system',
  excerpt: 'The latest generation of our hardware brings night-vision capabilities to automated track inspection.',
  image: NEWS_IMAGES.PRODUCT_LAUNCH,
  readTime: '3 min read',
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
    readTime: '2 min read',
    content: `Scout Robotics is excited to announce the relocation of our headquarters to a new, larger office space within the Pennovation Center in Philadelphia. This move reflects our rapid growth and commitment to fostering innovation in infrastructure autonomy.

The new headquarters provides expanded facilities to accommodate our growing engineering and operations teams, enabling us to accelerate product development and enhance collaboration. "Our new space at the Pennovation Center positions us at the heart of Philadelphia's vibrant tech ecosystem," said Tejas Agarwal, CEO. "We're thrilled to continue building the future of infrastructure inspection from this dynamic location."`
  },
  {
    date: 'July 5, 2025',
    category: 'Technology',
    title: 'Scout Achieves Centimeter-Level Track Geometry Measurement',
    excerpt: 'Our latest sensor fusion algorithms enable precision measurements rivaling dedicated geometry cars.',
    image: NEWS_IMAGES.PRODUCT_LAUNCH,
    readTime: '5 min read',
    content: `Scout Robotics has achieved a major technical milestone: millimeter-level accuracy in track geometry measurement using production sensor pods mounted on revenue service vehicles. This breakthrough eliminates the traditional trade-off between inspection frequency and measurement precision.

The achievement results from advanced sensor fusion algorithms that combine LiDAR point clouds, IMU data, and high-resolution imaging. Our edge AI processes these multi-modal inputs in real-time, compensating for vehicle motion and environmental factors to extract precise geometry measurements.

Independent validation by industry partners confirmed measurement accuracy within ±2mm for gauge and cross-level parameters, matching or exceeding the performance of specialized geometry cars that cost millions of dollars and require dedicated track time.`
  },
  {
      date: 'May June 30, 2025',
    category: 'Company',
    title: 'Sahay AI Closes Preseed Funding Round',
    excerpt: 'Investment to accelerate product development and expand deployment across North America.',
    image: NEWS_IMAGES.COMPANY_UPDATE,
    readTime: '4 min read',
    content: `Sahay AI announced the successful close of its $1.8M Preseed funding round, led by infrastructure-focused venture capital firms. The investment will fuel product development, expand our engineering team, and support deployments across North America.
    
    "This funding validates the market need for continuous, automated infrastructure inspection," said Tejas Agarwal, CEO. "We're moving from ideas to pilots, and this capital enables us to validate our platform."
    
    The funds will specifically support development of our next-generation sensor hardware, expansion of our machine learning team, and establishment of databases to provide  support for customers across the continent.`
},
{
  date: 'Jan 1, 2025',
  category: 'Partnership',
  title: 'Josh Devon & Rahul Mangharam join Sahay AI',
  excerpt: 'Leading experts in Cybersecurity & Autonomous Safety join Sahay AI as advisors for infrastructure inspection.',
  image: NEWS_IMAGES.PARTNERSHIP,
  readTime: '3 min read',
  content: ` Sahay AI is thrilled to welcome Josh Devon, former Chief Operation Officer at Flashpoint, and Rahul Mangharam, Professor at University of Pennsylvania and expert in autonomous vehicle safety, to our advisory board. Their combined expertise in cybersecurity and autonomous systems will be invaluable as we scale our automated infrastructure inspection platform.

"Josh's experience and Rahul's deep knowledge of autonomous safety frameworks will help ensure our technology meets the highest standards of reliability and security," said Tejas Agarwal, CEO. "We're excited to have them on board as we revolutionize infrastructure inspection."`

}
];

const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    
    return (
        <div className="pt-24 min-h-screen bg-scout-dark">
            {/* Header */}
            <div className="bg-[#0F172A] py-20 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <button 
                        onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
                        className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-mono">Back to Home</span>
                    </button>
                    <h1 className="text-5xl font-bold text-white mb-6">News & Updates</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        The latest updates on our technology, partnerships, and company milestones.
                    </p>
                </div>
            </div>

            {/* News Grid */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allNewsArticles.map((article, idx) => (
                        <article key={idx} className="group cursor-pointer">
                            <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">
                                    {article.category}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-slate-500 text-xs font-mono mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-scout-primary transition-colors leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {article.excerpt}
                            </p>
                            
                            <div className="text-scout-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                Read More →
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-white/5 py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-[#151e32] border border-white/10 rounded-2xl p-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                        <p className="text-slate-400 mb-8">
                            Get the latest news, product updates, and insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="your@email.com" 
                                className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded text-white placeholder-slate-500 focus:outline-none focus:border-scout-primary"
                            />
                            <button className="bg-scout-primary hover:bg-blue-600 text-white px-8 py-3 font-bold rounded transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
export { allNewsArticles };
