import { vars } from "../theme.css"

import { style } from "@vanilla-extract/css"

export const profileContainer = style({
  margin: "0 -0.5rem",
  height: "512px",
  position: "relative",
})

export const profileCardContainer = style({
  margin: "0 0.5rem",
  position: "absolute",
  right: 0,
  bottom: 0,
})

export const galleryImagesContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyItems: "center",
  selectors: {
    "&:has(> *:only-of-type)": {
      gridTemplateColumns: "1fr",
    },
  },
  "@media": {
    "screen and (max-width: 500px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const galleryImage = style({
  maxWidth: `${256 + 128}px`,
  width: "100%",
  height: "auto",
  borderRadius: vars.shape.radius,
})
