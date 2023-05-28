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
})
