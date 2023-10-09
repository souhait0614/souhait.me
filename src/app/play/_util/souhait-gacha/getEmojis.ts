import { presetEmojiMap } from "./presetEmojiMap"

import type { PresetEmojiMapId } from "./presetEmojiMap"
import type { RequestBody } from "@/types/api/misskey-emojis"
import type { CustomEmoji } from "misskey-js/built/entities"

export const getEmojis = async (selectedServerHost: PresetEmojiMapId) => {
  const body: RequestBody = {
    serverHost: selectedServerHost,
    emojiNames: [...new Set(presetEmojiMap.get(selectedServerHost)?.flat() ?? [])],
  }
  const emojis: Pick<CustomEmoji, "name" | "url">[] = await fetch("/api/misskey-emojis", {
    method: "POST",
    body: JSON.stringify(body),
    cache: "force-cache",
  }).then((res) => res.json())
  return emojis
}
