import * as styles from "./page.css"

import BasicPage from "../_components/BasicPage"
import { Card } from "../_components/Card"
import { NewTabLink } from "../_components/NewTabLink"

import Link from "next/link"

import type { Metadata } from "next"
import type { ReactNode } from "react"

interface AppCardProps {
  name: string
  href: string
  description?: ReactNode
}
const AppCard = ({ name, href, description }: AppCardProps) => (
  <Card>
    <article className={styles.appCardContent}>
      <h2 className={styles.appName}>
        <Link href={`/play/${href}`}>{name}</Link>
      </h2>
      {description}
    </article>
  </Card>
)

export const metadata: Metadata = {
  title: "お遊び",
}

const Play = () => (
  <BasicPage h1="お遊び">
    <AppCard
      name="そうはいとガチャ"
      href="souhaito-gacha"
      description={
        <>
          <p>絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。</p>
          <p>
            <s>なにこれ</s>
          </p>
          <p>
            <NewTabLink href="https://submarin.online/@f/pages/souhait">これ</NewTabLink>
            を勝手に移植・改造しました
          </p>
        </>
      }
    />
  </BasicPage>
)

export default Play
