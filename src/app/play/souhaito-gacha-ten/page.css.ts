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
  height: "20em",
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
  border: `1px solid ${vars.color.accent}`,
  borderRadius: "1rem",
  padding: "0 0.5rem",
})

export const actionGachaGrope = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
})

export const actionGacha = style({
  borderRadius: "1rem",
})

export const shareContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  "@media": {
    "screen and (max-width: 450px)": {
      borderRadius: "1rem",
      flexDirection: "column-reverse",
    },
  },
})
