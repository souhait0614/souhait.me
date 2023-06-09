import "the-new-css-reset/css/reset.css"
import ComponentLoading from "./loading"
import * as styles from "./layout.css"
import { lightTheme } from "./theme.css"
import Analytics from "./_components/Analytics"
import { baseMetadata } from "./_baseMetadata"

import Header from "@/app/_components/Header"

import { IBM_Plex_Sans_JP } from "next/font/google"
import { Suspense } from "react"
import clsx from "clsx"
import { Copyright } from "tabler-icons-react"
import merge from "ts-deepmerge"

import type { Metadata } from "next"

const plex = IBM_Plex_Sans_JP({ subsets: ["latin", "latin-ext"], weight: "400" })

export const metadata: Metadata = merge(baseMetadata, {
  title: {
    template: "%s | souhait.me",
    absolute: "souhait.me",
  },
  description: "すえとすえちゃんのサイト",
  openGraph: {
    title: {
      template: "%s | souhait.me",
      absolute: "souhait.me",
    },
    description: "すえとすえちゃんのサイト",
  },
  twitter: {
    title: {
      template: "%s | souhait.me",
      absolute: "souhait.me",
    },
    description: "すえとすえちゃんのサイト",
  },
})

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja" className={clsx(plex.className, lightTheme)}>
    <body>
      <div className={styles.baseLayout}>
        <Header />
        <div className={styles.pageContainer}>
          <Suspense fallback={<ComponentLoading />}>{children}</Suspense>
        </div>
        <footer className={styles.footer}>
          <small className={styles.footerText}>
            <Copyright size={16} className={styles.footerCopyrightIcon} />
            <span>2023</span>
            <span>すえ</span>
          </small>
        </footer>
      </div>
      <Analytics />
    </body>
  </html>
)

export default RootLayout
