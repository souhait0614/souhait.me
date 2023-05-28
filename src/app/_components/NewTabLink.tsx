import * as styles from "./NewTabLink.css"

import { ExternalLink } from "tabler-icons-react"

import type { ReactNode } from "react"

interface NewTabLinkProps {
  children: ReactNode
  href: string
}
export const NewTabLink = ({ href, children }: NewTabLinkProps) => (
  <a href={href} target="_blank" className={styles.link}>
    <span>{children}</span>
    <ExternalLink size={16} className={styles.externalIcon} />
  </a>
)
