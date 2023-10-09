export const getDaysLater = (month: number, day: number) => {
  const now = new Date()
  const birthDay = new Date()
  birthDay.setMonth(month - 1, day)
  const diff = Math.round((birthDay.getTime() - now.getTime()) / 86400000)
  return diff < 0 ? diff + 365 : diff
}

export const randomValue = (min: number, max: number) => {
  const [randomBuffer] = crypto.getRandomValues(new Uint32Array(1))
  const randomNumber = randomBuffer! / (0xffffffff + 1)

  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(randomNumber * (max - min + 1)) + min
}
