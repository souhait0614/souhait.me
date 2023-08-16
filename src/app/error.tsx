"use client"

import { Button } from "./_components/Button"
import * as styles from "./error.css"

import { useEffectOnce } from "react-use"
import { useRouter } from "next/navigation"
import { ArrowBack } from "tabler-icons-react"
const Error = () => {
  const router = useRouter()
  useEffectOnce(() => {
    document.title = "エラーが発生しました"
  })
  return (
    <main className={styles.main}>
      <h1>エラーが発生しました</h1>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={() => {
            router.refresh()
          }}
        >
          <ArrowBack className={styles.icon} />
          <span>再読み込み</span>
        </Button>
        <Button
          buttonColor="transparent"
          className={styles.button}
          onClick={() => {
            router.back()
          }}
        >
          <ArrowBack className={styles.icon} />
          <span>戻る</span>
        </Button>
      </div>
    </main>
  )
}

export default Error
