import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import { TEAM_IMAGES, ADVISOR_IMAGES, COMPANY_IMAGES } from '../src/constants/images';

const teamMembers = [
    {
        name: "Tejas Agarwal",
        role: "Chief Executive Officer",
        image: TEAM_IMAGES.TEJAS_AGARWAL,
        bio: "2x startup founder, roboticist, University of Pennsylvania, DTU.",
        linkedin: "https://www.linkedin.com/in/robojet/"
    },
    {
        name: "Arjun Nanda",
        role: "Chief Technology Officer",
        image: TEAM_IMAGES.ARJUN_NANDA,
        bio: "Repeat founder, AI expert, ex-tortuga, ex-airworks, UPenn.",
        linkedin: "https://www.linkedin.com/in/arjun-megharjun-nandakumar-493686a6/"
    }
    // {
    //     name: "Lead Engineer",
    //     role: "VP of Engineering",
    //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    //     bio: "Robotics architect specializing in edge computing constraints."
    // },
    // {
    //     name: "Head of Operations",
    //     role: "VP of Operations",
    //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
    //     bio: "Scaled logistics for major freight networks across North America."
    // }
];

const advisors = [
    {
        name: "Raymond T Betler",
        role: "Former Wabtec CEO, Chairman LB Foster",
        image: ADVISOR_IMAGES.RAYMOND_BETLER
    },
    {
        name: "Leslie S Richards",
        role: "Former GM SEPTA, Former PA Secretary of Transportation, PROF UPenn",
        image: ADVISOR_IMAGES.LESLIE_RICHARDS
    },
    {
        name: "Randell Iwasaki",
        role: "Former Caltrans Director, Former CEO Contra Costa Transportation Authority",
        image: ADVISOR_IMAGES.RANDELL_IWASAKI
    }
];

export const AboutUs: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="pt-24 min-h-screen bg-scout-dark">
            {/* Hero */}
            <div className="bg-[#0F172A] py-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Our Mission</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        To enable safer, more efficient infrastructure by giving every vehicle the ability to see and understand the world around it.
                    </p>
                </div>
            </div>

            {/* Story */}
            <div className="container mx-auto px-6 py-20 border-b border-white/5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Born from the Rails</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Scout Robotics Inc. (Formerly Sahay AI, Inc.) was founded by a team of passionate robotics engineers and transit experts who saw a fundamental problem: infrastructure maintenance is reactive, dangerous, and outdated.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We realized that specialized inspection vehicles and manual methods were too infrequent, expensive and prone to mistakes. The solution wasn't to build more inspection cars, but to turn the thousands of trains and trucks already moving into inspectors.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                         <img 
                            src={COMPANY_IMAGES.TEAM_WORKING} 
                            alt="Team working on robot" 
                            className="absolute inset-0 w-full h-full object-cover"
                         />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-6 py-24 border-b border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Core Leadership</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        The minds behind the machine. We combine deep industry knowledge with cutting-edge robotics expertise.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="group bg-[#151e32] rounded-xl overflow-hidden border border-white/5 hover:border-scout-primary/50 transition-all hover:-translate-y-1">
                            <div className="h-64 overflow-hidden relative">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#151e32] to-transparent opacity-80"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                     <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                     <p className="text-scout-primary text-sm font-medium">{member.role}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {member.bio}
                                </p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
                                    <Linkedin size={14} /> Connect
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Advisors Section */}
            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Strategic Advisors</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Supported by veterans who have built and run the world's largest transportation networks.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {advisors.map((advisor, idx) => (
                        <div key={idx} className="flex items-center gap-6 bg-[#151e32] p-6 rounded-xl border border-white/5">
                            <img src={advisor.image} alt={advisor.name} className="w-20 h-20 rounded-full object-cover border-2 border-white/10" />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{advisor.name}</h3>
                                <p className="text-slate-400 text-sm">{advisor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Investors Section */}
            <div className="container mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Investors</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Backed by visionary investors who believe in the future of autonomous infrastructure.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 items-center">
                    <div className="text-2xl font-bold font-mono text-white opacity-60 hover:opacity-100 transition-opacity">Mana<span className="font-light">Ventures</span></div>
                    <div className="text-2xl font-bold font-mono text-white opacity-60 hover:opacity-100 transition-opacity">Blue<span className="font-light">Collective</span></div>
                    <div className="text-2xl font-bold font-mono text-white opacity-60 hover:opacity-100 transition-opacity">Anorak<span className="font-light">Ventures</span></div>
                    <div className="text-2xl font-bold font-mono text-white opacity-60 hover:opacity-100 transition-opacity">Unshackled<span className="font-light">Ventures</span></div>
                </div>
            </div>
        </div>
    );
};