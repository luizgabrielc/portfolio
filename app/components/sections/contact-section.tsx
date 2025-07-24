"use client"

import { ContactForm } from "@/app/components/contact-form"
import { Mail, Phone, MapPin, Clock, Users, Award } from "lucide-react"
import MotionContainer from "@/app/components/animations/motion-container"
import MotionItem from "@/app/components/animations/motion-item"
import { motion } from "framer-motion"

const contactInfo = [
  { icon: Mail, title: "Email", info: "seu.email@gmail.com" },
  { icon: Phone, title: "WhatsApp", info: "+55 (11) 99999-9999" },
  { icon: MapPin, title: "Localização", info: "São Paulo, Brasil" },
  { icon: Clock, title: "Horário de Atendimento", info: "Segunda à Sexta: 9h às 18h" },
]

const stats = [
  { icon: Users, number: "80+", label: "Clientes Felizes" },
  { icon: Award, number: "20+", label: "Projetos" },
  { icon: Clock, number: "5+", label: "Anos" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-all duration-500 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <MotionContainer className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 transition-colors duration-300">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 text-lg">
            Vamos trabalhar juntos! Entre em contato comigo através do formulário abaixo ou pelas minhas redes sociais.
          </p>
        </MotionContainer>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <MotionContainer className="mb-8">
                <h3 className="text-3xl font-bold transition-colors duration-300">Informações de Contato</h3>
              </MotionContainer>
              <MotionItem className="space-y-8">
                {contactInfo.map((contact, index) => (
                  <motion.div key={index} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl transition-colors duration-300">{contact.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                        {contact.info}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </MotionItem>
            </div>

            {/* Stats */}
            <MotionItem className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/30 rounded-lg transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-800/50"
                >
                  <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-3 transition-colors duration-300" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-3xl font-bold transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 text-base transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </MotionItem>
          </div>

          {/* Contact Form */}
          <MotionContainer className="flex items-center justify-center">
            <h3 className="text-3xl font-bold mb-8 transition-colors duration-300">Envie uma Mensagem</h3>
            <ContactForm />
          </MotionContainer>
        </div>
      </div>
    </section>
  )
}
