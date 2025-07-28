"use client"

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/shadcnui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcnui/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Image from "next/image"

const languages = [
  { code: 'pt', name: 'Português', flag: '/countries/BR.svg' },
  { code: 'en', name: 'English', flag: '/countries/US.svg' },
  { code: 'es', name: 'Español', flag: '/countries/ES.svg' },
]

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('common')

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500"
        >
          {currentLanguage ? (
            <Image
              src={currentLanguage.flag}
              alt={`${currentLanguage.name} flag`}
              width={20}
              height={15}
              className="rounded-sm"
            />
          ) : (
            <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
          <span className="sr-only">{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer ${
              locale === language.code
                ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <Image
              src={language.flag}
              alt={`${language.name} flag`}
              width={20}
              height={15}
              className="mr-2 rounded-sm"
            />
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 