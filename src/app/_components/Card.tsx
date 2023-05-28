import * as styles from "./Card.css"

import clsx from "clsx"

import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}
export const Card = ({ children, className }: CardProps) => (
  <div className={clsx(styles.card, className)}>{children}</div>
)

interface CardContentProps {
  children: ReactNode
}
export const CardContent = ({ children }: CardContentProps) => (
  <section className={styles.content}>{children}</section>
)
interface CardHeaderProps {
  children: ReactNode
}
export const CardHeader = ({ children }: CardHeaderProps) => (
  <h2 className={styles.header}>{children}</h2>
)
