"use client"

import { gacha } from "../../_util/souhaito-gacha"

import { souhaitoGachaResultAtom, souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"
import { Button } from "@/app/_components/Button"

import { memo, useCallback, useEffect, useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"

import type { ComponentPropsWithRef } from "react"

const RunGachaButton = (props: ComponentPropsWithRef<"button">) => {
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const setGachaResult = useSetAtom(souhaitoGachaResultAtom)

  const [firstRun, setFirstRun] = useState(false)

  const runGacha = useCallback(() => {
    if (!selectedServerHost) {
      setGachaResult(null)
      return
    }
    const resultEmojis = gacha(selectedServerHost)
    setGachaResult(resultEmojis)
  }, [selectedServerHost, setGachaResult])

  useEffect(() => {
    if (!selectedServerHost || firstRun) return
    setFirstRun(true)
    runGacha()
  }, [firstRun, runGacha, selectedServerHost])

  return <Button {...props} onClick={runGacha} />
}

export default memo(RunGachaButton)
