import { vars } from "../theme.css"

import { globalStyle, style, styleVariants } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  overflow: "auto hidden",
})

globalStyle(`${container} a:hover`, {
  textDecoration: "none",
})

const pageLinkBase = style({
  padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  lineHeight: "1rem",
  gap: "0.25rem",
  whiteSpace: "nowrap",
  color: vars.color.fg,
  position: "relative",
  "::after": {
    content: "",
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "3px",
    borderRadius: "2px",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: vars.transition.duration,
  },
})

export const pageLink = styleVariants({
  normal: [
    pageLinkBase,
    {
      "::after": {
        backgroundColor: "transparent",
      },
    },
  ],
  selected: [
    pageLinkBase,
    {
      color: vars.color.accent,
      "::after": {
        backgroundColor: vars.color.accent,
      },
    },
  ],
})

export const pageLinkIcon = style({
  marginBottom: "0.1rem",
})
