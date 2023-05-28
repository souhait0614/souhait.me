import * as styles from "./Loading.css"

import { Loader } from "tabler-icons-react"
import clsx from "clsx"

import type { ComponentProps } from "react"
const Loading = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <Loader size={48} className={styles.loader} />
    </div>
  )
}

export default Loading
