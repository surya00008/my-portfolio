import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { CreatorSection } from '../components/CreatorSection'
import { SkillsSection } from '../components/SkillsSection'
import { Projects } from '../components/Projects'
import { PublicationsSection } from '../components/PublicationsSection'
import { CertificationsSection } from '../components/CertificationsSection'
import { ContactMe } from '../components/ContactMe'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutMe/>
          <CreatorSection/>
          <SkillsSection/>
          <Projects/>
          <PublicationsSection/>
          <CertificationsSection/>
          <ContactMe/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home