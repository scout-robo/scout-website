import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronDown, ChevronUp, Send } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  required: string[];
  preferred: string[];
}

const Careers: React.FC = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [submittedRole, setSubmittedRole] = useState<string | null>(null);

  const jobPostings: JobPosting[] = [
    {
      id: 'cv-engineer',
      title: 'Computer Vision Engineer',
      location: 'Onsite',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. We\'re building the future of predictive maintenance for rail, roads, and critical infrastructure—turning every revenue vehicle into a smart inspection platform. Lead the development of our core AI vision systems. You\'ll design and deploy cutting-edge computer vision algorithms that detect defects in real-time from moving vehicles, pushing the boundaries of what\'s possible in autonomous inspection.',
      required: [
        '3+ years experience in computer vision or deep learning',
        'Strong Python skills with PyTorch/TensorFlow',
        'Experience with object detection, segmentation, or classification',
        'Understanding of model optimization for edge devices',
        'Bachelor\'s degree in CS, EE, or related field'
      ],
      preferred: [
        'Experience with embedded systems (NVIDIA Jetson, RPi)',
        'Knowledge of railway/infrastructure inspection',
        'Published papers in CV conferences (CVPR, ICCV, etc.)',
        'Experience with real-time video processing',
        'Familiarity with ROS or robotics frameworks'
      ]
    },
    {
      id: 'cv-intern',
      title: 'Computer Vision Intern',
      location: 'Remote / Hybrid',
      type: 'Internship (3-6 months)',
      department: 'Engineering',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. We\'re building the future of predictive maintenance for rail, roads, and critical infrastructure. Work alongside our CV team to improve detection accuracy and build novel algorithms. Perfect for students passionate about applying deep learning to real-world problems. You\'ll contribute to production systems used on tracks across the country.',
      required: [
        'Currently pursuing BS/MS in CS, EE, or related field',
        'Strong foundation in machine learning and computer vision',
        'Proficiency in Python and at least one DL framework',
        'Coursework or projects in image processing/CV',
        'Strong problem-solving and communication skills'
      ],
      preferred: [
        'Personal projects or research in computer vision',
        'Experience with OpenCV, YOLO, or similar tools',
        'Kaggle competitions or ML hackathon participation',
        'GitHub portfolio demonstrating coding skills',
        'Interest in robotics or autonomous systems'
      ]
    },
    {
      id: 'mechatronics-engineer',
      title: 'Mechatronics Engineer',
      location: 'On-site',
      type: 'Full-time',
      department: 'Hardware',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. We\'re turning every revenue vehicle into a smart inspection platform. Design and build the complete Scout hardware system—from mechanical enclosures to embedded firmware. You\'ll integrate sensors, motors, and electronics into ruggedized pods that survive harsh railway environments while delivering precise measurements.',
      required: [
        '2+ years experience in mechatronics or robotics',
        'Strong mechanical design skills (CAD, FEA, prototyping)',
        'Proficiency in C/C++ for embedded systems',
        'Experience with sensors (cameras, LIDAR, IMU, GPS)',
        'Bachelor\'s degree in Mechatronics, Robotics, ME, or EE'
      ],
      preferred: [
        'Experience with ruggedized outdoor robotics systems',
        'Knowledge of sensor calibration and fusion algorithms',
        'Familiarity with power systems and thermal management',
        'Experience with manufacturing and DFM principles',
        'Understanding of vibration analysis and shock testing'
      ]
    },
    {
      id: 'mechanical-intern',
      title: 'Mechanical Engineering Intern',
      location: 'On-site',
      type: 'Internship (3-6 months)',
      department: 'Hardware',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. We\'re building ruggedized hardware for the harshest environments. Help design the physical Scout pods that withstand vibration, weather, and constant motion. You\'ll work on CAD modeling, prototyping, and field testing—seeing your designs deployed on real trains.',
      required: [
        'Currently pursuing BS/MS in Mechanical Engineering',
        'Proficiency in CAD software (SolidWorks, Fusion 360, etc.)',
        'Understanding of materials, tolerances, and manufacturing',
        'Strong attention to detail and documentation skills',
        'Ability to work hands-on with prototypes'
      ],
      preferred: [
        'Experience with 3D printing and rapid prototyping',
        'Knowledge of vibration analysis or ruggedized design',
        'Familiarity with electronics enclosures and thermal management',
        'Previous internship or co-op experience',
        'Interest in robotics or mechatronics'
      ]
    },
    {
      id: 'full-stack-dev',
      title: 'Full Stack Developer',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. We\'re building the future of predictive maintenance for rail and roads. Build the cloud platform and mobile apps that field crews rely on. You\'ll create intuitive interfaces for complex data, real-time dashboards, and notification systems that save lives and infrastructure.',
      required: [
        '2+ years full-stack web development experience',
        'Strong proficiency in React, TypeScript, and Node.js',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Knowledge of RESTful APIs and database design',
        'Understanding of responsive and mobile-first design'
      ],
      preferred: [
        'Experience with mapping libraries (Mapbox, Leaflet)',
        'Knowledge of React Native for mobile development',
        'Familiarity with real-time data (WebSockets, SSE)',
        'DevOps experience (Docker, CI/CD, monitoring)',
        'Understanding of data visualization (D3.js, Recharts)'
      ]
    },
    {
      id: 'founders-office',
      title: 'Founder\'s Office Intern',
      location: 'Onsite / Hybrid',
      type: 'Internship (3-6 months)',
      department: 'Operations',
      description: 'Scout Robotics (formerly Sahay AI) is revolutionizing infrastructure inspection with autonomous AI-powered systems. Our vision is to create a world where infrastructure failures are predicted and prevented before they happen. Work directly with the founding team on high-impact projects across product, sales, and strategy. This is a unique opportunity to wear many hats, learn startup operations, and shape the direction of a growing company.',
      required: [
        'Currently pursuing Bachelor\'s or Master\'s degree (any field)',
        'Exceptional communication and organizational skills',
        'Self-starter with ability to manage ambiguity',
        'Strong analytical thinking and problem-solving',
        'Passion for startups and technology'
      ],
      preferred: [
        'Previous startup or entrepreneurial experience',
        'Familiarity with product management or business ops',
        'Experience with data analysis (Excel, SQL, Python)',
        'Interest in infrastructure, transportation, or AI',
        'Demonstrated leadership in student organizations'
      ]
    }
  ];

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="pt-24 min-h-screen bg-scout-dark text-white">
      {/* Careers Header */}
      <div className="bg-black py-20 md:py-32 relative overflow-hidden border-b border-white/10">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-scout-dark to-transparent"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Build the Future of Infrastructure</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join a team solving real problems in critical infrastructure. We're looking for talented engineers, operators, and visionaries to help transform how the world inspects, maintains, and optimizes its rail and road networks.
            </p>
         </div>
      </div>

      {/* Why Work Here */}
      <div className="py-20 bg-[#0F172A] border-b border-white/5">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                          <span className="text-3xl">👥</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Operator First</h3>
                      <p className="text-slate-400">We don't just write code. We ride the trains and walk the track to understand our users.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                          <span className="text-3xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Move Fast, Fix Things</h3>
                      <p className="text-slate-400">Infrastructure is aging. We work with urgency to deploy solutions that make it safer today.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400">
                          <span className="text-3xl">❤️</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Safety Above All</h3>
                      <p className="text-slate-400">Our technology exists to protect lives. We take that responsibility seriously in everything we build.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-slate-400 mb-12">
              Like a role below? Send your resume to <a href="mailto:careers@scoutrobo.com" className="text-scout-primary hover:underline">careers@scoutrobotics.com</a>.
              <br />
              Don't see one? Reach out & let's talk!
            </p>

            <div className="space-y-4">
              {jobPostings.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#0F172A] border border-white/10 rounded-xl overflow-hidden hover:border-scout-primary/50 transition-all"
                >
                  {/* Job Header - Always Visible */}
                  <div
                    className="p-6 cursor-pointer flex items-center justify-between group hover:bg-white/[0.02] transition-all duration-200"
                    onClick={() => toggleRole(job.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-scout-primary transition-colors">{job.title}</h3>
                        <span className="text-xs font-mono text-scout-primary bg-scout-primary/10 px-3 py-1 rounded-full group-hover:bg-scout-primary/20 transition-colors">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 text-slate-400 group-hover:text-scout-primary transition-colors">
                      {expandedRole === job.id ? (
                        <ChevronUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
                      ) : (
                        <ChevronDown className="w-6 h-6 group-hover:translate-y-[2px] transition-transform" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Job Details */}
                  {expandedRole === job.id && (
                    <div className="border-t border-white/5 p-6 bg-black/20 space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-mono text-scout-primary uppercase tracking-wider mb-3">
                          About the Role
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Required Qualifications */}
                      <div>
                        <h4 className="text-sm font-mono text-scout-primary uppercase tracking-wider mb-3">
                          Required Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {job.required.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-slate-300">
                              <span className="text-scout-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preferred Qualifications */}
                      <div>
                        <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3">
                          Preferred Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {job.preferred.map((pref, index) => (
                            <li key={index} className="flex items-start gap-2 text-slate-400">
                              <span className="text-slate-600 mt-1">•</span>
                              <span>{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Application Form */}
                      <div className="pt-6 border-t border-white/5">
                        <h4 className="text-sm font-mono text-scout-primary uppercase tracking-wider mb-4">
                          Apply for this position
                        </h4>
                        
                        {submittedRole === job.id ? (
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                            <div className="text-green-400 text-4xl mb-4">✓</div>
                            <h5 className="text-white font-bold mb-2">Application Details Copied!</h5>
                            <p className="text-slate-300 text-sm mb-4">
                              Your application details have been copied to your clipboard.
                            </p>
                            <p className="text-slate-400 text-sm mb-4">
                              Please email them to: <a href="mailto:careers@scoutrobotics.com" className="text-scout-primary hover:underline font-bold">careers@scoutrobotics.com</a>
                            </p>
                            <button
                              onClick={() => setSubmittedRole(null)}
                              className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                              Submit Another Application
                            </button>
                          </div>
                        ) : (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const formData = new FormData(e.currentTarget);
                              const applicationText = `Application for ${job.title}

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Resume Link: ${formData.get('resume')}
Fun Fact: ${formData.get('funFact') || 'N/A'}
What excites me about Scout: ${formData.get('excitement')}

Please send this to: careers@scoutrobotics.com`;

                              try {
                                await navigator.clipboard.writeText(applicationText);
                                setSubmittedRole(job.id);
                                // Auto-hide success message after 30 seconds
                                setTimeout(() => setSubmittedRole(null), 30000);
                              } catch (err) {
                                // Fallback if clipboard fails
                                alert(`Please email your application to careers@scoutrobotics.com\n\n${applicationText}`);
                              }
                            }}
                            className="space-y-4"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                required
                                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-scout-primary"
                              />
                              <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                required
                                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-scout-primary"
                              />
                            </div>
                            <input
                              type="text"
                              name="resume"
                              placeholder="Resume Link (Google Drive (public), Dropbox, or Portfolio URL) *"
                              required
                              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-scout-primary"
                            />
                            <textarea
                              name="funFact"
                              placeholder="Tell us something fun you do outside of work "
                              rows={2}
                              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-scout-primary resize-none"
                            />
                            <textarea
                              name="excitement"
                              placeholder="In one line: What excites you about Scout Robotics?"
                              rows={2}
                              required
                              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-scout-primary resize-none"
                            />
                            <button
                              type="submit"
                              className="w-full bg-scout-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                              <Send className="w-5 h-5" />
                              Copy & Prepare Application
                            </button>
                            <p className="text-xs text-slate-500 text-center">
                              This will copy your application details to your clipboard, then you can paste and send via email.
                            </p>
                          </form>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;