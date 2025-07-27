"use client"

import { Button } from "@/shadcnui/ui/button"
import ThemeToggle from "@/app/[locale]/components/theme-toggle"
import { HireMeModal } from "@/app/[locale]/components/hire-me-modal"
import { LanguageSelector } from "@/app/[locale]/components/language-selector"
import { smoothScrollTo, scrollToTop } from "@/app/[locale]/components/smooth-scroll"
import { useTranslations } from 'next-intl'
import { Menu } from "lucide-react"
import Image from "next/image"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shadcnui/ui/drawer"

export function Header() {
  const t = useTranslations('navigation')
  const tCommon = useTranslations('common')
  
  const navItems = [
    { name: t('home'), action: scrollToTop },
    { name: t('services'), action: () => smoothScrollTo("services") },
    { name: t('about'), action: () => smoothScrollTo("about") },
    { name: t('portfolio'), action: () => smoothScrollTo("portfolio") },
    { name: t('contact'), action: () => smoothScrollTo("contact") },
  ]

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div
          className="text-xl sm:text-2xl font-bold text-orange-500 cursor-pointer"
          onClick={scrollToTop}
        >
          <Image src="/logo-portfolio.svg" alt="Logo" width={28} height={28} className="sm:w-8 sm:h-8" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.action()}
              className="text-gray-700 cursor-pointer dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-all text-sm lg:text-base"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-3 lg:gap-4">
            <LanguageSelector />
            <ThemeToggle />
            <HireMeModal>
              <Button className="bg-orange-500 hover:bg-orange-600 transition-all hover:shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-2">
                {tCommon('hireMe')}
              </Button>
            </HireMeModal>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-4 md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 dark:text-gray-300"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">{tCommon('menu')}</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 py-4 space-y-2 sm:space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.action()}
                    className="block w-full text-left py-2 sm:py-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </button>
                ))}
                <HireMeModal>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-200 mt-3 sm:mt-4 text-sm sm:text-base py-2 sm:py-3">
                    {tCommon('hireMe')}
                  </Button>
                </HireMeModal>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
