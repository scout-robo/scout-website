import React, { useState } from 'react';
import { Settings, Cpu, Cloud, Smartphone, Box, Zap, Wifi } from 'lucide-react';
import { PRODUCT_IMAGES } from '../src/constants/images';

const SystemArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: 'Mount',
      icon: Settings,
      description: 'Attach Scout pods to any revenue vehicle.',
      detailTitle: 'Hardware Suite',
      detailContent: (
        <div className="h-full flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 flex-1">
                <div className="bg-black/40 rounded-xl p-6 border border-white/10 flex flex-col hover:border-scout-primary/50 transition-colors">
                    <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                            <Box className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-1">LARRE</h4>
                        <div className="text-xs font-mono text-slate-400 mb-3">LIDAR + VISION</div>
                        <p className="text-slate-400 text-sm mb-4">High-fidelity geometry and visual inspection unit. Mounts on bumpers or undercarriages.</p>
                    </div>
                    <div className="mt-auto bg-black/60 rounded-lg p-3 border border-white/5">
                        <img src={PRODUCT_IMAGES.LARRE} alt="LARRE Hardware" className="w-full h-32 object-contain" />
                    </div>
                </div>
                <div className="bg-black/40 rounded-xl p-6 border border-white/10 flex flex-col hover:border-scout-primary/50 transition-colors">
                    <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                            <Cpu className="w-6 h-6 text-purple-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-1">FORGE</h4>
                        <div className="text-xs font-mono text-slate-400 mb-3">EDGE COMPUTE</div>
                        <p className="text-slate-400 text-sm mb-4">Ruggedized AI processing core. Analyzes terabytes of sensor data in real-time.</p>
                    </div>
                    <div className="mt-auto bg-black/60 rounded-lg p-3 border border-white/5">
                        <img src={PRODUCT_IMAGES.FORGE} alt="FORGE Hardware" className="w-full h-32 object-contain" />
                    </div>
                </div>
                <div className="bg-black/40 rounded-xl p-6 border border-white/10 flex flex-col hover:border-scout-primary/50 transition-colors">
                    <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                            <Wifi className="w-6 h-6 text-amber-400" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-1">SPARK</h4>
                        <div className="text-xs font-mono text-slate-400 mb-3">CONNECTIVITY</div>
                        <p className="text-slate-400 text-sm mb-4">Multi-modem gateway ensures data upload via 5G/LTE/Satellite seamlessly.</p>
                    </div>
                    <div className="mt-auto bg-black/60 rounded-lg p-3 border border-white/5">
                        <img src={PRODUCT_IMAGES.SPARK} alt="SPARK Hardware" className="w-full h-32 object-contain" />
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'Scan',
      icon: Cpu,
      description: 'AI detects defects automatically while driving.',
      detailTitle: 'Autonomous Digitization',
      detailContent: (
        <div className="relative h-full w-full overflow-hidden bg-black/50">
             <div className={`absolute inset-0 bg-cover bg-center opacity-40`} style={{backgroundImage: `url(${PRODUCT_IMAGES.BACKGROUND})`}}></div>
             {/* Scanning Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-scout-primary/10 to-transparent animate-scan z-10 border-b-2 border-scout-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
             
             <div className="absolute bottom-8 left-8 z-20 bg-black/80 backdrop-blur p-4 rounded border border-scout-primary/30">
                 <div className="flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-green-500 font-mono text-xs font-bold uppercase">Processing Live Feed</span>
                 </div>
                 <div className="space-y-1 font-mono text-xs text-slate-300">
                     <div className="flex justify-between w-48"><span>Objects Detected:</span> <span className="text-white">142</span></div>
                     <div className="flex justify-between w-48"><span>Surface Anomaly:</span> <span className="text-red-400">0.02%</span></div>
                     <div className="flex justify-between w-48"><span>GPS Confidence:</span> <span className="text-blue-400">High</span></div>
                 </div>
             </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Analyze',
      icon: Cloud,
      description: 'Data syncs to the cloud for deep analytics.',
      detailTitle: 'Scout Command Center',
      detailContent: (
        <div className="h-full w-full bg-[#1E293B] flex flex-col relative">
            <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-700 flex justify-between items-center">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
                <div className="text-slate-500 font-mono text-[10px]">app.scoutrobo.com</div>
            </div>
            <div className="flex-1 relative bg-slate-900">
                {/* Static Map Background */}
                <img 
                    src={PRODUCT_IMAGES.DASHBOARD_MAP} 
                    alt="Dashboard Map View" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur p-4 rounded border border-slate-700 w-64 shadow-xl z-10">
                    <div className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Asset Health Score</div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                        <div className="w-[85%] h-full bg-green-500"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Good</span>
                        <span>85% Network</span>
                    </div>
                </div>
                
                {/* Defect Pins */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-lg"></div>
            </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Notify',
      icon: Smartphone,
      description: 'Field crews get instant alerts on the mobile app.',
      detailTitle: 'Real-Time Mobile Alerts',
      detailContent: (
        <div className="h-full w-full flex items-center justify-center bg-[#0B1120] relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-scout-primary/10 to-transparent"></div>
            
            {/* Connection Flow Diagram */}
            <div className="relative w-full max-w-4xl flex items-center justify-between gap-8">
                {/* Scout Pod */}
                <div className="flex flex-col items-center relative z-10">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-xl border-2 border-blue-500 flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20">
                        <Settings className="w-12 h-12 text-blue-400" />
                    </div>
                    <div className="text-xs font-mono text-slate-400 text-center">Scout Pod</div>
                    <div className="text-[10px] text-slate-600 mt-1">On Vehicle</div>
                </div>

                {/* Connection Line 1 */}
                <div className="flex-1 flex items-center relative">
                    <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                        <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-500 rounded-full -translate-y-1/2 animate-ping"></div>
                    </div>
                    <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 bg-[#0B1120] px-2">5G/LTE</div>
                </div>

                {/* Cloud Dashboard */}
                <div className="flex flex-col items-center relative z-10">
                    <div className="w-24 h-24 bg-purple-500/20 rounded-xl border-2 border-purple-500 flex items-center justify-center mb-2 shadow-lg shadow-purple-500/20">
                        <Cloud className="w-12 h-12 text-purple-400" />
                    </div>
                    <div className="text-xs font-mono text-slate-400 text-center">Cloud</div>
                    <div className="text-[10px] text-slate-600 mt-1">Analytics</div>
                </div>

                {/* Connection Line 2 */}
                <div className="flex-1 flex items-center relative">
                    <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-green-500 relative">
                        <div className="absolute top-1/2 right-0 w-2 h-2 bg-green-500 rounded-full -translate-y-1/2 animate-ping"></div>
                    </div>
                    <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 bg-[#0B1120] px-2">Push Alert</div>
                </div>

                {/* Mobile App */}
                <div className="flex flex-col items-center relative z-10">
                    <div className="relative w-20 h-[120px] bg-black rounded-[1rem] border-2 border-green-500 shadow-2xl shadow-green-500/20 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-800 rounded-b-lg z-20"></div>
                        <div className="pt-4 px-2 h-full bg-gradient-to-b from-slate-900 to-black">
                            <div className="bg-red-500/20 border border-red-500 rounded p-1 mb-1">
                                <div className="text-[6px] text-red-400 font-bold mb-0.5">CRITICAL</div>
                                <div className="text-[7px] text-white">Track Buckle</div>
                            </div>
                            <div className="bg-slate-800 rounded p-1 mb-1">
                                <div className="text-[6px] text-slate-400">TASK</div>
                                <div className="text-[7px] text-white">Verify MP 102</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 text-center mt-2">Mobile App</div>
                    <div className="text-[10px] text-slate-600 mt-1">Field Crew</div>
                </div>
            </div>
            
            {/* Data Flow Animation Indicators */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-green-400 font-mono">SYSTEM ACTIVE</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">Real-time sync enabled</div>
            </div>
        </div>
      )
    }
  ];

  return (
    <section id="system" className="py-24 bg-[#050914] relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                From the vehicle to your pocket in seconds. An integrated ecosystem for modern infrastructure.
            </p>
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 relative">
             {/* Connecting Line (Desktop) - purely decorative behind */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10 -translate-y-1/2"></div>

            {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                    <div 
                        key={step.id} 
                        className={`cursor-pointer group relative p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-scout-primary/10 border-scout-primary' : 'bg-[#0F172A] border-slate-800 hover:border-slate-600'}`}
                        onMouseEnter={() => setActiveStep(index)}
                        onClick={() => setActiveStep(index)}
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${isActive ? 'bg-scout-primary text-white shadow-lg shadow-scout-primary/25' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'}`}>
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>{step.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            {step.description}
                        </p>
                        
                        {/* Active Indicator Arrow */}
                        {isActive && (
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-scout-primary/10 hidden md:block"></div>
                        )}
                    </div>
                );
            })}
        </div>

        {/* Dynamic Display Area */}
        <div className="bg-[#0F172A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl min-h-[500px] flex flex-col md:flex-row transition-all duration-500">
            {/* Left Side: Title & Context */}
            <div className="md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center bg-gradient-to-br from-black to-[#0F172A]">
                <div className="text-scout-primary font-mono text-xs uppercase tracking-widest mb-4">Step 0{activeStep + 1}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {steps[activeStep].detailTitle}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                   {activeStep === 0 && "Turn your revenue vehicles into smart inspection tools. Our modular hardware suite fits any vehicle type in minutes."}
                   {activeStep === 1 && "As your fleet moves, Scout sees everything. AI processes visual, thermal, and geometry data at the edge, detecting faults instantly."}
                   {activeStep === 2 && "Aggregation happens automatically. View network health, trend lines, and predictive maintenance schedules from one secure dashboard."}
                   {activeStep === 3 && "Close the loop. Alerts are pushed to maintenance crews in real-time, complete with GPS location and defect imagery."}
                </p>
                <div className="mt-8">
                     <button className="text-white text-sm font-bold flex items-center gap-2 group">
                        LEARN MORE <span className="text-scout-primary group-hover:translate-x-1 transition-transform">→</span>
                     </button>
                </div>
            </div>

            {/* Right Side: Interactive Visual */}
            <div className="md:w-2/3 relative bg-black/50">
                {steps[activeStep].detailContent}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;