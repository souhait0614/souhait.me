import * as styles from "./page.css"

import BasicPage from "../_components/BasicPage"
import { NewTabLink } from "../_components/NewTabLink"
import { Card, CardContent, CardHeader } from "../_components/Card"

import { M_PLUS_Rounded_1c, IBM_Plex_Sans_JP } from "next/font/google"
import { assignInlineVars } from "@vanilla-extract/dynamic"

import type { Metadata } from "next"

const font = M_PLUS_Rounded_1c({
  weight: "900",
  subsets: ["latin", "latin-ext"],
})

const plex = IBM_Plex_Sans_JP({ subsets: ["latin", "latin-ext"], weight: "400" })

export const metadata: Metadata = {
  title: "お探しのページは存在しません",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

interface Link {
  href: string
  label?: string
}

const gyaguLinkList: Link[] = [
  { href: "https://midra.me" },
  { href: "https://lunachi.me/gyagu/" },
  { href: "https://sunset0916.net/gyagu/" },
  { href: "https://hayao0819.com/#Gyagu" },
  { href: "https://lutica.net/gyagu/" },
  { href: "https://cffn.pw/r/gyagu", label: "cffn.pw/r" },
]

const notGyaguLinkList: Link[] = [
  { href: "https://hisubway.online" },
  { href: "https://taiy.me" },
  { href: "https://stesan.dev" },
  { href: "https://matechan.com" },
  { href: "https://kitazawa.me" },
]

const Product = () => (
  <BasicPage className={font.className}>
    <Card>
      <h1 className={styles.noisyText}>
        このサイトはうるさくないので、
        <br />
        お探しのページは存在しません。
      </h1>
    </Card>
    <Card>
      <CardContent>
        <CardHeader>もしかして： うるさいと</CardHeader>
        <ul>
          {gyaguLinkList.map(({ href, label }, i) => (
            <li
              key={href}
              className={styles.noisyList}
              // style={{ [styles.noisyListDelay]: `${i / 4}s` }}
              style={assignInlineVars({ [styles.noisyListDelay]: `${i / 16}s` })}
            >
              <NewTabLink href={href}>
                うるさいと{i + 1} ({label ?? new URL(href).hostname})
              </NewTabLink>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    <Card className={plex.className}>
      <CardContent>
        <CardHeader>もしかして： うるさくない</CardHeader>
        <ul>
          {notGyaguLinkList.map(({ href, label }) => (
            <li key={href}>
              <NewTabLink href={href}>{label ?? new URL(href).hostname}</NewTabLink>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    <p className={styles.noisyText}>連絡くれたら載せるかも</p>
  </BasicPage>
)

export default Product
