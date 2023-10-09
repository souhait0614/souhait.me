"use client"
import * as styles from "./GachaResultText.css"

import { presetEmojiMap } from "../../_util/souhait-gacha/presetEmojiMap"

import { souhaitoGachaResultAtom, souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"

import { useAtomValue } from "jotai"
import { memo, useMemo } from "react"
import { useAsync } from "react-use"

import type { CustomEmoji } from "misskey-js/built/entities"
import type { RequestBody } from "@/types/api/misskey-emojis"

const GachaResult = () => {
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const result = useAtomValue(souhaitoGachaResultAtom)

  const emojiMap = useMemo(() => new Map([...presetEmojiMap]), [])

  const { value = [], loading } = useAsync(async () => {
    if (!selectedServerHost) return []
    const body: RequestBody = {
      serverHost: selectedServerHost,
      emojiNames: emojiMap.get(selectedServerHost)?.flat() ?? [],
    }
    const emojis: Pick<CustomEmoji, "name" | "url">[] = await fetch("/api/misskey-emojis", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "force-cache",
    }).then((res) => res.json())
    return emojis
  }, [emojiMap, selectedServerHost])

  return loading ? (
    <span>絵文字を読み込み中</span>
  ) : (
    <>
      {result ? (
        result.map((emojiName, i) => {
          const key = `${i}_${emojiName}`
          const url = value.find(({ name }) => `:${name}:` === emojiName)?.url
          return url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={key} src={url} alt={emojiName} className={styles.emoji} height="2em" />
          ) : (
            <span key={key}>{emojiName}</span>
          )
        })
      ) : (
        <span>- - -</span>
      )}
    </>
  )
}

export default memo(GachaResult)
