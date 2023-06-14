"use client"

import * as styles from "./PostButton.css"

import { makeNoteContent } from "../_makeNoteContent"

import { Button } from "@/app/_components/Button"
import { souhaitoGachaResultAtom } from "@/app/_atom"

import { Copy } from "tabler-icons-react"
import { memo, type ComponentPropsWithRef } from "react"
import { useAtomValue } from "jotai"
import clsx from "clsx"
import { useCopyToClipboard } from "react-use"

const CopyButton = ({ className, ...props }: ComponentPropsWithRef<"button">) => {
  const [, copy] = useCopyToClipboard()
  const result = useAtomValue(souhaitoGachaResultAtom)
  return (
    <Button
      buttonColor="transparent"
      className={clsx(styles.button, className)}
      onClick={() => {
        copy(makeNoteContent(result ?? ["", "", ""]))
      }}
      {...props}
    >
      <Copy className={styles.icon} />
      <span>コピー</span>
    </Button>
  )
}

export default memo(CopyButton)
