import * as styles from "./page.css"
import GachaResult from "./_components/GachaResultText"
import RunGachaButton from "./_components/RunGachaButton"
import PostButton from "./_components/PostButton"
import CopyButton from "./_components/CopyButton"

import ServerHostSelector from "../_components/ServerHostSelector"

import BasicPage from "@/app/_components/BasicPage"
import { Card } from "@/app/_components/Card"
import { baseMetadata } from "@/app/_baseMetadata"
import { Button } from "@/app/_components/Button"

import merge from "ts-deepmerge"

import type { Metadata } from "next"

export const metadata: Metadata = merge(baseMetadata, {
  title: "そうはいとガチャ",
  description: "絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  openGraph: {
    title: "そうはいとガチャ",
    description: "絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  },
  twitter: {
    title: "そうはいとガチャ",
    description: "絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  },
})

const SouhaitoGacha = () => (
  <BasicPage>
    <Card className={styles.resultCard}>
      <h1 className={styles.title}>そうはいとガチャ</h1>
      <p className={styles.resultText}>
        <GachaResult />
      </p>
      <div className={styles.actionSelectContainer}>
        <ServerHostSelector className={styles.actionSelect} />
      </div>
      <div className={styles.actionGachaGrope}>
        <RunGachaButton className={styles.actionGacha}>ガチャを回す</RunGachaButton>
        <Button className={styles.actionGacha} asChild>
          <a href="./souhaito-gacha-ten">10連ガチャを回す</a>
        </Button>
      </div>
    </Card>
    <div className={styles.shareContainer}>
      <CopyButton />
      <PostButton />
    </div>
  </BasicPage>
)

export default SouhaitoGacha