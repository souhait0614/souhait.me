"use client"

import { presetEmojiMapIds } from "../_presetEmojiMap"

import { souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"

import { memo } from "react"
import { useAtom } from "jotai"

import type { ComponentProps } from "react"

const ServerHostSelector = (props: ComponentProps<"select">) => {
  const [selectedServerHost, setSelectedServerHost] = useAtom(souhaitoGachaSelectedServerHostAtom)
  const hosts = [...presetEmojiMapIds]

  return (
    <select
      {...props}
      value={selectedServerHost}
      onChange={({ target: { value } }) => {
        setSelectedServerHost(value as (typeof presetEmojiMapIds)[number])
      }}
    >
      {!selectedServerHost && <option value="">未選択</option>}
      {hosts.map((host) => (
        <option key={host} value={host}>
          {host}
        </option>
      ))}
    </select>
  )
}

export default memo(ServerHostSelector)
