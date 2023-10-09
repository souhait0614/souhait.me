"use client"

import { makeNoteContent } from "../_makeNoteContent"
import ComponentCopyButton from "../../_components/CopyButton"

import { souhaitoGachaResultAtom } from "@/app/_atom"

import { memo } from "react"
import { useAtomValue } from "jotai"

const CopyButton = () => {
  const result = useAtomValue(souhaitoGachaResultAtom)
  return <ComponentCopyButton copyString={makeNoteContent(result ?? ["", "", ""])} />
}

export default memo(CopyButton)
