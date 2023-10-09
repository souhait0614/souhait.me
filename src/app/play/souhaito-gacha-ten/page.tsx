import GachaResult from "./_components/GachaResultText"
import RunGachaButton from "./_components/RunGachaButton"
import ComponentPostButton from "./_components/PostButton"
import CopyButton from "./_components/CopyButton"
import * as styles from "./page.css"

import ServerHostSelector from "../_components/ServerHostSelector"

import BasicPage from "@/app/_components/BasicPage"
import { Card } from "@/app/_components/Card"
import { baseMetadata } from "@/app/_baseMetadata"
import { Button } from "@/app/_components/Button"

import merge from "ts-deepmerge"

import type { Metadata } from "next"

export const metadata: Metadata = merge(baseMetadata, {
  title: "そうはいとガチャ 10連",
  description: "絵文字がランダムで三つ×10出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  openGraph: {
    title: "そうはいとガチャ 10連",
    description:
      "絵文字がランダムで三つ×10出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  },
  twitter: {
    title: "そうはいとガチャ 10連",
    description:
      "絵文字がランダムで三つ×10出力され、結果をMisskeyに投稿したりコピーしたりできます。",
  },
})

const SouhaitoGacha = () => (
  <BasicPage>
    <Card className={styles.resultCard}>
      <h1 className={styles.title}>そうはいとガチャ 10連</h1>
      <div className={styles.resultText}>
        <GachaResult />
      </div>
      <div className={styles.actionSelectContainer}>
        <ServerHostSelector className={styles.actionSelect} />
      </div>
      <div className={styles.actionGachaGrope}>
        <Button className={styles.actionGacha} asChild>
          <a href="./souhaito-gacha">ガチャを回す</a>
        </Button>
        <RunGachaButton className={styles.actionGacha}>10連ガチャを回す</RunGachaButton>
      </div>
    </Card>
    <div className={styles.shareContainer}>
      <CopyButton />
      <ComponentPostButton />
    </div>
  </BasicPage>
)

export default SouhaitoGacha
