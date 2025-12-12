import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SOLUTION_IMAGES } from '../src/constants/images';

const SolutionLayout: React.FC<{ 
    title: string; 
    subtitle: string; 
    bgImage: string;
    features: string[];
    children: React.ReactNode 
}> = ({ title, subtitle, bgImage, features, children }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-scout-dark">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-scout-dark to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-scout-dark via-scout-dark/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">{title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">{subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                         <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                             {children}
                         </div>
                    </div>
                    <div>
                        <div className="bg-[#151e32] p-8 rounded-2xl border border-white/10 sticky top-32 hover:border-scout-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-scout-primary/10">
                            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Key Capabilities</h3>
                            <ul className="space-y-4">
                                {features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 group/item hover:text-white transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-scout-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href="mailto:contact@scoutrobo.com?subject=Request for Spec Sheet" 
                                className="block w-full mt-8 bg-scout-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all text-center hover:scale-105 hover:shadow-lg hover:shadow-scout-primary/30"
                            >
                                Request Spec Sheet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AutomatedInspection: React.FC = () => (
    <SolutionLayout
        title="Automated Inspection"
        subtitle="Replace manual track walks with continuous, high-fidelity data collection from revenue vehicles."
        bgImage={SOLUTION_IMAGES.SOLUTION_BG_1}
        features={['Track Geometry (Gauge, Cross-level)', 'Visual Defect Detection', 'Thermal Anomaly Detection', 'Tunnel & Clearance Mapping']}
    >
        <h3>The Challenge of Manual Inspection</h3>
        <p>
            Traditional infrastructure inspection relies on human visual checks or specialized geometry cars that run only a few times a year. This leaves massive blind spots in your maintenance data. Issues that arise between inspections can lead to derailments, service interruptions, and costly emergency repairs.
        </p>
        <h3>Continuous Visibility</h3>
        <p>
            Scout Robotics changes the paradigm by mounting autonomous sensor pods on your existing fleet. Every time a train runs, it inspects the track. This provides a daily health check of your entire network, allowing you to catch defects the moment they form.
        </p>
    </SolutionLayout>
);

export const EdgeSoftware: React.FC = () => (
    <SolutionLayout
        title="Edge AI Software"
        subtitle="Process terabytes of sensor data in milliseconds. Detect faults instantly, without waiting for the cloud."
        bgImage={SOLUTION_IMAGES.SOLUTION_BG_2}
        features={['Zero-Latency Inference', 'Offline Operation', 'Bandwidth Optimization', 'OTA Model Updates']}
    >
        <h3>Why Edge Computing Matters</h3>
        <p>
            Infrastructure environments are often connectivity dead zones. Tunnels, rural areas, and deep cuttings make reliable cloud connection impossible. If your inspection system relies on uploading video to the cloud for processing, it will fail when you need it most.
        </p>
        <h3>Intelligence On Board</h3>
        <p>
            Scout's Forge compute unit runs advanced computer vision models locally on the vehicle. It processes LiDAR point clouds and 4K video streams in real-time, identifying defects like broken fasteners, cracks, or obstructions immediately.
        </p>
        <p>
            This means you get alerts instantly—not hours later. It also means we only transmit the data that matters (the defects), drastically reducing cellular data costs.
        </p>
    </SolutionLayout>
);

export const CloudDashboard: React.FC = () => (
    <SolutionLayout
        title="Scout Command Center"
        subtitle="A unified view of your infrastructure health. Move from reactive fixes to predictive maintenance."
        bgImage={SOLUTION_IMAGES.SOLUTION_BG_3}
        features={['GIS Map Visualization', 'Predictive Trend Analysis', 'Work Order Integration', 'Historical Replay']}
    >
        <h3>Turn Data into Action</h3>
        <p>
            Collecting data is only the first step. The Scout Command Center aggregates millions of data points into a simple, actionable dashboard. See the health of your entire network at a glance, with color-coded heat maps indicating problem areas.
        </p>
        <h3>Predictive Analytics</h3>
        <p>
            Don't just fix what's broken. Scout's historical analysis tracks the degradation rate of assets over time. We can predict when a rail section will go out of tolerance weeks in advance, allowing you to schedule maintenance during planned windows rather than disrupting service for emergency repairs.
        </p>
    </SolutionLayout>
);