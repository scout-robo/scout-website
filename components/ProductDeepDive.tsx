import React, { useState } from 'react';
import { Settings, Cpu, Cloud, Smartphone, Box, Wifi, Target, Database } from 'lucide-react';
import { PRODUCT_IMAGES } from '../src/constants/images';

// Reusable Left Panel Component
const StepLeftPanel: React.FC<{
  stepNumber: string;
  title: string;
  description: string;
  bullets?: Array<{ color: string; text: string }>;
  width?: string;
}> = ({ stepNumber, title, description, bullets, width = 'w-1/3' }) => {
  return (
    <div className={`${width} p-8 border-r border-white/5 flex flex-col bg-gradient-to-br from-black to-[#0F172A]`}>
      <div className="text-scout-primary font-mono text-xs uppercase tracking-widest mb-4">{stepNumber}</div>
      <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed mb-6">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <div className="space-y-3">
          {bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 ${bullet.color} rounded-full mt-2 flex-shrink-0`}></div>
              <p className="text-xs text-slate-400">{bullet.text}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto pt-6">
        <a href="mailto:contact@scoutrobo.com?subject=Product Inquiry" className="text-white text-sm font-bold flex items-center gap-2 group hover:text-scout-primary transition-colors">
          CONTACT US <span className="text-scout-primary group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

const SystemArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredOutcome, setHoveredOutcome] = useState<string | null>(null);
  const displayAreaRef = React.useRef<HTMLDivElement>(null);

  const scrollToDisplay = () => {
    if (displayAreaRef.current) {
      displayAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Define left panel configurations
  const leftPanelConfig = [
    {
      stepNumber: 'Step 01',
      title: 'Design your custom solution', // shorter title
      description: 'We have carefully designed our product offerings to resonate with industry needs. Our mission is to deliver comprehensive infrastructure intelligence.',
      bullets: [
        { color: 'bg-scout-primary', text: 'Digital twins to daily operations' },
        { color: 'bg-amber-400', text: 'Install in minutes, scale as you grow' },
        { color: 'bg-blue-400', text: 'Deploy once, monitor daily / weekly / monthly' }
      ],
      width: 'w-1/4'
    },
    {
      stepNumber: 'Step 02',
      title: 'Autonomous Digitization',
      description: 'From mounting devices on your vehicles to capturing infrastructure data autonomously, see how Scout transforms normal operations into continuous inspection programs. Professional installation, zero downtime, instant activation.',
      width: 'w-1/3'
    },
    {
      stepNumber: 'Step 03',
      title: 'Scout Command Center',
      description: 'Aggregation happens automatically. View network health, trend lines, and predictive maintenance schedules from one secure dashboard.',
      width: 'w-1/3'
    },
    {
      stepNumber: 'Step 04',
      title: 'Real-Time Mobile Alerts',
      description: 'Close the loop. Alerts are pushed to maintenance crews in real-time, complete with GPS location and defect imagery.',
      width: 'w-1/3'
    }
  ];

  const steps = [
    {
      id: 0,
      title: 'Choose',
      icon: Target,
      description: 'Select the inspection programs you need.',
      detailContent: (
        <div className="h-full flex">
            <StepLeftPanel {...leftPanelConfig[0]} />

            {/* Right Panel: Outcomes + Products */}
            <div className="flex-1 flex">
                {/* Middle Column: Outcome Buttons + Details */}
                <div className="w-5/12 p-6 border-r border-white/5 bg-black/30 overflow-y-auto">
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Choose Outcome</h4>
                    <div className="flex flex-col gap-3 mb-6">
                        {/* Use Case 1: Daily Operations */}
                        <button 
                            className={`px-3 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-left ${
                                hoveredOutcome === 'a+os' 
                                ? 'bg-amber-500/20 border-amber-500 shadow-lg' 
                                : 'bg-black/40 border-white/10 hover:border-amber-500/30'
                            }`}
                            onMouseEnter={() => setHoveredOutcome('a+os')}
                            onMouseLeave={() => setHoveredOutcome(null)}
                        >
                            <Wifi className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            <span className="text-white text-sm font-medium">Daily Intelligence</span>
                        </button>

                        {/* Use Case 2: Corridor Intelligence */}
                        <button 
                            className={`px-3 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-left ${
                                hoveredOutcome === 'x+os' 
                                ? 'bg-blue-500/20 border-blue-500 shadow-lg' 
                                : 'bg-black/40 border-white/10 hover:border-blue-500/30'
                            }`}
                            onMouseEnter={() => setHoveredOutcome('x+os')}
                            onMouseLeave={() => setHoveredOutcome(null)}
                        >
                            <Box className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span className="text-white text-sm font-medium">Corridor & RoW Analysis</span>
                        </button>

                        {/* Use Case 3: Track Geometry */}
                        <button 
                            className={`px-3 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-left ${
                                hoveredOutcome === 't+os' 
                                ? 'bg-purple-500/20 border-purple-500 shadow-lg' 
                                : 'bg-black/40 border-white/10 hover:border-purple-500/30'
                            }`}
                            onMouseEnter={() => setHoveredOutcome('t+os')}
                            onMouseLeave={() => setHoveredOutcome(null)}
                        >
                            <Cpu className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-white text-sm font-medium">Track Geometry Analysis</span>
                        </button>

                        {/* Use Case 4: Combined Corridor + Geometry */}
                        <button 
                            className={`px-3 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-left ${
                                hoveredOutcome === 'x+t+os' 
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500 shadow-lg' 
                                : 'bg-black/40 border-white/10 hover:border-blue-500/30'
                            }`}
                            onMouseEnter={() => setHoveredOutcome('x+t+os')}
                            onMouseLeave={() => setHoveredOutcome(null)}
                        >
                            <Target className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span className="text-white text-sm font-medium">Digital Twin</span>
                        </button>

                        {/* Use Case 5: Complete Platform */}
                        <button 
                            className={`px-3 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-left ${
                                hoveredOutcome === 'all' 
                                ? 'bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-purple-500/20 border-scout-primary shadow-lg' 
                                : 'bg-black/40 border-white/10 hover:border-scout-primary/30'
                            }`}
                            onMouseEnter={() => setHoveredOutcome('all')}
                            onMouseLeave={() => setHoveredOutcome(null)}
                        >
                            <Database className="w-5 h-5 text-scout-primary flex-shrink-0" />
                            <span className="text-white text-sm font-medium">Complete Inspection Platform</span>
                        </button>
                    </div>

                    {/* Dynamic Outcome Details */}
                    <div className="flex-1">
                        {hoveredOutcome === 'a+os' && (
                        <div className="space-y-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/40">
                                    <Wifi className="w-5 h-5 text-amber-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Daily Operational Monitoring</h4>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Turn every vehicle movement into a daily inspection. Enables proactive maintenance by detecting critical events early. Continuous monitoring layer provides real-time alerts for immediate response.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1 text-[10px] text-amber-300">Critical Events</div>
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1 text-[10px] text-amber-300">Proactive Inspections</div>
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1 text-[10px] text-amber-300">Cost Reduction</div>
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1 text-[10px] text-amber-300">Early Detection</div>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <div className="text-xs font-mono text-amber-400 mb-1">RECOMMENDED</div>
                                <div className="text-sm text-white font-medium">Scout A Series + OS</div>
                            </div>
                        </div>
                    )}
                    {hoveredOutcome === 'x+os' && (
                        <div className="space-y-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/40">
                                    <Box className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Comprehensive Corridor Analysis</h4>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Build a complete 3D digital twin with LiDAR scanning. OCS analysis detects clearance violations and structural issues. Identify vegetation encroachment and asset inventory changes for comprehensive corridor intelligence.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Detailed Digital Twin</div>
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Capital Planning</div>
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Asset Inventory</div>
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Clearance Monitoring</div>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <div className="text-xs font-mono text-blue-400 mb-1">RECOMMENDED</div>
                                <div className="text-sm text-white font-medium">Scout X Series + OS</div>
                            </div>
                        </div>
                    )}
                    {hoveredOutcome === 't+os' && (
                        <div className="space-y-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/40">
                                    <Cpu className="w-5 h-5 text-purple-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Engineering-Grade Track Geometry</h4>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Precision track profile data enables proactive track maintenance. Meet FRA compliance standards with continuous monitoring layer. Detect critical geometry exceptions early to prevent service disruptions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">Track Geometry Synced</div>
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">FRA Compliance</div>
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">Predictive Maintenance</div>
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">Safety Alerts</div>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <div className="text-xs font-mono text-purple-400 mb-1">RECOMMENDED</div>
                                <div className="text-sm text-white font-medium">Scout T Series + OS</div>
                            </div>
                        </div>
                    )}
                    {hoveredOutcome === 'x+t+os' && (
                        <div className="space-y-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-blue-500/40">
                                    <Target className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Complete Periodic Assessment</h4>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Full corridor and track geometry validation in one pass. Combined OCS analysis and track geometry inspection enables comprehensive periodic audits. Complete infrastructure assessment for regulatory compliance.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Complete Validation</div>
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">Regulatory Compliance</div>
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded px-2 py-1 text-[10px] text-blue-300">Full Audit Trail</div>
                                <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-[10px] text-purple-300">Efficiency Gains</div>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <div className="text-xs font-mono text-blue-400 mb-1">RECOMMENDED</div>
                                <div className="text-sm text-white font-medium">Scout X + T Series + OS</div>
                            </div>
                        </div>
                    )}
                    {hoveredOutcome === 'all' && (
                        <div className="space-y-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-amber-500/20 via-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-scout-primary/40">
                                    <Database className="w-5 h-5 text-scout-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Full Multi-Cadence Intelligence</h4>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                Complete platform combining daily inspections with periodic assessments. Continuous monitoring layer detects critical events instantly while detailed audits ensure compliance. Proactive maintenance across all infrastructure assets.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-scout-primary/10 border border-scout-primary/30 rounded px-2 py-1 text-[10px] text-scout-primary">Total Visibility</div>
                                <div className="bg-scout-primary/10 border border-scout-primary/30 rounded px-2 py-1 text-[10px] text-scout-primary">Multi-Cadence Data</div>
                                <div className="bg-scout-primary/10 border border-scout-primary/30 rounded px-2 py-1 text-[10px] text-scout-primary">Integrated Insights</div>
                                <div className="bg-scout-primary/10 border border-scout-primary/30 rounded px-2 py-1 text-[10px] text-scout-primary">Complete Intelligence</div>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <div className="text-xs font-mono text-scout-primary mb-1">RECOMMENDED</div>
                                <div className="text-sm text-white font-medium">Complete Platform</div>
                            </div>
                        </div>
                    )}
                    {!hoveredOutcome && (
                        <div className="space-y-4">
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Hover over any outcome to see detailed information and which products deliver it.
                            </p>
                        </div>
                    )}
                    </div>
                </div>

                {/* Right Column: Products */}
                <div className="flex-1 p-6 bg-black/20 overflow-y-auto">
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Our Products</h4>
                    <div className="space-y-3">
                        {/* Scout A Series */}
                        <div 
                            className={`bg-black/40 rounded-lg p-3 border transition-all duration-300 ${
                                hoveredOutcome === 'a+os' || hoveredOutcome === 'all'
                                ? 'border-amber-500 shadow-xl shadow-amber-500/20 bg-amber-500/5' 
                                : 'border-white/10'
                            }`}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="w-24 h-24 bg-black/60 rounded p-2 border border-white/5 flex items-center justify-center flex-shrink-0">
                                    <img src={PRODUCT_IMAGES.A_SERIES} alt="A Series" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm mb-1.5">Scout A Series</h4>
                                    <ul className="text-slate-400 text-[11px] space-y-0.5">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-amber-400 mt-0.5 text-xs">•</span>
                                            <span>Critical event alerts</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-amber-400 mt-0.5 text-xs">•</span>
                                            <span>Always-on monitoring</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-amber-400 mt-0.5 text-xs">•</span>
                                            <span>5-minute installation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Scout X Series */}
                        <div 
                            className={`bg-black/40 rounded-lg p-3 border transition-all duration-300 ${
                                hoveredOutcome === 'x+os' || hoveredOutcome === 'x+t+os' || hoveredOutcome === 'all'
                                ? 'border-blue-500 shadow-xl shadow-blue-500/20 bg-blue-500/5' 
                                : 'border-white/10'
                            }`}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="w-24 h-24 bg-black/60 rounded p-2 border border-white/5 flex items-center justify-center flex-shrink-0">
                                    <img src={PRODUCT_IMAGES.X_SERIES} alt="X Series" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm mb-1.5">Scout X Series</h4>
                                    <ul className="text-slate-400 text-[11px] space-y-0.5">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-blue-400 mt-0.5 text-xs">•</span>
                                            <span>3D corridor modeling</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-blue-400 mt-0.5 text-xs">•</span>
                                            <span>OCS & RoW analysis</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-blue-400 mt-0.5 text-xs">•</span>
                                            <span>Digital Asset inventory</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Scout T Series */}
                        <div 
                            className={`bg-black/40 rounded-lg p-3 border transition-all duration-300 ${
                                hoveredOutcome === 't+os' || hoveredOutcome === 'x+t+os' || hoveredOutcome === 'all'
                                ? 'border-purple-500 shadow-xl shadow-purple-500/20 bg-purple-500/5' 
                                : 'border-white/10'
                            }`}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="w-24 h-24 bg-black/60 rounded p-2 border border-white/5 flex items-center justify-center flex-shrink-0">
                                    <img src={PRODUCT_IMAGES.T_SERIES} alt="T Series" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm mb-1.5">Scout T Series</h4>
                                    <ul className="text-slate-400 text-[11px] space-y-0.5">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-purple-400 mt-0.5 text-xs">•</span>
                                            <span>Precision geometry</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-purple-400 mt-0.5 text-xs">•</span>
                                            <span>High frequency operation</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-purple-400 mt-0.5 text-xs">•</span>
                                            <span>Accurate track measurements</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Scout OS */}
                        <div className="bg-gradient-to-br from-scout-primary/20 to-blue-500/20 rounded-lg p-3 border-2 border-scout-primary shadow-xl shadow-scout-primary/30">
                            <div className="flex gap-3 items-start">
                                <div className="w-24 h-24 rounded p-1 flex items-center justify-center flex-shrink-0">
                                    <img src={PRODUCT_IMAGES.SCOUT_OS} alt="Scout OS" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm mb-1.5">Scout OS</h4>
                                    <ul className="text-slate-400 text-[11px] space-y-0.5">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-scout-primary mt-0.5 text-xs">•</span>
                                            <span>One Unified platform</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-scout-primary mt-0.5 text-xs">•</span>
                                            <span>Realtime AI analysis</span>
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-scout-primary mt-0.5 text-xs">•</span>
                                            <span>Unlimited Data Playback</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'Mount & Scan',
      icon: Settings,
      description: 'From installation to autonomous data collection.',
      detailContent: (
        <div className="h-full flex">
            <StepLeftPanel {...leftPanelConfig[1]} />

            {/* Right Panel: Timeline */}
            <div className="flex-1 relative overflow-hidden bg-black/50">
                <div className={`absolute inset-0 bg-cover bg-center opacity-60`} style={{backgroundImage: `url(${PRODUCT_IMAGES.BACKGROUND})`}}></div>
             
             {/* Timeline Flow */}
             <div className="relative h-full flex flex-col justify-center p-8 z-10">
                 <div className="max-w-3xl mx-auto w-full">
                     {/* Step 1: Mount */}
                     <div className="flex items-start gap-3 mb-5">
                         <div className="flex flex-col items-center flex-shrink-0">
                             <div className="w-12 h-12 bg-scout-primary/30 rounded-lg border-2 border-scout-primary flex items-center justify-center shadow-lg shadow-scout-primary/40">
                                 <Settings className="w-6 h-6 text-scout-primary" />
                             </div>
                             <div className="w-0.5 h-16 bg-gradient-to-b from-scout-primary to-green-500 mt-2"></div>
                         </div>
                         <div className="flex-1 bg-black/80 backdrop-blur-lg rounded-lg p-4 border border-scout-primary/30 shadow-md shadow-scout-primary/10">
                             <div className="flex items-center gap-2 mb-2">
                                 <span className="text-scout-primary/80 font-mono text-xs font-bold uppercase">Step 1</span>
                                 <span className="text-slate-200 font-bold text-lg">Professional Installation</span>
                             </div>
                             <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                                 Quick, non-invasive mounting on your vehicles. Ready in minutes.
                             </p>
                             <div className="flex flex-wrap gap-2">
                                 <div className="flex items-center gap-1.5 text-xs bg-green-500/15 text-green-400 px-3 py-1.5 rounded border border-green-500/20">
                                     <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                     <span>5-Min Install</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 text-xs bg-blue-500/15 text-blue-400 px-3 py-1.5 rounded border border-blue-500/20">
                                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                     <span>Zero Downtime</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 text-xs bg-purple-500/15 text-purple-400 px-3 py-1.5 rounded border border-purple-500/20">
                                     <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                     <span>Network Ready</span>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* Step 2: Activate */}
                     <div className="flex items-start gap-3 mb-5">
                         <div className="flex flex-col items-center flex-shrink-0">
                             <div className="w-12 h-12 bg-green-500/30 rounded-lg border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/40">
                                 <Cpu className="w-6 h-6 text-green-400 animate-pulse" />
                             </div>
                             <div className="w-0.5 h-16 bg-gradient-to-b from-green-500 to-amber-500 mt-2"></div>
                         </div>
                         <div className="flex-1 bg-black/80 backdrop-blur-lg rounded-lg p-4 border border-green-500/30 shadow-md shadow-green-500/10">
                             <div className="flex items-center gap-2 mb-2">
                                 <span className="text-green-400/80 font-mono text-xs font-bold uppercase">Step 2</span>
                                 <span className="text-slate-200 font-bold text-lg">Vehicle Begins Operations</span>
                             </div>
                             <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                                 Fleet returns to service. Systems activate automatically with Edge AI processing.
                             </p>
                             <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                                 <div>
                                     <span className="text-slate-500">Status:</span>
                                     <span className="text-green-400 ml-1.5 font-bold">● LIVE</span>
                                 </div>
                                 <div>
                                     <span className="text-slate-500">Mode:</span>
                                     <span className="text-blue-400 ml-1.5">Autonomous</span>
                                 </div>
                                 <div>
                                     <span className="text-slate-500">Processing:</span>
                                     <span className="text-amber-400 ml-1.5">Edge AI</span>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* Step 3: Continuous Scanning */}
                     <div className="flex items-start gap-3">
                         <div className="flex flex-col items-center flex-shrink-0">
                             <div className="w-12 h-12 bg-amber-500/30 rounded-lg border-2 border-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/40 relative">
                                 <Wifi className="w-6 h-6 text-amber-400" />
                                 <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                             </div>
                         </div>
                         <div className="flex-1 bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-lg rounded-lg p-4 border border-amber-500/30 shadow-md shadow-amber-500/10">
                             <div className="flex items-center gap-2 mb-2">
                                 <span className="text-amber-400/80 font-mono text-xs font-bold uppercase animate-pulse">Step 3</span>
                                 <span className="text-slate-200 font-bold text-lg">Autonomous Data Collection</span>
                             </div>
                             <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                                 Every mile inspected. AI detects anomalies. Data syncs to Scout OS continuously.
                             </p>
                             <div className="grid grid-cols-3 gap-2 mt-3">
                                 <div className="bg-black/60 rounded p-2 border border-white/10">
                                     <div className="text-[10px] text-slate-400 uppercase mb-0.5">Objects Detected</div>
                                     <div className="text-slate-200 font-mono font-bold text-base">142</div>
                                 </div>
                                 <div className="bg-black/60 rounded p-2 border border-white/10">
                                     <div className="text-[10px] text-slate-400 uppercase mb-0.5">Surface Anomaly</div>
                                     <div className="text-red-400 font-mono font-bold text-base">0.02%</div>
                                 </div>
                                 <div className="bg-black/60 rounded p-2 border border-white/10">
                                     <div className="text-[10px] text-slate-400 uppercase mb-0.5">GPS Lock</div>
                                     <div className="text-green-400 font-mono font-bold text-base">High</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Animated Scanning Line Effect */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-scout-primary to-transparent opacity-50 animate-scan"></div>
            </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Analyze',
      icon: Cloud,
      description: 'Data syncs to the cloud for deep analytics.',
      detailContent: (
        <div className="h-full flex">
            <StepLeftPanel {...leftPanelConfig[2]} />

            {/* Right Panel: Dashboard View */}
            <div className="flex-1 bg-[#1E293B] flex flex-col relative">
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
        </div>
      )
    },
    {
      id: 3,
      title: 'Notify',
      icon: Smartphone,
      description: 'Field crews get instant alerts on the mobile app.',
      detailContent: (
        <div className="h-full flex">
            <StepLeftPanel {...leftPanelConfig[3]} />

            {/* Right Panel: Flow Diagram */}
            <div className="flex-1 flex items-center justify-center bg-[#0B1120] relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-scout-primary/10 to-transparent"></div>
                
                {/* Connection Flow Diagram */}
            <div className="relative w-full max-w-5xl flex flex-col gap-8">
                {/* Top Row: Flow Diagram */}
                <div className="flex items-center justify-between gap-6">
                    {/* Scout Pod */}
                    <div className="flex flex-col items-center relative z-10">
                        <div className="w-24 h-24 bg-blue-500/20 rounded-xl border-2 border-blue-500 flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20">
                            <Settings className="w-12 h-12 text-blue-400" />
                        </div>
                        <div className="text-xs font-mono text-slate-400 text-center">Scout Pod</div>
                        <div className="text-[10px] text-slate-600 mt-1">On Vehicle</div>
                        <div className="text-[9px] text-blue-400 mt-2 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30">Defect Detected</div>
                    </div>

                    {/* Connection Line 1 */}
                    <div className="flex-1 flex items-center relative">
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-500 rounded-full -translate-y-1/2 animate-ping"></div>
                        </div>
                        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 bg-[#0B1120] px-2">5G Upload</div>
                        <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-600 bg-[#0B1120] px-1">&lt;2sec</div>
                    </div>

                    {/* Cloud Dashboard */}
                    <div className="flex flex-col items-center relative z-10">
                        <div className="w-24 h-24 bg-purple-500/20 rounded-xl border-2 border-purple-500 flex items-center justify-center mb-2 shadow-lg shadow-purple-500/20">
                            <Cloud className="w-12 h-12 text-purple-400" />
                        </div>
                        <div className="text-xs font-mono text-slate-400 text-center">Cloud AI</div>
                        <div className="text-[10px] text-slate-600 mt-1">Processing</div>
                        <div className="text-[9px] text-purple-400 mt-2 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">Severity: High</div>
                    </div>

                    {/* Connection Line 2 */}
                    <div className="flex-1 flex items-center relative">
                        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-green-500 relative">
                            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500 rounded-full -translate-y-1/2 animate-ping"></div>
                        </div>
                        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 bg-[#0B1120] px-2">Push Alert</div>
                        <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-600 bg-[#0B1120] px-1">Instant</div>
                    </div>

                    {/* Mobile App */}
                    <div className="flex flex-col items-center relative z-10">
                        <div className="relative w-20 h-[120px] bg-black rounded-[1rem] border-2 border-green-500 shadow-2xl shadow-green-500/20 overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-800 rounded-b-lg z-20"></div>
                            <div className="pt-4 px-2 h-full bg-gradient-to-b from-slate-900 to-black">
                                <div className="bg-red-500/20 border border-red-500 rounded p-1 mb-1 animate-pulse">
                                    <div className="text-[6px] text-red-400 font-bold mb-0.5">🔴 CRITICAL</div>
                                    <div className="text-[7px] text-white">Track Buckle</div>
                                </div>
                                <div className="bg-orange-500/20 border border-orange-500 rounded p-1 mb-1">
                                    <div className="text-[6px] text-orange-400 font-bold mb-0.5">⚠️ WARN</div>
                                    <div className="text-[7px] text-white">Switch Wear</div>
                                </div>
                                <div className="bg-slate-800 rounded p-1 mb-1">
                                    <div className="text-[6px] text-slate-400">✓ TASK</div>
                                    <div className="text-[7px] text-white">Verify MP 102</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs font-mono text-slate-400 text-center mt-2">Mobile App</div>
                        <div className="text-[10px] text-slate-600 mt-1">Field Crew</div>
                    </div>
                </div>

                {/* Bottom Row: Info Cards */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Alert Types */}
                    <div className="bg-black/40 backdrop-blur border border-white/10 rounded-lg p-4">
                        <div className="text-[10px] font-mono text-scout-primary mb-3 uppercase tracking-wider">Alert Priority</div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Critical</span>
                                <span className="text-red-400 font-bold">&lt;30 sec</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Warning</span>
                                <span className="text-orange-400 font-bold">&lt;2 min</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Info</span>
                                <span className="text-blue-400 font-bold">Next shift</span>
                            </div>
                        </div>
                    </div>

                    {/* Response Metrics */}
                    <div className="bg-black/40 backdrop-blur border border-white/10 rounded-lg p-4">
                        <div className="text-[10px] font-mono text-scout-primary mb-3 uppercase tracking-wider">Avg Response</div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Detection → Alert</span>
                                <span className="text-green-400 font-bold">2.3 sec</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Alert → Ack</span>
                                <span className="text-green-400 font-bold">4.1 min</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Ack → Resolved</span>
                                <span className="text-green-400 font-bold">18 min</span>
                            </div>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="bg-black/40 backdrop-blur border border-white/10 rounded-lg p-4">
                        <div className="text-[10px] font-mono text-scout-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            System Health
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Uptime</span>
                                <span className="text-green-400 font-bold">99.97%</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Active Pods</span>
                                <span className="text-green-400 font-bold">142/143</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px]">
                                <span className="text-slate-400">Alerts Today</span>
                                <span className="text-green-400 font-bold">37</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        onClick={() => { setActiveStep(index); setTimeout(scrollToDisplay, 100); }}
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
        <div ref={displayAreaRef} className="bg-[#0F172A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl min-h-[500px] flex flex-col md:flex-row transition-all duration-500 scroll-mt-24">
            {/* Content - Full width for all steps now */}
            <div className="w-full relative bg-black/50">
                {steps[activeStep].detailContent}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;