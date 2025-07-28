"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shadcnui/ui/dialog"
import { Briefcase } from "lucide-react"
import { ContactForm } from "./contact-form"

interface HireMeModalProps {
  children: React.ReactNode
}

export function HireMeModal({ children }: HireMeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent border-none p-0">
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-500" />
              Vamos trabalhar juntos!
            </DialogTitle>
          </DialogHeader>

          <div className="p-4">
            <ContactForm variant="modal" onClose={handleClose} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
