import * as styles from "./page.css"
import GachaResult from "./_components/GachaResultText"
import ServerHostSelector from "./_components/ServerHostSelector"
import RunGachaButton from "./_components/RunGachaButton"
import PostButton from "./_components/PostButton"
import CopyButton from "./_components/CopyButton"

import BasicPage from "@/app/_components/BasicPage"
import { Card } from "@/app/_components/Card"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "そうはいとガチャ",
}

const SouhaitoGacha = () => (
  <BasicPage>
    <Card className={styles.resultCard}>
      <h1 className={styles.title}>そうはいとガチャ</h1>
      <p className={styles.resultText}>
        <GachaResult />
      </p>
      <div className={styles.actionGroupe}>
        <div className={styles.actionSelectContainer}>
          <ServerHostSelector className={styles.actionSelect} />
        </div>
        <RunGachaButton className={styles.actionGacha}>ガチャを回す</RunGachaButton>
      </div>
    </Card>
    <div className={styles.shareContainer}>
      <CopyButton />
      <PostButton />
    </div>
  </BasicPage>
)

export default SouhaitoGacha
