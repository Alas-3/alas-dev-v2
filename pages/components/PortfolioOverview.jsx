import React from 'react';
import { useRouter } from 'next/router';
import { GithubIcon, BookOpen, Users, FolderGit2 } from 'lucide-react';
import { SiGoogle, SiIbm, SiMeta } from 'react-icons/si';

const Badge = ({ children, className }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}>
    {children}
  </div>
);

const Card = ({ children, className }) => (
  <div className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl ${className}`}>
    {children}
  </div>
);

export default function PortfolioOverview() {
  const router = useRouter();

  const certifications = [
    { provider: "Google", count: 5 },
    { provider: "Meta", count: 6 },
    { provider: "IBM", count: 7 },
  ];

  // Map provider names to icon components
  const certIcons = {
    Google: SiGoogle,
    IBM: SiIbm,
    Meta: SiMeta,
  };

  const clientCount = 3;

  return (
    // Adjust the top and bottom padding here (current: pt-4, pb-2)
    <main className="text-white flex items-start sm:items-center justify-center pt-4 pb-2">
      {/* Container: full width on mobile, centered on desktop */}
      <div className="w-full sm:p-8 mx-auto grid grid-cols-1 gap-6 md:gap-12 md:max-w-[1400px]">
        
        {/* Main Content */}
        <div className="grid gap-6">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
            <Card className="p-6 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <h1 className="text-4xl md:text-7xl font-extralight tracking-tight leading-[1.1] relative z-10">
                 My Life as <br /> a Developer <br /> at a Glance
              </h1>
            </Card>
            
            {/* GitHub Stats */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-white/5">
                  <GithubIcon className="w-6 h-6 text-white/80" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/60">Commits</div>
                </div>
              </Card>
              <Card className="p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-white/5">
                  <FolderGit2 className="w-6 h-6 text-white/80" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">40+</div>
                  <div className="text-sm text-white/60">Repositories</div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => {
              const IconComponent = certIcons[cert.provider];
              return (
                <Card key={cert.provider} className="p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-lg bg-white/5">
                    <IconComponent className="w-8 h-8 text-white/80" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">x{cert.count}</div>
                    <div className="text-sm text-white/60">{cert.provider} Certified</div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Clients & Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-6 hover:bg-white/10 transition-colors flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <Users className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{clientCount}</div>
                <div className="text-sm text-white/60">Clients</div>
              </div>
            </Card>
            <Card className="p-6 hover:bg-white/10 transition-colors flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <BookOpen className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">11</div>
                <div className="text-sm text-white/60">Total Projects</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
