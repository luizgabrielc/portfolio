"use client";

import {
  smoothScrollTo,
  scrollToTop,
} from "@/app/[locale]/components/smooth-scroll";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MotionContainer from "@/app/[locale]/components/animations/motion-container";
import MotionItem from "@/app/[locale]/components/animations/motion-item";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const socialIcons = [
  {
    icon: FaGithub,
    url: "https://github.com/luizgabrielc",
    label: "GitHub"
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/luizgc.araujo",
    label: "Instagram"
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/dev-luiz-gabriel",
    label: "LinkedIn"
  }
];

export function FooterSection() {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const navItems = [
    { name: t("home"), action: scrollToTop },
    { name: t("services"), action: () => smoothScrollTo("services") },
    { name: t("about"), action: () => smoothScrollTo("about") },
    { name: t("portfolio"), action: () => smoothScrollTo("portfolio") },
    { name: t("contact"), action: () => smoothScrollTo("contact") },
  ];
  return (
    <footer className="px-4 sm:px-6 py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white transition-all duration-500 min-h-[40vh] sm:min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <MotionContainer className="mb-6" delay={0.1}>
            <MotionItem delay={0.1}>
              <motion.div
                onClick={scrollToTop}
                className="text-2xl sm:text-3xl font-bold text-orange-500 cursor-pointer inline-block"
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo-portfolio.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </motion.div>
            </MotionItem>
          </MotionContainer>

          <MotionContainer
            className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12 mb-6"
            delay={0.2}
          >
            {navItems.map((item, index) => (
              <MotionItem key={index} delay={index * 0.1}>
                <motion.button
                  onClick={item.action}
                  className="text-gray-700 cursor-pointer dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-all text-sm lg:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              </MotionItem>
            ))}
          </MotionContainer>

          <MotionContainer
            className="flex justify-center space-x-4 sm:space-x-6 mb-6"
            delay={0.3}
          >
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <MotionItem key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="block"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-400 hover:text-orange-500 cursor-pointer transition-all duration-200" />
                    </Link>
                  </motion.div>
                </MotionItem>
              );
            })}
          </MotionContainer>

          <MotionContainer
            className="text-gray-600 dark:text-gray-400 transition-colors duration-300 text-sm sm:text-base lg:text-lg"
            delay={0.4}
          >
            <MotionItem delay={0.1}>
              <p className="px-4">© 2025 Luiz Gabriel {tCommon("rights")}</p>
            </MotionItem>
          </MotionContainer>
        </div>
      </div>
    </footer>
  );
}
