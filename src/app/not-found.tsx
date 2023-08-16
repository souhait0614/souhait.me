"use client"

import { Button } from "./_components/Button"
import * as styles from "./error.css"

import { useEffectOnce } from "react-use"
import { useRouter } from "next/navigation"
import { ArrowBack } from "tabler-icons-react"
const NotFound = () => {
  const router = useRouter()
  useEffectOnce(() => {
    document.title = "お探しのページは存在しません"
  })
  return (
    <main className={styles.main}>
      <h1>お探しのページは存在しません</h1>
      <Button
        className={styles.button}
        onClick={() => {
          router.back()
        }}
      >
        <ArrowBack className={styles.icon} />
        <span>戻る</span>
      </Button>
    </main>
  )
}

export default NotFound
