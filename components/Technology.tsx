import React from 'react';
import { Scan, Cpu, Eye, Wifi, Zap, Layers } from 'lucide-react';
import { TECHNOLOGY_IMAGES } from '../src/constants/images';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-scout-primary font-mono text-xs tracking-widest uppercase mb-2 block">The Platform</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See What Others Miss</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete hardware and software stack designed to digitize the physical world at highway speeds.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature Block 1: The Sensor Pod */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-scout-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                    src={TECHNOLOGY_IMAGES.TECH_1} 
                    alt="Scout Sensor Pod Hardware" 
                    className="w-full h-[400px] object-cover"
                />
                {/* Overlay UI Element */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10 z-20">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-scout-primary">HARDWARE STATUS</span>
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] text-green-500 font-bold">ONLINE</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-white font-bold text-lg">IP67</div>
                            <div className="text-[10px] text-slate-400 uppercase">Rating</div>
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">5min</div>
                            <div className="text-[10px] text-slate-400 uppercase">Install</div>
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">24/7</div>
                            <div className="text-[10px] text-slate-400 uppercase">Uptime</div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="order-1 md:order-2">
                <div className="w-14 h-14 bg-scout-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-scout-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Multi-Spectrum Perception</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Our sensor pods don't just record video. They fuse <strong>LiDAR depth maps</strong>, <strong>Thermal imaging</strong>, and <strong>High-Res RGB</strong> to create a rich 3D understanding of the environment.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]"><Eye className="w-5 h-5 text-scout-primary" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">See in the Dark</h4>
                            <p className="text-slate-500 text-sm">Thermal sensors detect overheated components and intruders at night.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]"><Scan className="w-5 h-5 text-scout-primary" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Precision Measurements</h4>
                            <p className="text-slate-500 text-sm">LiDAR measures track gauge and clearances to the millimeter.</p>
                        </div>
                    </li>
                </ul>
             </div>
          </div>

          {/* Feature Block 2: Edge AI */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-1">
                <div className="w-14 h-14 bg-scout-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-scout-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Onboard Intelligence</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Waiting for cloud uploads creates delays. Scout's <strong>Edge AI</strong> processes data locally on the vehicle, identifying critical defects instantly—even in tunnels or dead zones.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]"><Zap className="w-5 h-5 text-scout-primary" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Zero Latency Alerts</h4>
                            <p className="text-slate-500 text-sm">Detect a broken rail? The driver gets alerted immediately.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]"><Wifi className="w-5 h-5 text-scout-primary" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Smart Bandwidth</h4>
                            <p className="text-slate-500 text-sm">We only upload the defects and metadata, saving you data costs.</p>
                        </div>
                    </li>
                </ul>
             </div>
             <div className="order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-scout-primary/20 to-transparent z-10"></div>
                 {/* Abstract representation of AI processing */}
                 <img 
                    src={TECHNOLOGY_IMAGES.TECH_2} 
                    alt="AI Processing Visualization" 
                    className="w-full h-[400px] object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="bg-black/80 backdrop-blur px-8 py-6 rounded-xl border border-scout-primary/50 flex flex-col items-center">
                        <span className="text-4xl font-mono font-bold text-white mb-1">0.05s</span>
                        <span className="text-xs uppercase tracking-widest text-scout-primary">Inference Time</span>
                     </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;