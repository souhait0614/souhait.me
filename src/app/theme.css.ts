import { createTheme } from "@vanilla-extract/css"
import { rgb, rgba } from "polished"

export const transitionValues = {
  duration: 0.2,
} as const

export const [lightTheme, vars] = createTheme({
  color: {
    bg: rgb(251, 244, 241),
    fg: rgb(66, 66, 66),
    container: rgb(254, 252, 254),
    accent: rgb(0, 126, 102),
    border: rgba(66, 66, 66, 0.2),
  },
  shape: {
    radius: "0.5rem",
  },
  transition: {
    duration: `${transitionValues.duration}s`,
  },
})
