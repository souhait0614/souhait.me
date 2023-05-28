import { keyframes, style } from "@vanilla-extract/css"

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const container = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  display: "grid",
  placeContent: "center",
})

export const loader = style({
  animation: `${rotate} 3s linear infinite`,
})
