import { vars } from "./theme.css"

import { linearGradient } from "polished"
import { globalStyle, style } from "@vanilla-extract/css"

export const profileBannerContainer = style({
  height: "12rem",
  position: "relative",
  "@media": {
    "screen and (max-width: 500px)": {
      height: "8rem",
    },
  },
  "::after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "block",
    width: "100%",
    height: "100%",
    opacity: 0.7,
    ...linearGradient({
      colorStops: ["transparent 0%", `${vars.color.bg} 100%`],
      toDirection: "to bottom",
    }),
  },
})

export const profileBanner = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const profileContent = style({
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  marginTop: 0,
  gap: "0.5rem",
})

export const profileAvatarContainer = style({
  width: "120px",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "50%",
  marginTop: "-60px",
  alignSelf: "center",
  zIndex: 2,
})

export const profileTextContainer = style({
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const profileName = style({
  width: "100%",
  paddingBottom: "0.25rem",
  marginBottom: "0.5rem",
  fontSize: "1.25rem",
  fontWeight: "bold",
  borderBottom: "1px solid",
  borderBottomColor: vars.color.border,
})

export const profileInfoContainer = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, calc(100% / 3))",
  gridTemplateRows: "auto",
  gridTemplateAreas: '". c ."',
  rowGap: "0.5rem",
  "@media": {
    "screen and (max-width: 500px)": {
      marginTop: "0.5rem",
      gridTemplateColumns: "repeat(2, calc(100% / 2))",
      gridTemplateRows: "auto auto",
      gridTemplateAreas: '"c c" ". ."',
    },
  },
})

globalStyle(`${profileInfoContainer}>dt`, {
  display: "none",
})

globalStyle(`${profileInfoContainer}>dd`, {
  width: "100%",
  display: "grid",
  placeContent: "center",
})

globalStyle(`${profileInfoContainer}>dd:nth-of-type(2)`, {
  gridArea: "c",
})

globalStyle(`${profileInfoContainer}>dd>div`, {
  display: "grid",
  gridTemplateRows: "1fr auto",
  gap: "0.25rem",
  justifyItems: "center",
  textAlign: "center",
})

export const profileLinksContainer = style({
  width: "100%",
  display: "flex",
})

export const profileLinkWrapper = style({
  width: "100%",
  display: "grid",
  placeContent: "center",
})

export const videoContainer = style({
  width: "100%",
  aspectRatio: "16 / 9",
})

globalStyle(`${videoContainer} iframe`, {
  width: "100%",
  height: "100%",
  border: 0,
})
