import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

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
      id: 'cv-intern',
      title: 'Computer Vision',
      location: 'Onsite',
      type: 'Internship (3-6 months)',
      department: 'Engineering',
      description: 'Scout Robotics is building next-generation autonomous inspection systems for rail and critical infrastructure. As an intern, you\'ll help explore computer vision ideas, build prototypes, and learn how perception systems move from experimentation into real-world deployment. This role is ideal for current students who want hands-on experience working on applied AI with a fast-moving robotics team.',
      required: [
        'Currently pursuing BS/MS in CS, EE, Robotics, or related field',
        'Strong foundation in machine learning and computer vision',
        'Proficiency in Python and at least one deep learning framework',
        'Coursework or projects in image processing, object detection, or segmentation',
        'Strong problem-solving and communication skills'
      ],
      preferred: [
        'Personal projects, research, or coursework in computer vision',
        'Experience with OpenCV, YOLO, or similar tools',
        'Kaggle competitions or ML hackathon participation',
        'GitHub portfolio demonstrating coding skills',
        'Interest in robotics or autonomous systems'
      ]
    },
    {
      id: 'cv-full-time',
      title: 'Computer Vision',
      location: 'Onsite',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Scout Robotics is building next-generation autonomous inspection systems for rail and critical infrastructure. In this full-time role, you\'ll own and improve perception systems that support real deployments, working across model development, evaluation, and integration with hardware and field operations. This is a strong fit for engineers with production experience who want to build reliable computer vision systems at scale.',
      required: [
        '2+ years experience in computer vision, machine learning, or applied AI',
        'Strong Python skills with PyTorch, TensorFlow, or similar frameworks',
        'Experience with object detection, segmentation, or classification',
        'Practical experience optimizing models for edge or real-time inference',
        'Bachelor\'s or Master\'s degree in CS, EE, Robotics, or related field',
        'Experience working with large datasets, training pipelines, and model evaluation'
      ],
      preferred: [
        'Experience deploying computer vision systems in production',
        'Familiarity with embedded systems or edge hardware',
        'Experience with real-time video processing',
        'Knowledge of ROS or robotics frameworks',
        'Track record of shipping high-impact ML systems',
        'Familiarity with OpenCV, ONNX, CUDA, or deployment tooling'
      ]
    },
    {
      id: 'robotics-hardware-intern',
      title: 'Robotics Hardware',
      location: 'Onsite',
      type: 'Internship (3-6 months)',
      department: 'Hardware',
      description: 'Scout Robotics is building rugged autonomous systems for real-world deployment in harsh environments. As an intern, you\'ll support mechanical design, prototyping, and hardware testing while learning how product ideas become reliable field systems. This is a great fit for current students who want hands-on experience building robotics hardware.',
      required: [
        'Currently pursuing BS/MS in Robotics, Mechatronics, Mechanical, EE, or related field',
        'Familiarity with CAD tools and prototyping workflows',
        'Interest in hardware integration, electronics, and testing',
        'Comfort working hands-on with physical systems',
        'Strong curiosity and ability to learn quickly'
      ],
      preferred: [
        'Coursework or projects in mechanical design or embedded systems',
        'Experience with 3D printing, rapid prototyping, or lab testing',
        'Interest in ruggedized robotics or field deployment',
        'Experience with sensors, enclosures, or electronics',
        'Ability to collaborate across engineering disciplines'
      ]
    },
    {
      id: 'robotics-hardware-full-time',
      title: 'Robotics Hardware',
      location: 'Onsite',
      type: 'Full-time',
      department: 'Hardware',
      description: 'Scout Robotics is building rugged autonomous systems for real-world deployment in harsh environments. In this full-time role, you\'ll own hardware development work that directly impacts field reliability, from mechanical design and sensor integration to prototyping and testing. This position is intended for engineers with industry experience who can help build robust robotics systems at scale.',
      required: [
        '2+ years experience in robotics, mechatronics, or hardware engineering',
        'Strong mechanical design skills with CAD and prototyping',
        'Experience integrating sensors, electronics, and embedded systems',
        'Comfort working hands-on with hardware and test setups',
        'Bachelor\'s degree in Robotics, Mechatronics, Mechanical, EE, or related field',
        'Experience validating hardware through testing, iteration, and field feedback'
      ],
      preferred: [
        'Experience with ruggedized outdoor robotics systems',
        'Familiarity with power systems, thermal management, or enclosure design',
        'Knowledge of sensor calibration or embedded firmware',
        'Experience with manufacturing and design-for-test principles',
        'Interest in autonomous systems or field deployment',
        'Hands-on experience with lab equipment, prototyping tools, or test benches'
      ]
    },
    {
      id: 'robotics-software-intern',
      title: 'Robotics Software',
      location: 'Onsite',
      type: 'Internship (3-6 months)',
      department: 'Engineering',
      description: 'Scout Robotics is building autonomous systems that combine perception, control, and real-world sensing. As an intern, you\'ll support robotics software development in areas such as perception, navigation, or control while learning how production code is built and tested in a robotics environment. This is a strong fit for current students who want to grow their software skills in a hands-on robotics setting.',
      required: [
        'Currently pursuing BS/MS in CS, EE, Robotics, or related field',
        'Strong Python or C++ fundamentals',
        'Hands-on familiarity with ROS 2, Linux, or robotics frameworks',
        'Experience with computer vision concepts such as object detection, segmentation, or classification',
        'Interest in perception, planning, or embedded systems'
      ],
      preferred: [
        'Coursework or projects in robotics, autonomy, or computer vision',
        'Experience with PyTorch, TensorFlow, OpenCV, or similar tools',
        'Understanding of model optimization for edge devices',
        'Experience with Git and software development workflows',
        'Previous internship or research experience in robotics',
        'Curiosity about edge AI and real-time systems'
      ]
    },
    {
      id: 'robotics-software-full-time',
      title: 'Robotics Software',
      location: 'Onsite',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Scout Robotics is building autonomous systems that combine perception, control, and real-world sensing. In this full-time role, you\'ll help develop and ship robotics software for real deployments, working on perception, navigation, and control systems that support field operations. This role is designed for engineers with industry experience who can contribute to production-grade robotics software.',
      required: [
        '2+ years experience in robotics software, autonomy, or embedded systems',
        'ROS 2 expertise: hands-on experience with ROS 2 is a core requirement for this role',
        'Strong Python and C++ skills, with experience using PyTorch or TensorFlow',
        'Experience with object detection, segmentation, or classification',
        'Solid understanding of model optimization for edge devices',
        'Bachelor\'s or Master\'s degree in Robotics, Computer Science, Electrical Engineering, or a related field',
        'Experience building and debugging real-time robotics or perception pipelines'
      ],
      preferred: [
        'Experience with embedded systems such as NVIDIA Jetson or Raspberry Pi',
        'Experience with real-time video processing',
        'Experience with containerization using Docker or Podman',
        'Familiarity with Git and software development workflows',
        'Previous experience shipping robotics or autonomy software in industry',
        'Experience with OpenCV, Linux, or robotics middleware',
        'Comfort working across software, hardware, and field integration teams'
      ]
    },
    {
      id: 'founders-office-intern',
      title: 'Founder\'s Office',
      location: 'Onsite',
      type: 'Internship (3-6 months)',
      department: 'Operations',
      description: 'Scout Robotics is building a company that can move fast and solve hard problems in critical infrastructure. As an intern, you\'ll support the founding team on projects across operations, strategy, and execution while learning how a startup works from the inside. This role is ideal for current students who want to build business and leadership experience in a high-growth environment.',
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
    },
    {
      id: 'founders-office-full-time',
      title: 'Founder\'s Office',
      location: 'Onsite',
      type: 'Full-time',
      department: 'Operations',
      description: 'Scout Robotics is building a company that can move fast and solve hard problems in critical infrastructure. In this full-time role, you\'ll help drive high-impact initiatives across operations, strategy, and cross-functional execution with the founding team. This position is designed for professionals with startup or operations experience who can take ownership and help shape company growth.',
      required: [
        '2+ years experience in startup operations, business operations, strategy, or a related function',
        'Exceptional communication and organizational skills',
        'Self-starter with ability to manage ambiguity',
        'Strong analytical thinking and problem-solving',
        'Bachelor\'s degree or equivalent experience',
        'Experience supporting cross-functional execution in fast-moving teams'
      ],
      preferred: [
        'Previous startup or entrepreneurial experience',
        'Familiarity with product management or business ops',
        'Experience with data analysis (Excel, SQL, Python)',
        'Interest in infrastructure, transportation, or AI',
        'Demonstrated leadership in fast-paced environments',
        'Comfort working directly with founders and senior stakeholders'
      ]
    }
  ];

  const internships = jobPostings.filter((job) => job.type.includes('Internship'));
  const fullTimeRoles = jobPostings.filter((job) => job.type === 'Full-time');

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  const renderJobCard = (job: JobPosting) => (
    <div
      key={job.id}
      className="bg-[#0F172A] border border-white/10 rounded-xl overflow-hidden hover:border-scout-primary/50 transition-all"
    >
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

      {expandedRole === job.id && (
        <div className="border-t border-white/5 p-6 bg-black/20 space-y-6">
          <div>
            <h4 className="text-sm font-mono text-scout-primary uppercase tracking-wider mb-3">
              About the Role
            </h4>
            <p className="text-slate-300 leading-relaxed">{job.description}</p>
          </div>

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
                  Please email them to: <a href="mailto:careers@scoutrobo.com" className="text-scout-primary hover:underline font-bold">careers@scoutrobo.com</a>
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

Please send this to: careers@scoutrobo.com`;

                  try {
                    await navigator.clipboard.writeText(applicationText);
                    setSubmittedRole(job.id);
                    setTimeout(() => setSubmittedRole(null), 30000);
                  } catch (err) {
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
                  className="bg-scout-primary hover:bg-scout-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );

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
              Like a role below? Send your resume to <a href="mailto:careers@scoutrobo.com" className="text-scout-primary hover:underline">careers@scoutrobo.com</a>.
              <br />
              Don't see one? Reach out & let's talk!
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Internships</h3>
                  <span className="text-sm text-slate-400">{internships.length} roles</span>
                </div>
                <div className="space-y-4">
                  {internships.map((job) => renderJobCard(job))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Full-time Positions</h3>
                  <span className="text-sm text-slate-400">{fullTimeRoles.length} roles</span>
                </div>
                <div className="space-y-4">
                  {fullTimeRoles.map((job) => renderJobCard(job))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;