"use client"

import { makeNoteContent } from "../_makeNoteContent"
import ComponentCopyButton from "../../_components/CopyButton"

import { souhaitoGachaTenResultAtom } from "@/app/_atom"

import { memo } from "react"
import { useAtomValue } from "jotai"

const CopyButton = () => {
  const result = useAtomValue(souhaitoGachaTenResultAtom)
  return <ComponentCopyButton copyString={makeNoteContent(result ?? [["", "", ""]])} />
}

export default memo(CopyButton)
