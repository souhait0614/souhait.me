import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { presetEmojiMapIds } from "./play/souhaito-gacha/_presetEmojiMap"

export const souhaitoGachaSelectedServerHostAtom = atomWithStorage<
  (typeof presetEmojiMapIds)[number] | ""
>("souhaito-gacha_selected-server-host", "")

export const souhaitoGachaResultAtom = atom<[string, string, string] | null>(null)
