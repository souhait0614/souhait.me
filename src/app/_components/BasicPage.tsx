"use client"

import * as styles from "./BasicPage.css"

import clsx from "clsx"

import type { ReactNode } from "react"

interface PageProps {
  children: ReactNode
  className?: string
}
const BasicPage = ({ children, className }: PageProps) => (
  <main className={clsx(styles.main, className)}>{children}</main>
)

export default BasicPage
