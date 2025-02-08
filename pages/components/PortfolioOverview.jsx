import React, { memo, useCallback } from 'react';
import { GithubIcon, BookOpen, Users, FolderGit2 } from 'lucide-react';
import { SiGoogle, SiIbm, SiMeta } from 'react-icons/si';

// Memoize static components to prevent unnecessary re-renders
const Badge = memo(({ children, className }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>
    {children}
  </div>
));

const Card = memo(({ children, className }) => (
  <div className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl ${className}`}>
    {children}
  </div>
));

const CertificationsGrid = memo(({ certifications, certIcons }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {certifications.map((cert) => {
      const IconComponent = certIcons[cert.provider];
      return (
        <Card key={cert.provider} className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
            <IconComponent className="w-6 h-6 text-white/80" />
          </div>
          <div className="min-w-0">
            <div className="text-3xl font-bold text-white truncate">x{cert.count}</div>
            <div className="text-sm text-white/60 truncate">{cert.provider} Certified</div>
          </div>
        </Card>
      );
    })}
  </div>
));

const GitHubStats = memo(() => (
  <div className="grid grid-cols-1 gap-4">
    <Card className="p-6 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
        <GithubIcon className="w-6 h-6 text-white/80" />
      </div>
      <div className="min-w-0">
        <div className="text-3xl font-bold text-white truncate">500+</div>
        <div className="text-sm text-white/60 truncate">Commits</div>
      </div>
    </Card>
    <Card className="p-6 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
        <FolderGit2 className="w-6 h-6 text-white/80" />
      </div>
      <div className="min-w-0">
        <div className="text-3xl font-bold text-white truncate">40+</div>
        <div className="text-sm text-white/60 truncate">Repositories</div>
      </div>
    </Card>
  </div>
));

const ClientsAndProjects = memo(({ clientCount }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <Card className="p-6 flex items-center gap-4 h-full">
      <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
        <Users className="w-6 h-6 text-white/80" />
      </div>
      <div className="min-w-0">
        <div className="text-2xl sm:text-3xl font-bold text-white truncate">{clientCount}</div>
        <div className="text-sm text-white/60 truncate">Clients</div>
      </div>
    </Card>
    <Card className="p-6 flex items-center gap-4 h-full">
      <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
        <BookOpen className="w-6 h-6 text-white/80" />
      </div>
      <div className="min-w-0">
        <div className="text-2xl sm:text-3xl font-bold text-white truncate">20+</div>
        <div className="text-sm text-white/60 truncate">Total Projects</div>
      </div>
    </Card>
  </div>
));

export default function PortfolioOverview() {
  const certifications = [
    { provider: "Google", count: 5 },
    { provider: "Meta", count: 7 },
    { provider: "IBM", count: 8 },
  ];

  const certIcons = {
    Google: SiGoogle,
    IBM: SiIbm,
    Meta: SiMeta,
  };

  const clientCount = 4;

  return (
    <main className="text-white flex items-start sm:items-center justify-center pt-4 pb-2">
      <div className="w-full sm:p-8 mx-auto grid grid-cols-1 gap-6 md:gap-12 md:max-w-[1400px]">
        <div className="grid gap-6">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
            <Card className="p-6 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <h1 className="text-4xl md:text-7xl font-extralight tracking-tight leading-[1.1] relative z-10">
                My Life as <br /> a Developer <br /> at a Glance
              </h1>
            </Card>
            
            {/* GitHub Stats */}
            <GitHubStats />
          </div>
          
          {/* Certifications Grid */}
          <CertificationsGrid certifications={certifications} certIcons={certIcons} />
          
          {/* Clients and Projects */}
          <ClientsAndProjects clientCount={clientCount} />
        </div>
      </div>
    </main>
  );
}