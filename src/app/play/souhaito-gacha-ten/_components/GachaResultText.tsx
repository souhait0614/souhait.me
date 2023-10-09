"use client"
import * as styles from "./GachaResultText.css"

import { getEmojis } from "../../_util/souhait-gacha/getEmojis"

import { souhaitoGachaSelectedServerHostAtom, souhaitoGachaTenResultAtom } from "@/app/_atom"

import { useAtomValue } from "jotai"
import { memo } from "react"
import { useAsync } from "react-use"

const GachaResult = () => {
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const results = useAtomValue(souhaitoGachaTenResultAtom)

  const { value = [], loading } = useAsync(async () => {
    if (!selectedServerHost) return []
    return getEmojis(selectedServerHost)
  }, [selectedServerHost])

  return loading ? (
    <span>絵文字を読み込み中</span>
  ) : (
    <>
      {results ? (
        results.map((result) => (
          <p key={crypto.randomUUID()} className={styles.resultText}>
            {result.map((emojiName) => {
              const url = value.find(({ name }) => `:${name}:` === emojiName)?.url
              return url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={crypto.randomUUID()}
                  src={url}
                  alt={emojiName}
                  className={styles.emoji}
                  height="2em"
                />
              ) : (
                <span key={crypto.randomUUID()}>{emojiName}</span>
              )
            })}
          </p>
        ))
      ) : (
        <span>- - -</span>
      )}
    </>
  )
}

export default memo(GachaResult)
