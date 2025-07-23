"use client"

import MotionContainer from "@/components/animations/motion-container"
import MotionItem from "@/components/animations/motion-item"
import { motion } from "framer-motion"

const services = [
  {
    icon: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z",
    title: "App Design",
    description: "Criação de interfaces intuitivas e experiências excepcionais para aplicativos móveis.",
  },
  {
    icon: "M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16Z",
    title: "Mobile Design",
    description: "Design responsivo e otimizado para dispositivos móveis com foco na usabilidade.",
  },
  {
    icon: "M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z",
    title: "Web Design",
    description: "Desenvolvimento de websites modernos e funcionais com design atrativo e responsivo.",
  },
  {
    icon: "M7.5 5.6L10 7L8.6 4.5L10 2L7.5 3.4L5 2L6.4 4.5L5 7L7.5 5.6ZM19.5 15.4L17 14L18.4 16.5L17 19L19.5 17.6L22 19L20.6 16.5L22 14L19.5 15.4ZM22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2ZM13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78ZM14.37 7.29L16.71 9.63C17.1 10.02 17.1 10.65 16.71 11.04L11.04 16.71C10.65 17.1 10.02 17.1 9.63 16.71L7.29 14.37L9.4 12.26L10.78 13.64L13.64 10.78L12.26 9.4L14.37 7.29ZM5 19L7.5 17.6L10 19L8.6 16.5L10 14L7.5 15.4L5 14L6.4 16.5L5 19Z",
    title: "Graphic Design",
    description: "Criação de identidade visual, logotipos e materiais gráficos impactantes.",
  },
  {
    icon: "M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z",
    title: "Development",
    description: "Desenvolvimento front-end e back-end com as mais modernas tecnologias.",
  },
  {
    icon: "M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z",
    title: "Branding",
    description: "Estratégia de marca completa, desde conceito até implementação visual.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg transition-colors duration-300">
            Ofereço soluções completas em design e desenvolvimento, desde a concepção até a implementação final do seu
            projeto.
          </p>
        </MotionContainer>
        <MotionItem className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800/30 p-10 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300"
            >
              <div className="w-16 h-16 text-orange-500 mb-8 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </MotionItem>
      </div>
    </section>
  )
}
