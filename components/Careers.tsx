import React, { useEffect } from 'react';
import { ArrowUpRight, MapPin, Users, Zap, Heart } from 'lucide-react';

const positions = [
    {
        title: "Computer Vision Engineer",
        dept: "Engineering",
        loc: "Philly",
        type: "Full-Time"
    },
    {
        title: "Robotics Intern",
        dept: "Operations",
        loc: "Philly",
        type: "Full-Time"
    },
    {
        title: "Full Stack Developer",
        dept: "Product",
        loc: "Philly / Remote",
        type: "Full-Time"
    },
    {
        title: "Mechanical Intern",
        dept: "Hardware",
        loc: "Philly",
        type: "Full-Time"
    },
    {
        title: "Founder Office",
        dept: "Sales",
        loc: "Philly",
        type: "Full-Time"
    }
];

const Careers: React.FC = () => {
  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-scout-dark text-white">
      {/* Careers Header */}
      <div className="bg-black py-20 md:py-32 relative overflow-hidden border-b border-white/10">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-scout-dark to-transparent"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Build the Future of Infrastructure</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join a team of roboticists, engineers, and problem solvers based in Philadelphia, PA.
            </p>
         </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-[#0F172A] border-b border-white/5">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                          <Users className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Operator First</h3>
                      <p className="text-slate-400">We don't just write code. We ride the trains and walk the track to understand our users.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                          <Zap className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Move Fast, Fix Things</h3>
                      <p className="text-slate-400">Infrastructure is aging. We work with urgency to deploy solutions that make it safer today.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400">
                          <Heart className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Safety Above All</h3>
                      <p className="text-slate-400">Our technology exists to protect lives. We take that responsibility seriously in everything we build.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Open Roles */}
      <div className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Open Positions</h2>
                <p className="text-slate-400 max-w-xl">
                    Like a role below? Send your resume to careers@scoutrobotics.com. <br> Don't see one? Reach out & let's talk!
                </p>
            </div>
        </div>

        <div className="grid gap-4">
            {positions.map((job, idx) => (
                <a href="#" key={idx} className="group block border border-white/10 p-8 hover:border-scout-primary/50 transition-all hover:bg-white/5 bg-[#151e32] rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-scout-primary transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-400 items-center">
                                <span className="bg-white/10 px-3 py-1 rounded-full text-slate-300 font-medium border border-white/5">{job.dept}</span>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{job.loc}</span>
                                </div>
                                <span>{job.type}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-scout-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                            <span>APPLY NOW</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;