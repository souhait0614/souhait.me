import * as styles from "./PostButton.css"

import { Button } from "@/app/_components/Button"

import { memo } from "react"
import { Send } from "tabler-icons-react"
import clsx from "clsx"

import type { ComponentPropsWithRef } from "react"

interface PostButtonProps extends ComponentPropsWithRef<"button"> {
  loading: boolean
  postUrl: string
  serverHost: string
}
const PostButton = ({ loading, postUrl, serverHost, className, ...props }: PostButtonProps) => {
  return loading ? (
    <Button disabled className={clsx(styles.button, className)} {...props}>
      <Send className={styles.icon} />
      <span>サーバー読み込み中</span>
    </Button>
  ) : (
    <Button asChild className={clsx(styles.button, className)} {...props}>
      <a href={postUrl} target="_blank">
        <Send className={styles.icon} />
        <span>{serverHost}に投稿</span>
      </a>
    </Button>
  )
}

export default memo(PostButton)
