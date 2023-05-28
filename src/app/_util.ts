export const getDaysLater = (month: number, day: number) => {
  const now = new Date()
  const birthDay = new Date()
  birthDay.setMonth(month - 1, day)
  const diff = Math.round((birthDay.getTime() - now.getTime()) / 86400000)
  return diff < 0 ? diff + 365 : diff
}
