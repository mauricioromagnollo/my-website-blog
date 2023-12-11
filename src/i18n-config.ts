export const i18n = {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR', 'en-US']
} as const

export type Locale = typeof i18n.locales[number]

export const flagMap: Record<Locale, string> = {
  'pt-BR': '🇧🇷',
  'en-US': '🇺🇸'
}

export const localeName: Record<Locale, string> = {
  'pt-BR': 'Português',
  'en-US': 'English'
}
