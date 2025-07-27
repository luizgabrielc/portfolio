"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/shadcnui/ui/button"
import { Card } from "@/shadcnui/ui/card"
import { Badge } from "@/shadcnui/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import MotionContainer from "@/app/[locale]/components/animations/motion-container"
import MotionItem from "@/app/[locale]/components/animations/motion-item"
import { useTranslations } from "next-intl"
import Link from "next/link"

interface Project {
  id: number
  titleKey: string
  category: string
  descriptionKey: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: "ecommerce",
    category: "fullstack",
    descriptionKey: "ecommerce",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "TypeScript", "Redux", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    titleKey: "taskManagement",
    category: "fullstack",
    descriptionKey: "taskManagement",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Vuex", "Socket.io", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    titleKey: "socialDashboard",
    category: "fullstack",
    descriptionKey: "socialDashboard",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Chart.js", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    titleKey: "foodDelivery",
    category: "mobile",
    descriptionKey: "foodDelivery",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Expo", "Google Maps API", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    titleKey: "portfolio",
    category: "frontend",
    descriptionKey: "portfolio",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Framer Motion", "GSAP", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    titleKey: "chatApp",
    category: "fullstack",
    descriptionKey: "chatApp",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Socket.io", "Material UI", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    titleKey: "weatherDashboard",
    category: "frontend",
    descriptionKey: "weatherDashboard",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    titleKey: "fitnessTracking",
    category: "mobile",
    descriptionKey: "fitnessTracking",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "HealthKit", "Realm", "Lottie"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    titleKey: "musicStreaming",
    category: "mobile",
    descriptionKey: "musicStreaming",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Flutter", "Spotify API", "Bloc Pattern", "Hive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    titleKey: "realEstate",
    category: "fullstack",
    descriptionKey: "realEstate",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    titleKey: "learningSystem",
    category: "fullstack",
    descriptionKey: "learningSystem",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    titleKey: "cryptoTracker",
    category: "mobile",
    descriptionKey: "cryptoTracker",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "CoinGecko API", "AsyncStorage", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const t = useTranslations('portfolio')
  
  const categories = [
    { key: "all", label: t('categories.all') },
    { key: "fullstack", label: t('categories.fullstack') },
    { key: "frontend", label: t('categories.frontend') },
    { key: "backend", label: t('categories.backend') },
    { key: "mobile", label: t('categories.mobile') }
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section
      id="portfolio"
      className="px-4 sm:px-6 py-16 sm:py-20 bg-white dark:bg-gray-900 transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-12 sm:mb-16">
          <MotionItem delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              {t('title')}
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg px-4">
              {t('subtitle')}
            </p>
          </MotionItem>

          {/* Category Filter */}
          <MotionContainer className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12" delay={0.3}>
            {categories.map((category, index) => (
              <MotionItem key={category.key} delay={index * 0.1}>
                <div>
                  <Button
                    onClick={() => handleCategoryChange(category.key)}
                    variant={activeCategory === category.key ? "default" : "outline"}
                    className={`transition-all duration-200 px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base ${
                      activeCategory === category.key
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 bg-transparent"
                    }`}
                  >
                    {category.label}
                  </Button>
                </div>
              </MotionItem>
            ))}
          </MotionContainer>
        </MotionContainer>

        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <MotionContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16" delay={0.4}>
            {currentProjects.map((project, index) => (
              <MotionItem key={project.id} delay={index * 0.1}>
                <div>
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={t(`projects.${project.titleKey}.title`)}
                        width={400}
                        height={300}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300"
                      />
                                          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                      {project.liveUrl && (
                        <Link 
                          href={project.liveUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          {t('viewProject')}
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-lg transition-all duration-200 text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <FaGithub className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          {t('viewCode')}
                        </Link>
                      )}
                    </div>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 transition-colors duration-200 text-xs"
                        >
                          {t(`categories.${project.category}`)}
                        </Badge>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                        {t(`projects.${project.titleKey}.title`)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base transition-colors duration-300">
                        {t(`projects.${project.descriptionKey}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </MotionItem>
            ))}
          </MotionContainer>
        ) : (
          <MotionContainer className="text-center py-16 sm:py-20" delay={0.4}>
            <MotionItem delay={0.1}>
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {t(`categories.${activeCategory}`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors duration-300">
                  {t('noProjects')}
                </p>
              </div>
            </MotionItem>
          </MotionContainer>
        )}

        {/* Pagination */}
        {totalPages > 1 && currentProjects.length > 0 && (
          <MotionContainer className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8" delay={0.5}>
            <MotionItem delay={0.1}>
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent transition-all duration-200 text-xs sm:text-sm"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {t('pagination.previous')}
              </Button>
            </MotionItem>

            <MotionContainer className="flex gap-1 sm:gap-2" delay={0.2}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, index) => (
                <MotionItem key={page} delay={index * 0.05}>
                  <Button
                    onClick={() => handlePageChange(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className={`w-8 h-8 sm:w-12 sm:h-12 transition-all duration-200 text-xs sm:text-sm ${
                      currentPage === page
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 bg-transparent"
                    }`}
                  >
                    {page}
                  </Button>
                </MotionItem>
              ))}
            </MotionContainer>

            <MotionItem delay={0.3}>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent transition-all duration-200 text-xs sm:text-sm"
              >
                {t('pagination.next')}
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
            </MotionItem>
          </MotionContainer>
        )}

        {/* Results Info */}
        {currentProjects.length > 0 && (
          <MotionContainer className="text-center" delay={0.6}>
            <MotionItem delay={0.1}>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base transition-colors duration-300 px-4">
                {t('pagination.showing')} {startIndex + 1}-{Math.min(startIndex + projectsPerPage, filteredProjects.length)} {t('pagination.of')}{" "}
                {filteredProjects.length} {t('pagination.projects')}
                {activeCategory !== "all" && ` ${t('pagination.in')} ${t(`categories.${activeCategory}`)}`}
              </p>
            </MotionItem>
          </MotionContainer>
        )}
      </div>
    </section>
  )
}
