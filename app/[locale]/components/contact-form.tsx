"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/shadcnui/ui/button"
import { Card, CardContent } from "@/shadcnui/ui/card"
import { Input } from "@/shadcnui/ui/input"
import { Textarea } from "@/shadcnui/ui/textarea"
import { Label } from "@/shadcnui/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcnui/ui/select"
import { MessageCircle, Mail, Briefcase, Clock, DollarSign, User, Building, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

interface ContactFormProps {
  variant?: "modal" | "section"
  onClose?: () => void
}

export function ContactForm({ variant = "section", onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendToWhatsApp = () => {
    const { name, email, company, projectType, budget, timeline, subject, message } = formData

    if (!name || !email || !message) {
      toast.error("Por favor, preencha os campos obrigatórios (Nome, Email e Mensagem).", {
        description: "Todos os campos marcados com * são obrigatórios.",
        duration: 4000,
      })
      return
    }

    const whatsappMessage = `*NOVA MENSAGEM*

*Nome:* ${name}
*Email:* ${email}
${company ? `*Empresa:* ${company}` : ""}
${subject ? `*Assunto:* ${subject}` : ""}

${projectType ? `*Tipo de Projeto:* ${projectType}` : ""}
${budget ? `*Orçamento:* ${budget}` : ""}
${timeline ? `*Prazo:* ${timeline}` : ""}

*Descrição do Projeto:*
${message}

---
Enviado através do portfólio`

    const phoneNumber = "5598992472146" // Número fornecido pelo usuário
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    toast.success("Redirecionando para o WhatsApp...", {
      description: "A mensagem será enviada automaticamente.",
      duration: 3000,
    })

    window.open(whatsappUrl, "_blank")
    if (onClose) onClose()
  }

  const sendToEmail = () => {
    const { name, email, company, projectType, budget, timeline, subject, message } = formData

    if (!name || !email || !message) {
      toast.error("Por favor, preencha os campos obrigatórios (Nome, Email e Mensagem).", {
        description: "Todos os campos marcados com * são obrigatórios.",
        duration: 4000,
      })
      return
    }

    const emailSubject = subject || `Contato através do portfólio - ${name}`
    const emailBody = `Olá!

Meu nome é ${name} e gostaria de entrar em contato.

INFORMAÇÕES DO CONTATO:
Nome: ${name}
Email: ${email}
${company ? `Empresa: ${company}` : ""}

${projectType ? `Tipo de Projeto: ${projectType}` : ""}
${budget ? `Orçamento Estimado: ${budget}` : ""}
${timeline ? `Prazo Desejado: ${timeline}` : ""}

DESCRIÇÃO DO PROJETO:
${message}

---
Enviado através do portfólio.`

    const mailtoUrl = `mailto:gabrielca.dev@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    toast.success("Abrindo cliente de email...", {
      description: "A mensagem será preenchida automaticamente.",
      duration: 3000,
    })

    window.location.href = mailtoUrl
    if (onClose) onClose()
  }

  const isModal = variant === "modal"

  return (
    <Card className={`${isModal ? 'bg-white dark:bg-gray-900' : 'bg-white/50 dark:bg-gray-800/50'} border-gray-200 dark:border-gray-700 transition-all duration-300 w-full ${isModal ? 'max-w-2xl' : 'lg:max-w-lg mx-auto'}`}>
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Cabeçalho */}
          {!isModal && (
            <motion.div className="text-center mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Preencha o formulário abaixo e entrarei em contato em breve.
              </p>
            </motion.div>
          )}

          {/* Campos básicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome Completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 text-sm sm:text-base"
                required
              />
            </motion.div>
            <motion.div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 text-sm sm:text-base"
                required
              />
            </motion.div>
          </div>

          {/* Empresa e Tipo de Projeto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div>
              <Label htmlFor="company" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <Building className="w-4 h-4" />
                Empresa (opcional)
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div>
              <Label htmlFor="projectType" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Tipo de Projeto
              </Label>
              <Select value={formData.projectType} onValueChange={(value) => handleSelectChange("projectType", value)}>
                <SelectTrigger className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-orange-500 text-sm sm:text-base w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Website Completo">Website Completo</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Sistema de Gestão">Sistema de Gestão</SelectItem>
                  <SelectItem value="Dashboard">Dashboard</SelectItem>
                  <SelectItem value="Aplicação Mobile">Aplicação Mobile</SelectItem>
                  <SelectItem value="Integração de Sistemas">Integração de Sistemas</SelectItem>
                  <SelectItem value="Otimização de Performance">Otimização de Performance</SelectItem>
                  <SelectItem value="Consultoria Técnica">Consultoria Técnica</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          {/* Orçamento e Prazo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div>
              <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Orçamento Estimado
              </Label>
              <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                <SelectTrigger className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-orange-500 text-sm sm:text-base w-full">
                  <SelectValue placeholder="Selecione a faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="R$ 1.000 - R$ 5.000">R$ 1.000 - R$ 5.000</SelectItem>
                  <SelectItem value="R$ 5.000 - R$ 10.000">R$ 5.000 - R$ 10.000</SelectItem>
                  <SelectItem value="R$ 10.000 - R$ 20.000">R$ 10.000 - R$ 20.000</SelectItem>
                  <SelectItem value="R$ 20.000 - R$ 50.000">R$ 20.000 - R$ 50.000</SelectItem>
                  <SelectItem value="Acima de R$ 50.000">Acima de R$ 50.000</SelectItem>
                  <SelectItem value="Vamos conversar">Vamos conversar</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div>
              <Label htmlFor="timeline" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Prazo Desejado
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                <SelectTrigger className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-orange-500 text-sm sm:text-base w-full">
                  <SelectValue placeholder="Selecione o prazo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Urgente (1-2 semanas)">Urgente (1-2 semanas)</SelectItem>
                  <SelectItem value="1 mês">1 mês</SelectItem>
                  <SelectItem value="2-3 meses">2-3 meses</SelectItem>
                  <SelectItem value="3-6 meses">3-6 meses</SelectItem>
                  <SelectItem value="Mais de 6 meses">Mais de 6 meses</SelectItem>
                  <SelectItem value="Flexível">Flexível</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          {/* Assunto */}
          <motion.div>
            <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
              Assunto (opcional)
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Assunto da mensagem"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 text-sm sm:text-base"
            />
          </motion.div>

          {/* Mensagem */}
          <motion.div>
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Mensagem *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descreva seu projeto, objetivos, dúvidas ou qualquer informação relevante..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 min-h-[120px] resize-none text-sm sm:text-base"
              required
            />
          </motion.div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.div className="flex-1">
              <Button
                onClick={sendToWhatsApp}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2 w-full text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar via WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </Button>
            </motion.div>
            <motion.div className="flex-1">
              <Button
                onClick={sendToEmail}
                className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 w-full text-sm sm:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar por Email</span>
                <span className="sm:hidden">Email</span>
              </Button>
            </motion.div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center">
            * Campos obrigatórios
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
