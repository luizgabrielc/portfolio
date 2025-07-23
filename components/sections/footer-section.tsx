"use client"

import { smoothScrollTo, scrollToTop } from "@/components/smooth-scroll"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import MotionContainer from "@/components/animations/motion-container"
import MotionItem from "@/components/animations/motion-item"
import { motion } from "framer-motion"

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
    <footer className="px-6 py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white transition-all duration-500 min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <MotionContainer className="text-3xl font-bold text-orange-500 mb-8 cursor-pointer transition-transform duration-200 inline-block">
            <motion.div
              onClick={scrollToTop}
            >
              LOGO
            </motion.div>
          </MotionContainer>
          <MotionItem className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={item.action}
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-200 text-lg"
              >
                {item.label}
              </motion.button>
            ))}
          </MotionItem>
          <MotionItem className="flex justify-center space-x-6 mb-8">
            {socialIcons.map((Icon, index) => (
              <motion.div key={index}>
                <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-orange-500 cursor-pointer transition-all duration-200" />
              </motion.div>
            ))}
          </MotionItem>
          <MotionContainer className="text-gray-600 dark:text-gray-400 transition-colors duration-300 text-lg">
            <p>
              © 2023 Muhammad Umair All Rights Reserved , Inc.
            </p>
          </MotionContainer>
        </div>
      </div>
    </footer>
  )
}
