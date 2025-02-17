import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ServicesSection from "./components/ServicesSection"
import CertificateShowcase from './components/CertificatesSection'
import CtaSection from "./components/CtaSection"

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificateShowcase />
      <CtaSection />
    </div>
  )
}
