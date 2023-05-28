import { vars } from "../theme.css"

import { globalStyle, style } from "@vanilla-extract/css"

export const card = style({
  overflow: "hidden",
  backgroundColor: vars.color.container,
  borderRadius: vars.shape.radius,
  position: "relative",
})

export const content = style({
  margin: "1rem 1.5rem",
})

export const header = style({
  margin: "-1rem -1.5rem",
  padding: "0.5rem 1rem",
  marginBottom: "1rem",
  borderBottom: "1px solid",
  borderBottomColor: vars.color.border,
  fontWeight: "bold",
})

globalStyle(`${content} h3`, {
  marginTop: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
})

globalStyle(`${content} ul`, {
  margin: "0.25rem 0",
  paddingLeft: "1.5rem",
  listStyle: "outside",
})
