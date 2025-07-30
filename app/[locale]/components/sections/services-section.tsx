"use client"

import MotionContainer from "@/app/[locale]/components/animations/motion-container"
import MotionItem from "@/app/[locale]/components/animations/motion-item"
import { useTranslations } from "next-intl"
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaVial, FaMobile, FaLightbulb } from "react-icons/fa"

// Custom icon component for full stack
const FullStackIcon = () => (
  <div className="relative w-full h-full">
    <FaReact className="absolute inset-0 w-full h-full text-orange-500" />
    <FaNodeJs className="absolute inset-0 left-10 w-full h-full text-orange-500 opacity-60" />
  </div>
)

export function ServicesSection() {
  const t = useTranslations('services')
  
  const services = [
    {
      icon: FullStackIcon,
      title: t('fullStackApplications.title'),
      description: t('fullStackApplications.description'),
    },
    {
      icon: FaMobile,
      title: t('mobileDevelopment.title'),
      description: t('mobileDevelopment.description'),
    },
    {
      icon: FaLightbulb,
      title: t('technologyConsulting.title'),
      description: t('technologyConsulting.description'),
    },
    {
      icon: FaDatabase,
      title: t('databaseDesign.title'),
      description: t('databaseDesign.description'),
    },
    {
      icon: FaAws,
      title: t('devOpsDeployment.title'),
      description: t('devOpsDeployment.description'),
    },
    {
      icon: FaVial,
      title: t('testing.title'),
      description: t('testing.description'),
    },
  ]
  return (
    <section
      id="services"
      className="px-4 sm:px-6 py-16 sm:py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-12 sm:mb-16">
          <MotionItem delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              {t('title')}
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base sm:text-lg transition-colors duration-300 px-4">
              {t('subtitle')}
            </p>
          </MotionItem>
        </MotionContainer>
        
        <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" delay={0.3}>
          {services.map((service, index) => (
            <MotionItem key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800/30 p-6 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-500 mb-6 sm:mb-8 transition-all duration-300 group-hover:text-orange-600 flex items-center justify-center">
                  <service.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  )
}
