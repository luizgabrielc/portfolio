"use client"

import { Button } from "@/shadcnui/ui/button"
import { Download } from "lucide-react"

interface DownloadCVButtonProps {
  color?: "orange" | "outline"
}

export function DownloadCVButton({ color = "outline" }: DownloadCVButtonProps) {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/cv-luiz-gabriel.pdf' // Path to the PDF in public folder
    link.download = 'CV Luiz Gabriel - Desenvolvedor Full-Stack.pdf' // Name for the downloaded file
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getButtonClasses = () => {
    if (color === "orange") {
      return "bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 hover:shadow-lg w-full sm:w-auto group"
    }
    return "border-gray-600 dark:border-gray-500 text-gray-300 hover:border-orange-500 hover:text-orange-500 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-transparent transition-all duration-200 w-full sm:w-auto group"
  }

  return (
    <Button
      variant={color === "orange" ? "default" : "outline"}
      onClick={handleDownloadCV}
      className={getButtonClasses()}
    >
      <Download className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
      Baixe meu CV
    </Button>
  )
} 