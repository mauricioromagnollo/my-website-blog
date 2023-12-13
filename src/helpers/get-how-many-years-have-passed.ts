export function getHowManyYearsHavePassed(desiredDate: Date): number {
  const today = new Date()

  const currentDay = today.getDate()
  const currentMonth = today.getMonth() + 1
  const currentYear = today.getFullYear()

  const desiredDay = desiredDate.getDate()
  const desiredMonth = desiredDate.getMonth() + 1
  const desiredYear = desiredDate.getFullYear()

  let numberOfYearsPassed = currentYear - desiredYear

  if (currentMonth < desiredMonth) {
    numberOfYearsPassed--
  }

  if (currentMonth === desiredMonth && currentDay < desiredDay) {
    numberOfYearsPassed--
  }

  return numberOfYearsPassed
}
