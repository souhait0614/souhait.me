import { vars } from "@/app/theme.css"

import { style } from "@vanilla-extract/css"

export const main = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
})

export const buttons = style({
  display: "flex",
  gap: "1rem",
})

export const button = style({
  borderRadius: vars.shape.radius,
})

export const icon = style({
  marginBottom: "1px",
})
