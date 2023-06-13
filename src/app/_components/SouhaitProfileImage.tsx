"use client"

import * as styles from "./SouhaitProfileImage.css"
import Loading from "./Loading"

import { souhait, souhaitOld1, souhaitOld2, souhaitOld3 } from "@/images"

import Image from "next/image"
import { useCallback, useState } from "react"
import { useKonami } from "react-konami-code"

const souhaitImages = [souhait, souhaitOld1, souhaitOld2, souhaitOld3]

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
        src={souhaitImages[index] ?? ""}
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
