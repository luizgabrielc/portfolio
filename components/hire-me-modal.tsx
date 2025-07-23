"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Mail, Briefcase, Clock, DollarSign } from "lucide-react"

interface HireMeModalProps {
  children: React.ReactNode
}

export function HireMeModal({ children }: HireMeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendToWhatsApp = () => {
    const { name, email, company, projectType, budget, timeline, description } = formData

    if (!name || !email || !description) {
      alert("Por favor, preencha os campos obrigatórios (Nome, Email e Descrição do Projeto).")
      return
    }

    const whatsappMessage = `🚀 *NOVA PROPOSTA DE PROJETO*

👤 *Cliente:* ${name}
📧 *Email:* ${email}
${company ? `🏢 *Empresa:* ${company}` : ""}

📋 *Detalhes do Projeto:*
${projectType ? `🎯 *Tipo:* ${projectType}` : ""}
${budget ? `💰 *Orçamento:* ${budget}` : ""}
${timeline ? `⏰ *Prazo:* ${timeline}` : ""}

📝 *Descrição:*
${description}

---
Enviado através do portfólio`

    const phoneNumber = "5511999999999" // Substitua pelo seu número
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const sendToEmail = () => {
    const { name, email, company, projectType, budget, timeline, description } = formData

    if (!name || !email || !description) {
      alert("Por favor, preencha os campos obrigatórios (Nome, Email e Descrição do Projeto).")
      return
    }

    const emailSubject = `Nova Proposta de Projeto - ${name}`
    const emailBody = `Olá!

Gostaria de contratar seus serviços para um projeto.

INFORMAÇÕES DO CLIENTE:
Nome: ${name}
Email: ${email}
${company ? `Empresa: ${company}` : ""}

DETALHES DO PROJETO:
${projectType ? `Tipo de Projeto: ${projectType}` : ""}
${budget ? `Orçamento Estimado: ${budget}` : ""}
${timeline ? `Prazo Desejado: ${timeline}` : ""}

DESCRIÇÃO DO PROJETO:
${description}

Aguardo seu retorno para discutirmos os detalhes.

Atenciosamente,
${name}`

    const mailtoUrl = `mailto:seu.email@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoUrl
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-orange-500" />
            Vamos trabalhar juntos!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            Preencha o formulário abaixo com os detalhes do seu projeto e entrarei em contato em breve.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Nome Completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
                required
              />
            </div>
            <div>
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
                className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Empresa (opcional)
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="projectType" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Tipo de Projeto
              </Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
              >
                <option value="">Selecione o tipo</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Web Design">Web Design</option>
                <option value="App Design">App Design</option>
                <option value="Branding">Branding</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Consultoria">Consultoria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300 mb-2 block items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Orçamento Estimado
              </Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
              >
                <option value="">Selecione a faixa</option>
                <option value="R$ 1.000 - R$ 5.000">R$ 1.000 - R$ 5.000</option>
                <option value="R$ 5.000 - R$ 10.000">R$ 5.000 - R$ 10.000</option>
                <option value="R$ 10.000 - R$ 20.000">R$ 10.000 - R$ 20.000</option>
                <option value="R$ 20.000 - R$ 50.000">R$ 20.000 - R$ 50.000</option>
                <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
                <option value="Vamos conversar">Vamos conversar</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timeline" className="text-gray-700 dark:text-gray-300 mb-2 block items-center gap-2">
                <Clock className="w-4 h-4" />
                Prazo Desejado
              </Label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
              >
                <option value="">Selecione o prazo</option>
                <option value="Urgente (1-2 semanas)">Urgente (1-2 semanas)</option>
                <option value="1 mês">1 mês</option>
                <option value="2-3 meses">2-3 meses</option>
                <option value="3-6 meses">3-6 meses</option>
                <option value="Mais de 6 meses">Mais de 6 meses</option>
                <option value="Flexível">Flexível</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-gray-700 dark:text-gray-300 mb-2 block">
              Descrição do Projeto *
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descreva seu projeto, objetivos, público-alvo e qualquer informação relevante..."
              value={formData.description}
              onChange={handleInputChange}
              className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-500 min-h-[120px] resize-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={sendToWhatsApp}
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2 flex-1 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Enviar via WhatsApp
            </Button>
            <Button
              onClick={sendToEmail}
              className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 flex-1 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Enviar por Email
            </Button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            * Campos obrigatórios. Responderei em até 24 horas.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
