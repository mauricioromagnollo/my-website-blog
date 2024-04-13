export function getYearsAndMonthsPassed(date: Date): { years: number; months: number } {
  const now = new Date()
  const years = now.getFullYear() - date.getFullYear()
  const months = now.getMonth() - date.getMonth()

  if (months < 0) {
    return {
      months: months * -1,
      years: years
    }
  }

  return {
    months,
    years
  }
}
