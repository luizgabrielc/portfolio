"use client"

import { smoothScrollTo, scrollToTop } from "@/app/components/smooth-scroll"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import MotionContainer from "@/app/components/animations/motion-container"
import MotionItem from "@/app/components/animations/motion-item"
import { motion } from "framer-motion"
import Image from "next/image"

const navigationItems = [
  { label: "Home", action: scrollToTop },
  { label: "Services", action: () => smoothScrollTo("services") },
  { label: "About me", action: () => smoothScrollTo("about") },
  { label: "Portfolio", action: () => smoothScrollTo("portfolio") },
  { label: "Contact Us", action: () => smoothScrollTo("contact") },
]

const socialIcons = [Facebook, Twitter, Instagram, Linkedin]

export function FooterSection() {
  return (
    <footer className="px-4 sm:px-6 py-12 sm:py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white transition-all duration-500 min-h-[40vh] sm:min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <MotionContainer className="mb-6 sm:mb-8" delay={0.1}>
            <MotionItem delay={0.1}>
              <motion.div
                onClick={scrollToTop}
                className="text-2xl sm:text-3xl font-bold text-orange-500 cursor-pointer inline-block"
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/logo-portfolio.svg" alt="Logo" width={40} height={40} />
              </motion.div>
            </MotionItem>
          </MotionContainer>
          
          <MotionContainer className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12 mb-6 sm:mb-8" delay={0.2}>
            {navigationItems.map((item, index) => (
              <MotionItem key={index} delay={index * 0.1}>
                <motion.button
                  onClick={item.action}
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-200 text-sm sm:text-base lg:text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              </MotionItem>
            ))}
          </MotionContainer>
          
          <MotionContainer className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8" delay={0.3}>
            {socialIcons.map((Icon, index) => (
              <MotionItem key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-400 hover:text-orange-500 cursor-pointer transition-all duration-200" />
                </motion.div>
              </MotionItem>
            ))}
          </MotionContainer>
          
          <MotionContainer className="text-gray-600 dark:text-gray-400 transition-colors duration-300 text-sm sm:text-base lg:text-lg" delay={0.4}>
            <MotionItem delay={0.1}>
              <p className="px-4">
                © 2023 Muhammad Umair All Rights Reserved , Inc.
              </p>
            </MotionItem>
          </MotionContainer>
        </div>
      </div>
    </footer>
  )
}
