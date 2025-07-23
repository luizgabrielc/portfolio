"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HireMeModal } from "@/components/hire-me-modal"
import { Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import MotionContainer from "@/components/animations/motion-container"
import MotionItem from "@/components/animations/motion-item"

export function HeroSection() {
  return (
    <section className="px-6 py-16 bg-gray-900 dark:bg-gray-950 text-white transition-all duration-500 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <MotionItem>
            <p className="text-gray-400 mb-2 transition-colors duration-300 text-lg">Olá, sou</p>
            <p className="text-gray-300 text-2xl mb-4 transition-colors duration-300">Luiz Gabriel</p>
            <h1 className="text-6xl md:text-7xl font-bold text-orange-500 mb-12 transition-all duration-300">
              Desenvolvedor Front-End
            </h1>

            {/* Social Icons */}
            <div className="flex gap-6 mb-12">
              <motion.div className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200" />
              </motion.div>
              <motion.div className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200" />
              </motion.div>
              <motion.div className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.173 4.71C13.882 14.146 12.285 14.784 10.4 14.784c-.407 0-.814-.024-1.22-.073l.537-1.531c.204.012.407.018.61.018 1.22 0 2.355-.407 3.433-1.22.814-.61 1.4-1.531 1.756-2.756l-4.067 1.161-.537-1.531 5.69-1.625c.073.407.11.814.11 1.22 0 .537-.073 1.074-.22 1.598l1.531-.537c.169-.61.256-1.244.256-1.903 0-3.347-2.71-6.057-6.057-6.057S5.943 8.653 5.943 12c0 3.347 2.71 6.057 6.057 6.057.814 0 1.598-.159 2.33-.452l.537 1.531c-.896.366-1.858.55-2.867.55C5.374 19.686 0 14.312 0 7.686S5.374-4.314 12-4.314s12 5.374 12 12c0 .537-.037 1.074-.11 1.598l-1.531.537c.073-.524.11-1.061.11-1.598 0-2.867-2.33-5.197-5.197-5.197S6.803 9.133 6.803 12s2.33 5.197 5.197 5.197c.61 0 1.195-.11 1.744-.317l.537 1.531c-.696.281-1.44.427-2.22.427-3.347 0-6.057-2.71-6.057-6.057s2.71-6.057 6.057-6.057c2.867 0 5.197 2.33 5.197 5.197 0 .537-.073 1.061-.22 1.574z" />
                </svg>
              </motion.div>
              <motion.div className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 4.5h11v15h-11v-15zm2 2v11h7v-11h-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 mb-16">
              <HireMeModal>
                <Button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 text-lg transition-all duration-200 hover:shadow-lg">
                  Hire Me
                </Button>
              </HireMeModal>
              <Button
                variant="outline"
                className="border-gray-600 dark:border-gray-500 text-gray-300 hover:border-orange-500 hover:text-orange-500 px-10 py-4 text-lg bg-transparent transition-all duration-200"
              >
                Download CV
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-12">
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300"
                >
                  5+
                </motion.div>
                <div className="text-gray-400 text-base transition-colors duration-300">Experiences</div>
              </div>
              <div className="w-px h-16 bg-gray-600 dark:bg-gray-500 transition-colors duration-300"></div>
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300"
                >
                  20+
                </motion.div>
                <div className="text-gray-400 text-base transition-colors duration-300">Project done</div>
              </div>
              <div className="w-px h-16 bg-gray-600 dark:bg-gray-500 transition-colors duration-300"></div>
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300"
                >
                  80+
                </motion.div>
                <div className="text-gray-400 text-base transition-colors duration-300">Happy Clients</div>
              </div>
            </div>
          </MotionItem>
        </div>
        <MotionContainer className="flex justify-center">
          <Image
            src="/placeholder.svg?height=600&width=450"
            alt="Front-End Developer"
            width={450}
            height={600}
            className="rounded-lg transition-all duration-300 hover:scale-105"
          />
        </MotionContainer>
      </div>
    </section>
  )
}
