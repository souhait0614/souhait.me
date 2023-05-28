import { createVar, keyframes, style } from "@vanilla-extract/css"
import { rgb } from "polished"

export const noisyTextAnime = keyframes({
  to: {
    backgroundPositionX: "200%",
  },
})

export const noisyText = style({
  margin: "1rem 0",
  color: "transparent",
  // fontWeight: "bolder",
  background: `linear-gradient(90deg, ${rgb(255, 0, 0)} 0%, ${rgb(255, 154, 0)} 10%, ${rgb(
    208,
    222,
    33,
  )} 20%, ${rgb(79, 220, 74)} 30%, ${rgb(63, 218, 216)} 40%, ${rgb(47, 201, 226)} 50%, ${rgb(
    28,
    127,
    238,
  )} 60%, ${rgb(95, 21, 242)} 70%, ${rgb(186, 12, 248)} 80%, ${rgb(251, 7, 217)} 90%, ${rgb(
    255,
    0,
    0,
  )} 100%) 0% center / 200% auto`,
  backgroundClip: "text",
  animation: `${noisyTextAnime} 2s linear infinite`,
  textAlign: "center",
  fontSize: "2rem",
})

export const noisyListDelay = createVar()

export const noisyListAnime = keyframes({
  to: {
    marginLeft: "1rem",
  },
})

export const noisyList = style({
  vars: {
    [noisyListDelay]: "0s",
  },
  animation: `${noisyListAnime} 0.25s ease-in-out ${noisyListDelay} infinite alternate`,
})
