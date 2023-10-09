import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { PresetEmojiMapId } from "./play/_util/souhait-gacha/presetEmojiMap"

export const souhaitoGachaSelectedServerHostAtom = atomWithStorage<PresetEmojiMapId | "">(
  "souhaito-gacha_selected-server-host",
  "",
)

export const souhaitoGachaResultAtom = atom<[string, string, string] | null>(null)
