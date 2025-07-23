"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import MotionContainer from "@/components/animations/motion-container"
import MotionItem from "@/components/animations/motion-item"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce React App",
    category: "Web Design",
    description: "Aplicação completa de e-commerce com carrinho de compras, pagamentos e sistema de usuários.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "TypeScript", "Redux", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "App Design",
    description: "Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Vuex", "Socket.io", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    category: "Web Design",
    description: "Dashboard para análise de redes sociais com gráficos interativos e métricas em tempo real.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Chart.js", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "App Design",
    description: "Aplicativo de delivery de comida com geolocalização e sistema de avaliações.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Expo", "Google Maps API", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Personalizado",
    category: "Web Design",
    description: "Portfolio interativo com animações e seções dinâmicas para desenvolvedores.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Framer Motion", "GSAP", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Chat Application",
    category: "App Design",
    description: "Aplicativo de chat em tempo real com suporte a grupos e arquivos.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Socket.io", "Material UI", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    category: "Web Design",
    description: "Dashboard meteorológico com previsões detalhadas e visualizações interativas.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    category: "App Design",
    description: "App de acompanhamento fitness com gamificação e integração com wearables.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "HealthKit", "Realm", "Lottie"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Music Streaming Interface",
    category: "App Design",
    description: "Interface moderna para aplicativo de streaming de música com playlists personalizadas.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Flutter", "Spotify API", "Bloc Pattern", "Hive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Real Estate Platform",
    category: "Web Design",
    description: "Plataforma imobiliária com busca avançada e tours virtuais 360°.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Learning Management System",
    category: "Web Design",
    description: "Sistema de gestão de aprendizagem com cursos online e certificados.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Crypto Portfolio Tracker",
    category: "App Design",
    description: "Aplicativo para acompanhamento de portfólio de criptomoedas em tempo real.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "CoinGecko API", "AsyncStorage", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Web Design", "App Design", "Mobile Apps", "Progressive Web Apps"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
      className="px-6 py-20 bg-white dark:bg-gray-900 transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 mb-10 text-lg">
            Explore alguns dos meus projetos mais recentes e descubra como posso ajudar a transformar suas ideias em
            realidade.
          </p>

          {/* Category Filter */}
          <MotionItem className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div key={category}>
                <Button
                  onClick={() => handleCategoryChange(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`transition-all duration-200 px-6 py-3 text-base ${
                    activeCategory === category
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 bg-transparent"
                  }`}
                >
                  {category}
                </Button>
              </div>
            ))}
          </MotionItem>
        </MotionContainer>

        {/* Projects Grid - Simplified with only fade-in animations */}
        <MotionItem className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {currentProjects.map((project) => (
            <div key={project.id}>
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black transition-colors duration-200 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 transition-colors duration-200"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 text-base transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
          ))}
        </MotionItem>

        {/* Pagination */}
        {totalPages > 1 && (
          <MotionContainer className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`w-12 h-12 transition-all duration-200 ${
                    currentPage === page
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 bg-transparent"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent transition-all duration-200"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </MotionContainer>
        )}

        {/* Results Info */}
        <MotionContainer className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-base transition-colors duration-300">
            Mostrando {startIndex + 1}-{Math.min(startIndex + projectsPerPage, filteredProjects.length)} de{" "}
            {filteredProjects.length} projetos
            {activeCategory !== "All" && ` em ${activeCategory}`}
          </p>
        </MotionContainer>
      </div>
    </section>
  )
}
