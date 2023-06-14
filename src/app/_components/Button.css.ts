import { vars } from "../theme.css"

import { recipe } from "@vanilla-extract/recipes"

export const button = recipe({
  base: {
    height: "2rem",
    paddingRight: "0.75rem",
    paddingLeft: "0.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.25rem",
    position: "relative",
    overflow: "hidden",
    paddingTop: "1px",
    textDecoration: "none !important",
    fontSize: "initial",
    ":disabled": {
      backgroundColor: vars.color.disabled,
    },
    selectors: {
      "&:is(:hover, :focus)::after": {
        content: "",
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#0002",
      },
    },
  },
  variants: {
    color: {
      accent: {
        backgroundColor: vars.color.accent,
        color: vars.color.container,
      },
      transparent: {
        backgroundColor: "transparent",
        color: vars.color.accent,
      },
    },
  },
  defaultVariants: {
    color: "accent",
  },
})
