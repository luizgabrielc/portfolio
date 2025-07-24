"use client"

import { Button } from "@/shadcnui/ui/button"
import ThemeToggle from "@/app/components/theme-toggle"
import { HireMeModal } from "@/app/components/hire-me-modal"
import { smoothScrollTo, scrollToTop } from "@/app/components/smooth-scroll"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", action: scrollToTop },
    { name: "Services", action: () => smoothScrollTo("services") },
    { name: "About me", action: () => smoothScrollTo("about") },
    { name: "Portfolio", action: () => smoothScrollTo("portfolio") },
    { name: "Contact Us", action: () => smoothScrollTo("contact") },
  ]

  const handleNavClick = (action: () => void) => {
    action()
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-orange-500 cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={scrollToTop}
        >
          LOGO
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.action()}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-all duration-200 hover:scale-105"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <HireMeModal>
              <Button className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Contrate-me
              </Button>
            </HireMeModal>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.action)}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <HireMeModal>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-200 mt-2">
                Contrate-me
              </Button>
            </HireMeModal>
          </div>
        </div>
      )}
    </header>
  )
}
