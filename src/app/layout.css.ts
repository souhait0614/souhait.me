import { vars } from "./theme.css"

import { globalStyle, style } from "@vanilla-extract/css"

globalStyle("html, body", {
  backgroundColor: vars.color.bg,
  color: vars.color.fg,
  accentColor: vars.color.accent,
})

globalStyle("a", {
  color: vars.color.accent,
  textDecoration: "none",
})

globalStyle("a:hover", {
  textDecoration: "underline",
})

globalStyle("s", {
  textDecoration: "line-through",
})

globalStyle("rt", {
  fontSize: "50%",
  textAlign: "start",
})

globalStyle("dl", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "1rem",
})

export const baseLayout = style({
  width: "100%",
  maxWidth: "45rem",
  minHeight: ["calc(100vh - 1rem)", "calc(100dvh - 1rem)"],
  margin: "0.5rem auto",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "100%",
})

export const pageContainer = style({
  overflow: "hidden",
})

export const footer = style({
  height: "3rem",
  display: "grid",
  placeContent: "center",
})

export const footerText = style({
  display: "flex",
  alignItems: "center",
  gap: "0.1rem",
})

export const footerCopyrightIcon = style({
  marginBottom: "0.1rem",
})
