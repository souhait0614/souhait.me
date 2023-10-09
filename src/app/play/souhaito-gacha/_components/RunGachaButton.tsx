"use client"

import { presetEmojiMap } from "../_presetEmojiMap"

import { souhaitoGachaResultAtom, souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"
import { Button } from "@/app/_components/Button"
import { randomValue } from "@/app/_util"

import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"

import type { ComponentPropsWithRef } from "react"

const raffle = (arr: readonly string[]) => arr[randomValue(0, arr.length - 1)] ?? ""

const RunGachaButton = (props: ComponentPropsWithRef<"button">) => {
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const setGachaResult = useSetAtom(souhaitoGachaResultAtom)

  const [firstRun, setFirstRun] = useState(false)
  const emojiMap = useMemo(() => new Map([...presetEmojiMap]), [])

  const gacha = useCallback(() => {
    if (!selectedServerHost) {
      setGachaResult(null)
      return
    }
    const candidateEmojisList = emojiMap.get(selectedServerHost)
    if (!candidateEmojisList) {
      setGachaResult(null)
      return
    }
    const resultEmojis = candidateEmojisList.map((candidateEmojis) => raffle(candidateEmojis)) as [
      string,
      string,
      string,
    ]
    setGachaResult(resultEmojis)
  }, [emojiMap, selectedServerHost, setGachaResult])

  useEffect(() => {
    if (!selectedServerHost || firstRun) return
    setFirstRun(true)
    gacha()
  }, [firstRun, gacha, selectedServerHost])

  return <Button {...props} onClick={gacha} />
}

export default memo(RunGachaButton)
