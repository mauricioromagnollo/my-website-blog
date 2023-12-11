import 'server-only'

import type { Locale } from '@/config'

const dictionaries = {
  'en-US': () => import('@/dictionaries/en-US.json').then(module => module.default),
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then(module => module.default),
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}
