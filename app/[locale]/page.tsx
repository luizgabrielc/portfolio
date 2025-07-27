"use client"

import { Header } from "@/app/[locale]/components/header"
import { ScrollToTopButton } from "@/app/[locale]/components/scroll-to-top-button"
import { HeroSection } from "@/app/[locale]/components/sections/hero-section"
import { ServicesSection } from "@/app/[locale]/components/sections/services-section"
import { AboutSection } from "@/app/[locale]/components/sections/about-section"
import { PortfolioSection } from "@/app/[locale]/components/sections/portfolio-section"
import { ContactSection } from "@/app/[locale]/components/sections/contact-section"
import { FooterSection } from "@/app/[locale]/components/sections/footer-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out">

      {/* Header */}
      <Header />
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
