import HeroSection from './HeroSection'
import TechStackSection from './TechStackSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'
import ContactSection from './ContactSection'

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
