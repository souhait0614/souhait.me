import { globalStyle, style } from "@vanilla-extract/css"

export const productCardContent = style({
  margin: "0.5rem 1rem",
})

export const productName = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.25rem",
})

globalStyle(`${productCardContent} p`, {
  marginBottom: "0.2rem",
})
