import { presetEmojiMap } from "./presetEmojiMap"

import { randomValue } from "@/app/_util"

import type { PresetEmojiMapId } from "./presetEmojiMap"

export const raffle = (arr: readonly string[]) => arr[randomValue(0, arr.length - 1)] ?? ""

export type ResultEmojis = [string, string, string]

export const gacha = (serverHost: PresetEmojiMapId) => {
  const candidateEmojisList = presetEmojiMap.get(serverHost)
  if (!candidateEmojisList) return null
  const resultEmojis = candidateEmojisList.map((candidateEmojis) => raffle(candidateEmojis))
  return resultEmojis as ResultEmojis
}
