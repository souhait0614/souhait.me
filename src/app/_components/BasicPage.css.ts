import { vars } from "../theme.css"

import { keyframes, style } from "@vanilla-extract/css"

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const main = style({
  margin: "0.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  opacity: 0,
  animationName: fadeIn,
  animationDuration: vars.transition.duration,
  animationTimingFunction: "ease-in-out",
  animationFillMode: "both",
  position: "relative",
})

export const h1 = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  opacity: 0,
})
