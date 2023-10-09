"use client"

import * as styles from "./PostButton.css"

import { Button } from "@/app/_components/Button"

import { Copy } from "tabler-icons-react"
import { memo, type ComponentPropsWithRef } from "react"
import clsx from "clsx"
import { useCopyToClipboard } from "react-use"

interface CopyButtonProps extends ComponentPropsWithRef<"button"> {
  copyString: string
}
const CopyButton = ({ copyString, className, ...props }: CopyButtonProps) => {
  const [, copy] = useCopyToClipboard()
  return (
    <Button
      buttonColor="transparent"
      className={clsx(styles.button, className)}
      onClick={() => {
        copy(copyString)
      }}
      {...props}
    >
      <Copy className={styles.icon} />
      <span>コピー</span>
    </Button>
  )
}

export default memo(CopyButton)
