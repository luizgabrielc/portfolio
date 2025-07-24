"use client"

import { Header } from "@/app/components/header"
import { ScrollToTopButton } from "@/app/components/scroll-to-top-button"
import { HeroSection } from "@/app/components/sections/hero-section"
import { ServicesSection } from "@/app/components/sections/services-section"
import { AboutSection } from "@/app/components/sections/about-section"
import { PortfolioSection } from "@/app/components/sections/portfolio-section"
import { ContactSection } from "@/app/components/sections/contact-section"
import { FooterSection } from "@/app/components/sections/footer-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out">

      {/* Header */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Sections */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  )
}
