"use client"

import * as styles from "./PostButton.css"

import { makeNoteContent } from "../_makeNoteContent"

import { Button } from "@/app/_components/Button"
import { souhaitoGachaResultAtom, souhaitoGachaSelectedServerHostAtom } from "@/app/_atom"

import { Send } from "tabler-icons-react"
import { memo, type ComponentPropsWithRef, useMemo } from "react"
import { useAtomValue } from "jotai"
import clsx from "clsx"

const PostButton = ({ className, ...props }: ComponentPropsWithRef<"button">) => {
  const result = useAtomValue(souhaitoGachaResultAtom)
  const selectedServerHost = useAtomValue(souhaitoGachaSelectedServerHostAtom)
  const postUrl = useMemo(() => {
    const url = new URL(`https://${selectedServerHost}/share`)
    url.searchParams.set("text", makeNoteContent(result ?? ["", "", ""]))
    return url
  }, [selectedServerHost, result])
  return !selectedServerHost ? (
    <Button disabled className={clsx(styles.button, className)} {...props}>
      <Send className={styles.icon} />
      <span>サーバー読み込み中</span>
    </Button>
  ) : (
    <Button asChild className={clsx(styles.button, className)} {...props}>
      <a href={postUrl.toString()} target="_blank">
        <Send className={styles.icon} />
        <span>{selectedServerHost}に投稿</span>
      </a>
    </Button>
  )
}

export default memo(PostButton)
