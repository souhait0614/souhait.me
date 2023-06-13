"use client"

import * as styles from "./BasicPage.css"

import clsx from "clsx"

import type { ReactNode } from "react"

interface PageProps {
  children: ReactNode
  h1?: string
  className?: string
}
const BasicPage = ({ children, h1, className }: PageProps) => (
  <main className={clsx(styles.main, className)}>
    {h1 && <h1 className={styles.h1}>{h1}</h1>}
    {children}
  </main>
)

export default BasicPage
