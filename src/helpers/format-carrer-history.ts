import { Months } from "@/constants";
import { getYearsAndMonthsPassed } from "@/helpers";

export function formatCarrerHistory(history: string, dictionary: any, lang?: string) {
  const firstJobAsDeveloperDate = new Date(2021, Months.May, 1)
  const { years, months } = getYearsAndMonthsPassed(firstJobAsDeveloperDate)

  let beginHistory =
    `${dictionary.words.have} ${years} ${dictionary.words.year}${years > 1 ? 's' : ''}` +
    (months > 0 ? ` ${dictionary.words.and} ${months} ${dictionary.words.month}${months > 1 ? (lang === 'pt-BR') ? 'es' : 's' : ''}` : '')

  if (lang === 'pt-BR' && months > 1) {
    beginHistory = beginHistory.replace('mêses', 'meses')
  }

  return `${beginHistory} ${history}`
}
