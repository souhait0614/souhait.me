"use client"

import { makeNoteContent } from "../_makeNoteContent"
import ComponentPostButton from "../../_components/PostButton"

import { souhaitoGachaResultAtom, souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"

import { memo, useMemo } from "react"
import { useAtomValue } from "jotai"

const PostButton = () => {
  const result = useAtomValue(souhaitoGachaResultAtom)
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const postUrl = useMemo(() => {
    const url = new URL(`https://${selectedServerHost}/share`)
    url.searchParams.set("text", makeNoteContent(result ?? ["", "", ""]))
    return url
  }, [selectedServerHost, result])
  return (
    <ComponentPostButton
      loading={!selectedServerHost}
      serverHost={selectedServerHost ?? ""}
      postUrl={postUrl.toString()}
    />
  )
}

export default memo(PostButton)
