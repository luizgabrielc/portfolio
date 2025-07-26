"use client"

import { ContactForm } from "@/app/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import MotionContainer from "@/app/components/animations/motion-container"
import MotionItem from "@/app/components/animations/motion-item"
import { motion } from "framer-motion"

const contactInfo = [
  { icon: Mail, title: "Email", info: "gabrielca.dev@gmail.com" },
  { icon: Phone, title: "WhatsApp", info: "+55 (98) 99247-2146" },
  { icon: MapPin, title: "Localização", info: "São Luís, Brasil" },
  { icon: Clock, title: "Horário de Atendimento", info: "Segunda à Sexta: 9h às 18h" },
]


export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-16 sm:py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-12 sm:mb-16">
          <MotionItem delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-colors duration-300">Contact Us</h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 text-sm sm:text-base lg:text-lg px-4">
              Vamos trabalhar juntos! Entre em contato comigo através do formulário abaixo ou pelas minhas redes sociais.
            </p>
          </MotionItem>
        </MotionContainer>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <MotionContainer className="mb-6 sm:mb-8" delay={0.3}>
                <MotionItem delay={0.1}>
                  <h3 className="text-2xl sm:text-3xl font-bold transition-colors duration-300">Informações de Contato</h3>
                </MotionItem>
              </MotionContainer>
              <MotionContainer className="space-y-6 sm:space-y-8" delay={0.4}>
                {contactInfo.map((contact, index) => (
                  <MotionItem key={index} delay={index * 0.1}>
                    <motion.div className="flex items-center gap-4 sm:gap-6 group">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <contact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg sm:text-xl transition-colors duration-300">{contact.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg transition-colors duration-300">
                          {contact.info}
                        </p>
                      </div>
                    </motion.div>
                  </MotionItem>
                ))}
              </MotionContainer>
            </div>

            
          </div>

          {/* Contact Form */}
          <MotionContainer className="flex flex-col items-center justify-center" delay={0.6}>
            <MotionItem delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 transition-colors duration-300">Envie uma Mensagem</h3>
            </MotionItem>
            <MotionItem delay={0.2} className="w-full">
              <ContactForm />
            </MotionItem>
          </MotionContainer>
        </div>
      </div>
    </section>
  )
}
