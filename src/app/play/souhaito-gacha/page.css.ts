import { vars } from "@/app/theme.css"

import { style } from "@vanilla-extract/css"

export const resultCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignItems: "center",
  padding: "1.5rem 1rem",
})

export const title = style({
  margin: 0,
  fontSize: "1.5rem",
})

export const resultText = style({
  height: "2em",
  display: "flex",
  alignItems: "center",
})

export const actionGroupe = style({
  border: `1px solid ${vars.color.accent}`,
  borderRadius: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "2rem",
  alignItems: "center",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 450px)": {
      border: 0,
      width: "100%",
      gridTemplateColumns: "100%",
      gridTemplateRows: "2rem 2rem",
      gap: "1rem",
    },
  },
})

export const actionSelectContainer = style({
  paddingRight: "0.75rem",
  paddingLeft: "0.75rem",
  display: "flex",
  justifyContent: "center",
  gap: "0.25rem",
  "::before": {
    content: "サーバー:",
  },
})

export const actionSelect = style({
  color: vars.color.accent,
  cursor: "pointer",
  "@media": {
    "screen and (max-width: 450px)": {
      border: `1px solid ${vars.color.accent}`,
      borderRadius: "1rem",
      padding: "0 0.5rem",
    },
  },
})

export const actionGacha = style({
  borderRadius: 0,
  "@media": {
    "screen and (max-width: 450px)": {
      borderRadius: "1rem",
    },
  },
})

export const shareContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
})
