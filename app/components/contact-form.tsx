"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/shadcnui/ui/button"
import { Card, CardContent } from "@/shadcnui/ui/card"
import { Input } from "@/shadcnui/ui/input"
import { Textarea } from "@/shadcnui/ui/textarea"
import { Label } from "@/shadcnui/ui/label"
import { MessageCircle, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendToWhatsApp = () => {
    const { name, email, subject, message } = formData

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const whatsappMessage = `Olá! Meu nome é ${name}.

📧 Email: ${email}
${subject ? `📋 Assunto: ${subject}` : ""}

💬 Mensagem:
${message}

Enviado através do seu portfólio.`

    const phoneNumber = "5511999999999" // Substitua pelo seu número do WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const sendToEmail = () => {
    const { name, email, subject, message } = formData

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const emailSubject = subject || "Contato através do portfólio"
    const emailBody = `Olá!

Meu nome é ${name} e gostaria de entrar em contato.

Email para resposta: ${email}

Mensagem:
${message}

---
Enviado através do seu portfólio.`

    const mailtoUrl = `mailto:seu.email@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoUrl
  }

  return (
    <Card className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 transition-all duration-300">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Nome *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500"
                required
              />
            </motion.div>
            <motion.div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500"
                required
              />
            </motion.div>
          </div>

          <motion.div>
            <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 mb-2 block">
              Assunto
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Assunto da mensagem (opcional)"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500"
            />
          </motion.div>

          <motion.div>
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 mb-2 block">
              Mensagem *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descreva seu projeto ou dúvida..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 min-h-[120px] resize-none"
              required
            />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div className="flex-1">
              <Button
                onClick={sendToWhatsApp}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2 w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar via WhatsApp
              </Button>
            </motion.div>
            <motion.div className="flex-1">
              <Button
                onClick={sendToEmail}
                className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 w-full"
              >
                <Mail className="w-4 h-4" />
                Enviar por Email
              </Button>
            </motion.div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">* Campos obrigatórios</p>
        </div>
      </CardContent>
    </Card>
  )
}
