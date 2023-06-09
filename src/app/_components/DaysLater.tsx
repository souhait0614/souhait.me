"use client"

import { getDaysLater } from "../_util"

interface DaysLaterProps {
  month: number
  day: number
}
const DaysLater = ({ month, day }: DaysLaterProps) => <span>{getDaysLater(month, day)}日後</span>

export default DaysLater
