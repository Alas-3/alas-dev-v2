import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import CertificateShowcase from './components/CertificatesSection'

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificateShowcase />
    </div>
  )
}
