import { vars } from "@/app/theme.css"

import { style, styleVariants } from "@vanilla-extract/css"

export const container = style({
  position: "absolute",
  left: 0,
  top: "2.5rem",
  width: "512px",
  height: "512px",
  "@media": {
    "screen and (max-width: 512px)": {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
})

const fadeBase = style({
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: vars.transition.duration,
})

export const fade = styleVariants({
  out: [
    fadeBase,
    {
      opacity: 0,
    },
  ],
  in: [
    fadeBase,
    {
      opacity: 1,
    },
  ],
})
