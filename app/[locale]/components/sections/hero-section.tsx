"use client";

import Image from "next/image";
import { Button } from "@/shadcnui/ui/button";
import { HireMeModal } from "@/app/[locale]/components/hire-me-modal";
import { Award, Clock, Users } from "lucide-react";
import MotionContainer from "@/app/[locale]/components/animations/motion-container";
import MotionItem from "@/app/[locale]/components/animations/motion-item";
import { DownloadCVButton } from "@/app/[locale]/components/download-cv-button";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

export function HeroSection() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  
  const stats = [
    { icon: Users, number: "80+", label: tCommon('happyClients') },
    { icon: Award, number: "20+", label: tCommon('projects') },
    { icon: Clock, number: "4+", label: tCommon('yearsOfExperience') },
  ]
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-900 dark:bg-gray-950 text-white transition-all duration-500 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div>
          <MotionContainer className="flex flex-col gap-6">
            {/* Introdução */}
            <MotionItem delay={0.1}>
              <div className="space-y-2">
                <p className="text-gray-400 transition-colors duration-300 text-lg sm:text-xl lg:text-2xl">
                  {t('title')}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-300 transition-colors duration-300">
                  {t('name')}
                </h2>
              </div>
            </MotionItem>

            {/* Título Principal */}
            <MotionItem delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 transition-all duration-300 leading-tight">
                {t('subtitle')}
              </h1>
            </MotionItem>

            {/* Descrição Convite */}
            <MotionItem delay={0.3}>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed transition-colors duration-300">
                  {t('description')}
                </p>
              </div>
            </MotionItem>

            {/* Stats */}
            <MotionContainer className="grid grid-cols-3 gap-4 sm:gap-6" delay={0.4}>
              {stats.map((stat, index) => (
                <MotionItem key={index} delay={index * 0.1}>
                  <motion.div
                    className="text-center p-4 bg-gray-800/30 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
                  >
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mx-auto mb-2 sm:mb-3 transition-colors duration-300" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-2xl sm:text-3xl font-bold transition-colors duration-300"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                </MotionItem>
              ))}
            </MotionContainer>

            {/* Buttons */}
            <MotionItem delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <HireMeModal>
                  <Button className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 hover:shadow-lg w-full sm:w-auto">
                    {tCommon('hireMe')}
                  </Button>
                </HireMeModal>
                <DownloadCVButton />
              </div>
            </MotionItem>

          </MotionContainer>
        </div>
        <MotionContainer className="flex justify-center order-first lg:order-last">
          <MotionItem>
            <Image
              src="/picture-profile.jpeg"
              alt="Front-End Developer"
              width={450}
              height={600}
              className="rounded-lg w-full max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
