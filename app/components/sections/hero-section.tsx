"use client";

import Image from "next/image";
import { Button } from "@/shadcnui/ui/button";
import { HireMeModal } from "@/app/components/hire-me-modal";
import { Github, Instagram, Linkedin } from "lucide-react";
import MotionContainer from "@/app/components/animations/motion-container";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-6 py-16 bg-gray-900 dark:bg-gray-950 text-white transition-all duration-500 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <MotionContainer className="flex flex-col gap-4">
            <p className="text-gray-400 mb-2 transition-colors duration-300 text-2xl">
              Olá, sou
            </p>
            <p className="text-gray-300 text-5xl mb-2 transition-colors duration-300">
              Luiz Gabriel
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-orange-500 mb-12 transition-all duration-300">
              Desenvolvedor Full Stack
            </h1>

            {/* Social Icons */}
            <div className="flex gap-6 mb-12">
              <Link href="https://www.instagram.com/luizgabriel.dev/" target="_blank" className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/luizgabrieldev/" target="_blank" className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200" />
              </Link>
              <Link href="https://github.com/luizgabrieldev" target="_blank" className="w-12 h-12 border border-gray-600 dark:border-gray-500 rounded flex items-center justify-center hover:border-orange-500 transition-all duration-300 cursor-pointer">
                <Github className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors duration-200" />
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 mb-16">
              <HireMeModal>
                <Button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 text-lg transition-all duration-200 hover:shadow-lg">
                  Contrate-me
                </Button>
              </HireMeModal>
              <Button
                variant="outline"
                className="border-gray-600 dark:border-gray-500 text-gray-300 hover:border-orange-500 hover:text-orange-500 px-10 py-4 text-lg bg-transparent transition-all duration-200"
              >
                Baixe meu CV
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-12">
              <div className="text-left">
                <div className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300">
                  5+
                </div>
                <div className="text-gray-400 text-base transition-colors duration-300">
                  Experiences
                </div>
              </div>
              <div className="w-px h-16 bg-gray-600 dark:bg-gray-500 transition-colors duration-300"></div>
              <div className="text-left">
                <div className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300">
                  20+
                </div>
                <div className="text-gray-400 text-base transition-colors duration-300">
                  Project done
                </div>
              </div>
              <div className="w-px h-16 bg-gray-600 dark:bg-gray-500 transition-colors duration-300"></div>
              <div className="text-left">
                <div className="text-4xl font-bold text-orange-500 mb-2 transition-colors duration-300">
                  80+
                </div>
                <div className="text-gray-400 text-base transition-colors duration-300">
                  Happy Clients
                </div>
              </div>
            </div>
          </MotionContainer>
        </div>
        <MotionContainer className="flex justify-center">
          <Image
            src="/placeholder.svg?height=600&width=450"
            alt="Front-End Developer"
            width={450}
            height={600}
            className="rounded-lg"
          />
        </MotionContainer>
      </div>
    </section>
  );
}
