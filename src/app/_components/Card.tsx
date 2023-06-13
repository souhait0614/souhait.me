import * as styles from "./Card.css"

import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  asChild?: boolean
}
export const Card = ({ asChild, className, ...props }: CardProps) => {
  const Comp = asChild ? Slot : "div"
  return <Comp className={clsx(styles.card, className)} {...props} />
}
interface CardContentProps {
  children: ReactNode
  className?: string
  asChild?: boolean
}
export const CardContent = ({ asChild, className, ...props }: CardContentProps) => {
  const Comp = asChild ? Slot : "section"
  return <Comp className={clsx(styles.content, className)} {...props} />
}
interface CardHeaderProps {
  children?: ReactNode
  className?: string
  asChild?: boolean
}
export const CardHeader = ({ asChild, className, ...props }: CardHeaderProps) => {
  const Comp = asChild ? Slot : "h2"
  return <Comp className={clsx(styles.header, className)} {...props} />
}
