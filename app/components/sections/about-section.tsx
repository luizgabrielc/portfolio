"use client";

import Image from "next/image";
import { Button } from "@/shadcnui/ui/button";
import { Download } from "lucide-react";
import MotionContainer from "@/app/components/animations/motion-container";
import MotionItem from "@/app/components/animations/motion-item";

const skills = [
  { percentage: 100, skill: "Figma" },
  { percentage: 100, skill: "Adobe XD" },
  { percentage: 85, skill: "Adobe Photoshop" },
  { percentage: 60, skill: "Adobe Illustrator" },
  { percentage: 70, skill: "Adobe Premiere" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg transition-colors duration-300">
            User Interface And User Experience And Also Video Editing
          </p>
        </MotionContainer>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <MotionContainer className="flex justify-center">
            <Image
              src="/placeholder.svg?height=700&width=500"
              alt="About Me"
              width={500}
              height={700}
              className="rounded-lg transition-all duration-300"
            />
          </MotionContainer>
          <MotionItem>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg transition-colors duration-300">
              A software engineer, the modern-day architect of digital realms,
              navigates the ethereal landscapes of code, sculpting intangible
              structures that shape our technological world. With fingers poised
              over keyboards like virtuoso pianists, they compose symphonies of
              logic, their minds a labyrinth of algorithms and solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg transition-colors duration-300">
              Their canvas is a screen, a vast expanse where lines of code dance
              in intricate patterns, weaving the fabric of programs and
              applications. Each keystroke is a brushstroke, crafting intricate
              architectures and breathing life into innovative designs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg transition-colors duration-300">
              In this digital atelier, they don the mantle of problem solvers,
              confronting bugs and glitches like valiant knights in an
              ever-evolving quest for perfection. Debugging becomes a noble
              pursuit, unraveling the mysteries hidden within the tangled webs
              of code designs.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-3 px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </MotionItem>
        </div>

        {/* Skills Section - Simplified with only fade-in animations */}
        <MotionItem className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {skills.map((item, index) => (
            <div key={index} className="group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#333"
                    strokeWidth="8"
                    className="transition-colors duration-300 dark:stroke-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#FF6B00"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * item.percentage) / 100}
                    className="transition-all duration-500 ease-in-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-500 transition-colors duration-300">
                    {item.percentage}%
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300 group-hover:text-orange-500">
                {item.skill}
              </h3>
            </div>
          ))}
        </MotionItem>
      </div>
    </section>
  );
}
