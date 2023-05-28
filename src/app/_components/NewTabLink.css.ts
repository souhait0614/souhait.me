import { vars } from "../theme.css"

import { style } from "@vanilla-extract/css"

export const link = style({
  color: vars.color.accent,
})

export const externalIcon = style({
  verticalAlign: "middle",
  marginLeft: "2px",
  marginBottom: "4px",
})
