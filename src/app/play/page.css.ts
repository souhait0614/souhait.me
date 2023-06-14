import { globalStyle, style } from "@vanilla-extract/css"

export const appCardContent = style({
  margin: "0.5rem 1rem",
})

export const appName = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.25rem",
})

globalStyle(`${appCardContent} p`, {
  marginBottom: "0.2rem",
})
