"use client"

import { presetEmojiMapIds } from "../_presetEmojiMap"

import { souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"

import { memo, useState } from "react"
import { useAtom } from "jotai"
import { useMount } from "react-use"

import type { ComponentProps } from "react"

const ServerHostSelector = (props: ComponentProps<"select">) => {
  const [selectedServerHost, setSelectedServerHost] = useAtom(souhaitoGachaSelectedServerHostAtom)
  const hosts = [...presetEmojiMapIds]
  const [showEmptyOption, setShowEmptyOption] = useState(true)

  useMount(() => {
    setShowEmptyOption(false)
  })

  return (
    <select
      {...props}
      value={selectedServerHost}
      onChange={({ target: { value } }) => {
        setSelectedServerHost(value as (typeof presetEmojiMapIds)[number])
      }}
    >
      {showEmptyOption && <option value=""></option>}
      {hosts.map((host) => (
        <option key={host} value={host}>
          {host}
        </option>
      ))}
    </select>
  )
}

export default memo(ServerHostSelector)
