import React from 'react';
import { Play, Activity, Wifi, Zap, CheckCircle2, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60 scale-105"
            poster="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2684&auto=format&fit=crop"
         >
             <source src="https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_30fps.mp4" type="video/mp4" />
         </video>
         {/* Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
         
         {/* Subtle Scan Grid Effect */}
         <div className="absolute inset-0 grid-bg opacity-20 z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Value Prop */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-scout-primary/20 border border-scout-primary/30 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scout-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-scout-primary"></span>
            </span>
            <span className="text-scout-primary font-bold text-xs tracking-widest uppercase">Live Inspection System</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Daily Inspections. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-scout-primary to-blue-400">
                Total Visibility.
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light border-l-4 border-scout-primary pl-6">
            Turn your existing fleet into an autonomous inspection force. Get complete infrastructure visibility every single day without disrupting operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center gap-3 bg-scout-primary hover:bg-blue-600 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all shadow-xl shadow-scout-primary/20 hover:scale-105">
              <Calendar className="w-5 h-5" />
              <a href="https://calendly.com/tejas-ag/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-scout-primary hover:bg-blue-600 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all shadow-xl shadow-scout-primary/20 hover:scale-105">Book A Demo</a>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 font-bold text-lg rounded-lg transition-all backdrop-blur-sm group">
              <Play className="w-5 h-5 fill-current" />
              <a href="https://www.youtube.com/@ScoutRobo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 font-bold text-lg rounded-lg transition-all backdrop-blur-sm group">
              See It In Action </a>
            </button>
          </div>
        </div>

        {/* Right Column: Simulated Live Status Card (The "Catchy" Element) */}
        <div className="hidden lg:block relative w-[400px]">
            {/* Glass Card */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-scout-primary to-transparent opacity-50"></div>
                
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-scout-primary/20 flex items-center justify-center">
                             <Activity className="w-5 h-5 text-scout-primary" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">Scout Pod #042</div>
                            <div className="text-slate-400 text-xs font-mono">Status: INSPECTING</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-scout-primary font-mono font-bold text-xl">58 MPH</span>
                        <span className="text-[10px] text-slate-500 uppercase">Velocity</span>
                    </div>
                </div>

                {/* Live Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-slate-400 text-[10px] uppercase mb-1">Miles Scanned</div>
                        <div className="text-white font-mono font-bold text-lg">1,248.5</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-slate-400 text-[10px] uppercase mb-1">Defects Found</div>
                        <div className="text-white font-mono font-bold text-lg flex items-center gap-2">
                            12 <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">2 NEW</span>
                        </div>
                    </div>
                </div>

                {/* Active Activity Feed */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-slate-300">System calibrated (GPS/IMU locked)</span>
                        <span className="ml-auto text-slate-600 font-mono">10:42:01</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                         <div className="w-4 h-4 rounded-full bg-scout-primary/20 flex items-center justify-center">
                            <Wifi className="w-3 h-3 text-scout-primary" />
                         </div>
                        <span className="text-slate-300">Uploading packet #8821...</span>
                        <span className="ml-auto text-slate-600 font-mono">10:42:05</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-50">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-300">Anomaly detected: Thermal Spike</span>
                        <span className="ml-auto text-slate-600 font-mono">10:41:58</span>
                    </div>
                </div>

                {/* Animated "Processing" Bar */}
                <div className="mt-6">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1 uppercase tracking-wider">
                        <span>Edge AI Processing</span>
                        <span>Low Latency</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-scout-primary w-2/3 animate-pulse"></div>
                    </div>
                </div>
            </div>
            
            {/* Decoration Behind Card */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl bg-white/1 backdrop-blur-sm"></div>
        </div>

      </div>

      {/* Bottom Ticker/Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;