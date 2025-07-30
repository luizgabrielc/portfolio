"use client";

import Image from "next/image";
import MotionContainer from "@/app/[locale]/components/animations/motion-container";
import MotionItem from "@/app/[locale]/components/animations/motion-item";
import { DownloadCVButton } from "@/app/[locale]/components/download-cv-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type skillType = { percentage: number, skill: string, icon: string, darkIcon?: string }

const skills: skillType[] = [
  { percentage: 100, skill: "React", icon: "/logos/react.png" },
  { percentage: 99, skill: "JavaScript", icon: "/logos/javascript.png" },
  { percentage: 95, skill: "TypeScript", icon: "/logos/typescript.png" },
  { percentage: 95, skill: "Next.js", icon: "/logos/nextjs.png", darkIcon: "/logos/nextjs-gray.png" },
  { percentage: 90, skill: "Node.js", icon: "/logos/nodejs.png" },
  { percentage: 85, skill: "Tailwind CSS", icon: "/logos/tailwindcss.png" },
  { percentage: 80, skill: "PostgreSQL", icon: "/logos/postgresql.png" },
  { percentage: 70, skill: "AWS", icon: "/logos/aws.png" },
  { percentage: 65, skill: "Docker", icon: "/logos/docker.png" },
  { percentage: 60, skill: "Python", icon: "/logos/python.png" },
];

export function AboutSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('about')
  useEffect(() => {
    setMounted(true);
  }, []);

  const getIconSrc = (item: skillType) => {
    if (item.skill === "Next.js" && mounted) {
      return theme === "dark" ? item.darkIcon : item.icon;
    }
    return item.icon;
  };

  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-16 sm:py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-12 sm:mb-16">
          <MotionItem delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              {t('title')}
            </h2>
          </MotionItem>
        </MotionContainer>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          <MotionContainer
            className="flex justify-center order-first lg:order-last"
            delay={0.3}
          >
            <MotionItem>
              <Image
                src="/picture-profile-animated.jpg"
                alt="About Me"
                width={500}
                height={700}
                className="rounded-lg transition-all duration-300 w-full max-w-sm lg:max-w-md xl:max-w-lg"
              />
            </MotionItem>
          </MotionContainer>
          <MotionContainer className="flex flex-col gap-4" delay={0.4}>
            
          <MotionItem delay={0.2}>
            <p className="text-gray-600 text-center dark:text-gray-400 max-w-3xl mx-auto text-base sm:text-2xl transition-colors duration-300 px-4">
              {t('subtitle')}
            </p>
          </MotionItem>
            <MotionItem delay={0.1}>
              <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-300">
                {t('description1')}
              </p>
            </MotionItem>
            <MotionItem delay={0.2}>
              <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-300">
                {t('description2')}
              </p>
            </MotionItem>
            <MotionItem delay={0.3}>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-300">
                {t('description3')}
              </p>
            </MotionItem>
            <MotionItem delay={0.4}>
              <DownloadCVButton color="orange" />
            </MotionItem>
          </MotionContainer>
        </div>

        {/* Skills Section */}
        <MotionContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 text-center"
          delay={0.5}
        >
          {skills.map((item, index) => (
            <MotionItem key={index} delay={index * 0.1}>
              <div className="group">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 transform -rotate-90"
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
                    <Image
                      src={getIconSrc(item) || ""}
                      alt={item.skill}
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300 group-hover:text-orange-500 dark:group-hover:text-orange-500">
                  {item.skill}
                </h3>
              </div>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
