"use client"

import * as styles from "./SouhaitProfileImage.css"
import Loading from "./Loading"

import Image from "next/image"
import { useCallback, useState } from "react"
import { useKonami } from "react-konami-code"

const souhaitImages = ["souhait.png", "souhait_old1.png", "souhait_old2.png", "souhait_old3.png"]

export const SouhaitProfileImage = () => {
  const [index, setIndex] = useState(0)
  const handleKonami = useCallback(() => {
    setLoading(true)
    setIndex((p) => (p + 1) % souhaitImages.length)
  }, [])
  useKonami(handleKonami)

  const [loading, setLoading] = useState(true)

  return (
    <div className={styles.container}>
      <Image
        src={`https://img.souhait.me/${souhaitImages[index]}`}
        height={512}
        width={512}
        alt="すえちゃん"
        priority
        onLoadingComplete={() => {
          setLoading(false)
        }}
        className={styles.fade[loading ? "out" : "in"]}
      />
      <Loading className={styles.fade[loading ? "in" : "out"]} />
    </div>
  )
}
